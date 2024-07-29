'use client'

import Option from './Option'

export interface CourseQuestionProps {
  idActivity: number
  question: string
  option1: string
  option2: string
  option3: string
  option4: string
  correctAnswer: string
  answer: string
}

export default function CourseQuestion({
  idActivity,
  question,
  option1,
  option2,
  option3,
  option4,
  correctAnswer,
  answer,
}: CourseQuestionProps) {
  function setAnswer(newAnswer: string) {
    answer = newAnswer

    console.log(answer)
  }

  return answer !== correctAnswer ? (
    <div className="flex flex-col gap-8">
      <div className="mb-8 rounded-lg bg-slate-700 p-4 text-slate-100">
        {question}
      </div>
      <Option idActivity={idActivity} option={option1} index="1" />
      <Option idActivity={idActivity} option={option2} index="2" />
      <Option idActivity={idActivity} option={option3} index="3" />
      <Option idActivity={idActivity} option={option4} index="4" />
    </div>
  ) : null
}
