'use client'

import { useEffect, useState } from 'react'
import { DynamicRoute } from '../../../../server/utils/validators/dynamic.route'
import {
  getCourseInfo,
  ICourseInfoResponse,
} from '../../../api/course/get-course-info.endpoint'
import { useHomeData } from '../../provider-home-data'
import { useModal } from '../../../../presentation/hooks/useModal'
import { answerActivity } from '../../../api/activities/answer-activity.endpoint'
import CourseQuestion from '../../../../presentation/components/course/CourseQuestion'
import { Footer } from '../../../../presentation/components/landing-page/Footer'

export default function CoursePage({ params }: DynamicRoute) {
  const [course, setCourse] = useState<ICourseInfoResponse>()
  const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false)
  const [isCourseConcluded, setCourseConcluded] = useState<boolean>(false)

  const { token } = useHomeData()

  const courseId = Number(params.id)

  const { modal, setModal, openCloseModal } = useModal()

  useEffect(() => {
    ;(async () => {
      const data = await getCourseInfo(token, courseId)

      if ('statusCode' in data) {
        setIsCourseLoading(false)
        setModal({ message: data.message, type: 'error' })
      } else {
        setCourse(data)

        if (data.user_concluded_course === true) setCourseConcluded(true)

        setIsCourseLoading(false)
      }
    })()
  }, [courseId])

  return (
    <main>
      <section className="flex flex-col gap-10 py-20">
        <h1 className="text-custom-gradient text-center text-3xl uppercase">
          {course?.course_name}
        </h1>
        <div className="flex flex-col gap-20">
          {course &&
            course.activities.map((activity) => {
              return (
                <CourseQuestion
                  idActivity={activity.id_activity}
                  question={activity.question}
                  option1={activity.option_1}
                  option2={activity.option_2}
                  option3={activity.option_3}
                  option4={activity.option_4}
                  correctAnswer={activity.correct_answer}
                  answer=""
                />
              )
            })}
        </div>
      </section>
      <Footer />
    </main>
  )
}
