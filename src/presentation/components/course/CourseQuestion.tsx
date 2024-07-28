'use client'

import Option from "./Option"

export interface CourseQuestionProps {
    id_activity: number
    question: string
    option_1: string
    option_2: string
    option_3: string
    option_4: string
    correct_answer: string
}

export default function CourseQuestion({ id_activity, question, option_1, option_2, option_3, option_4, correct_answer }: CourseQuestionProps) {
    return(
        <div className="flex flex-col gap-8">
        <div className="bg-slate-700 p-4 mb-8 rounded-lg text-slate-100">
            {question}
        </div>
            <Option id_activity={id_activity} option={option_1} index="1" />
            <Option id_activity={id_activity} option={option_2} index="2" />
            <Option id_activity={id_activity} option={option_3} index="3" />
            <Option id_activity={id_activity} option={option_4} index="4" />
        </div>
    )
}