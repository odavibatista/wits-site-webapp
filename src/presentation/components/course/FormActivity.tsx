'use client'

import { IActivity } from '@/app/api/course/get-course-info.endpoint'
import { CircleAlert, Square, SquareX } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { actions } from '@/actions'
import { toast } from 'sonner'

export function FormActivity({
  activity,
  courseId,
}: {
  activity: IActivity
  courseId: string
}) {
  const { replace } = useRouter()

  const [formState, action] = useFormState(actions.activity.update, {
    errors: {},
  })

  const [correctAnswer, setCorrectAnswer] = useState<string | null>(
    activity.correct_answer,
  )

  if (formState.errors._apiResponse) {
    return toast.error(formState.errors._apiResponse)
  }

  return (
    <form action={action} className="my-6">
      <input type="hidden" name="courseId" value={courseId} />
      <input type="hidden" name="activityId" value={activity.id_activity} />
      <input type="hidden" name="correctAnswer" value={correctAnswer ?? ''} />

      <InputQuestion
        defaultValue={activity.question}
        isInvalid={!!formState.errors.question}
        errorMessage={formState.errors.question}
      />
      <div className="my-5">(X) Selecionar com X a alternativa correta.</div>
      <div className="flex flex-col space-y-5 pb-20">
        <InputOption
          name="option1"
          numberOption="1"
          correctAnswer={correctAnswer}
          defaultValue={activity.option_1}
          setCorrectAnswer={setCorrectAnswer}
          isInvalid={!!formState.errors.option1}
          errorMessage={formState.errors.option1}
        />
        <InputOption
          name="option2"
          numberOption="2"
          correctAnswer={correctAnswer}
          defaultValue={activity.option_2}
          setCorrectAnswer={setCorrectAnswer}
          isInvalid={!!formState.errors.option2}
          errorMessage={formState.errors.option2}
        />
        <InputOption
          name="option3"
          numberOption="3"
          correctAnswer={correctAnswer}
          defaultValue={activity.option_3}
          setCorrectAnswer={setCorrectAnswer}
          isInvalid={!!formState.errors.option3}
          errorMessage={formState.errors.option3}
        />
        <InputOption
          name="option4"
          numberOption="4"
          correctAnswer={correctAnswer}
          defaultValue={activity.option_4}
          setCorrectAnswer={setCorrectAnswer}
          isInvalid={!!formState.errors.option4}
          errorMessage={formState.errors.option4}
        />
        <footer className="flex justify-end gap-5">
          <button
            onClick={() => replace(`/admin/cursos/${courseId}`)}
            type="button"
            className="rounded-md border bg-neutral-400 px-3 py-2"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md border bg-lime-500/60 px-3 py-2"
          >
            Salvar
          </button>
        </footer>
      </div>
    </form>
  )
}

function InputQuestion({
  defaultValue,
  isInvalid,
  errorMessage,
}: {
  defaultValue: string
  isInvalid: boolean
  errorMessage?: string[]
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="question" className="mb-2">
        Enunciado da questão:
      </label>
      <textarea
        name="question"
        id="question"
        defaultValue={defaultValue}
        className={`h-fit min-h-40 rounded-md bg-neutral-800 p-2.5 outline-none ${isInvalid ? 'border-danger-500' : ''}`}
      ></textarea>
      {errorMessage && (
        <span className="flex items-center gap-1 text-sm text-danger-500">
          <CircleAlert size={16} className="-translate-y-0.5" />
          {errorMessage}
        </span>
      )}
    </div>
  )
}

function InputOption({
  correctAnswer,
  setCorrectAnswer,
  defaultValue,
  name,
  numberOption,
  isInvalid,
  errorMessage,
}: {
  correctAnswer: string | null
  setCorrectAnswer: (value: string) => void
  defaultValue: string
  name: string
  numberOption: string
  isInvalid: boolean
  errorMessage?: string[]
}) {
  return (
    <div
      className={`relative flex items-center justify-between gap-3 rounded-md border bg-neutral-800 p-2 ${correctAnswer === numberOption ? 'border-lime-500' : ''}`}
    >
      <button
        onClick={() => setCorrectAnswer(numberOption)}
        className="flex"
        type="button"
      >
        {correctAnswer === numberOption ? <SquareX /> : <Square />}
      </button>
      <textarea
        name={name}
        defaultValue={defaultValue}
        className={`flex-1 rounded-md border border-neutral-900 bg-neutral-900 p-2 outline-none ${isInvalid ? 'border-danger-500' : ''}`}
      ></textarea>
      {errorMessage && (
        <span className="absolute right-4 flex items-center gap-1 text-sm text-danger-500">
          <CircleAlert size={16} className="-translate-y-0.5" />
          {errorMessage}
        </span>
      )}
    </div>
  )
}
