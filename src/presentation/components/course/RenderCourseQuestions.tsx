'use client'

import { answerActivity } from '@/app/api/activities/answer-activity.endpoint'
import { useCourse } from '@/presentation/hooks/useCourse'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function RenderCourseQuestions({
  token,
  courseId,
}: {
  token: string
  courseId: number
}) {
  const { replace } = useRouter()
  const { course, currentActivityIndex, points, rightAnswer, handleAnswer } =
    useCourse(token, courseId)

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(1800)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          replace('/timeout')
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [replace])

  if (!course) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12">
        <Loader2 className="h-20 w-20 animate-spin text-neutral-200" />
      </div>
    )
  }

  if (rightAnswer === course.activities.length) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-neutral-100">
        <span className="text-custom-gradient text-2xl">Curso concluído!</span>
        <span className="my-3">Pontuação total:</span>
        <span className="text-custom-gradient text-4xl">{points}</span>
        <button
          onClick={() => replace('/dashboard?exit=true')}
          className="mt-12 rounded-md bg-neutral-300 p-2 text-neutral-900"
        >
          Voltar à página inicial
        </button>
      </div>
    )
  }

  if (
    currentActivityIndex === course.activities.length &&
    rightAnswer < course.activities.length
  ) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-neutral-100">
        <span className="text-custom-gradient text-2xl">Quase lá!</span>
        <span className="my-3">Acertos:</span>
        <span className="text-custom-gradient text-4xl">
          {rightAnswer} / {course.activities.length}
        </span>
        <button
          onClick={() => replace('/dashboard?exit=true')}
          className="mt-12 rounded-md bg-neutral-300 p-2 text-neutral-900"
        >
          Voltar à página inicial
        </button>
      </div>
    )
  }

  const currentActivity = course.activities[currentActivityIndex]

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  const handleConfirmClick = async () => {
    if (selectedOption) {
      handleAnswer(selectedOption)
      const res = await answerActivity(token, currentActivity.id_activity, {
        answer: `${selectedOption}`,
      })
      console.log(res)
      setSelectedOption(null)
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className="flex flex-col space-y-3 leading-relaxed text-neutral-200">
      <h1 className="text-center text-xl">{course.course_name}</h1>
      <div className="flex justify-center">
        <span className="text-xl font-bold">{formatTime(timeLeft)}</span>
      </div>
      <div className="flex flex-col items-start space-y-3">
        <p>{currentActivity.question}</p>
        <button
          className={
            selectedOption === currentActivity.option_1
              ? 'rounded-md bg-neutral-800 p-2'
              : ''
          }
          onClick={() => handleOptionClick('1')}
        >
          {currentActivity.option_1}
        </button>
        <button
          className={
            selectedOption === currentActivity.option_2
              ? 'rounded-md bg-neutral-800 p-2'
              : ''
          }
          onClick={() => handleOptionClick('2')}
        >
          {currentActivity.option_2}
        </button>
        <button
          className={
            selectedOption === currentActivity.option_3
              ? 'rounded-md bg-neutral-800 p-2'
              : ''
          }
          onClick={() => handleOptionClick('3')}
        >
          {currentActivity.option_3}
        </button>
        <button
          className={
            selectedOption === currentActivity.option_4
              ? 'rounded-md bg-neutral-800 p-2'
              : ''
          }
          onClick={() => handleOptionClick('4')}
        >
          {currentActivity.option_4}
        </button>
        <footer className="flex w-full items-center justify-center">
          <button
            className="w-full max-w-md rounded-md bg-emerald-500 p-2 active:scale-95 disabled:bg-neutral-800"
            onClick={handleConfirmClick}
            disabled={!selectedOption}
          >
            Confirmar
          </button>
        </footer>
      </div>
    </div>
  )
}
