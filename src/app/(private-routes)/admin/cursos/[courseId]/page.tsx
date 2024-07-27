import { getCourseInfo } from '@/app/api/course/get-course-info.endpoint'
import { BtnDeleteActivity } from '@/presentation/components/button'
import { FormCourseName } from '@/presentation/components/course/FormCourseName'
import { courseTypeguard } from '@/server/utils/typeguard'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { use } from 'react'

export default function CourseIdPage({
  params,
}: {
  params: { courseId: string }
}) {
  const token = cookies().get('wits-app-session')?.value
  if (!token) redirect('/admin/cursos')

  const res = use(getCourseInfo(token, Number(params.courseId)))
  if (!courseTypeguard.isCourseInfoResponse(res)) redirect('/')

  return (
    <div>
      <h1 className="my-5 text-2xl opacity-90">{res.course_name}</h1>
      <FormCourseName
        courseName={res.course_name}
        pointsWorth={res.points_worth}
        courseId={params.courseId}
      />

      <section className="my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {res.activities.map((item) => (
          <article
            key={item.id_activity}
            className="flex flex-col justify-between rounded-md bg-neutral-800 p-2"
          >
            <div className="flex max-h-52 flex-col space-y-3">
              <span>
                <b>ID</b>: {item.id_activity}
              </span>
              <p>
                <b>Enunciado</b>:{' '}
                <span className="text-sm">
                  {item.question.slice(0, 200).concat('...')}
                </span>
              </p>
              <span>
                <b>Resposta</b>:{' '}
                {['A', 'B', 'C', 'D'][Number(item.correct_answer) - 1]}
              </span>
            </div>
            <footer className="mt-2.5 grid grid-cols-2 gap-2.5">
              <Link
                href={`/admin/cursos/${res.id_course}/${item.id_activity}`}
                className="rounded-md border border-neutral-600 bg-lime-500/60 p-1.5 text-center transition duration-300 active:scale-95"
              >
                Editar
              </Link>
              <BtnDeleteActivity activityId={item.id_activity} />
            </footer>
          </article>
        ))}
      </section>
    </div>
  )
}
