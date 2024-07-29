'use client'

import { IBrowseCoursesResponse } from '@/app/api/course/browse-courses.endpoint'
import DashboardUser from '@/presentation/components/dashboard'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [course, setCourse] = useState<IBrowseCoursesResponse | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseJson = searchParams.get('course')

  useEffect(() => {
    if (!course) {
      const decoded: IBrowseCoursesResponse = JSON.parse(
        decodeURIComponent(courseJson as string),
      )
      setCourse(decoded)
    } else {
      setCourse(null)
    }
  }, [courseJson])

  const empty = course?.total_of_activities === 0

  const onCancel = () => {
    router.replace('/dashboard')
    setCourse(null)
  }

  return (
    <div className="text-neutral-50">
      <DashboardUser />
      {course?.course_name && (
        <div className="absolute left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-neutral-900/40 backdrop-blur">
          <div className="bg-custom-gradient overflow-hidden rounded-lg p-1">
            <div className="flex flex-col rounded-lg bg-neutral-300 p-5 text-neutral-900">
              <p>
                <b>Curso: </b>
                {course.course_name}
              </p>
              <p>
                <b>Recompensa: </b>
                {course.points_worth}
              </p>
              <p>
                <b>Nº de questões: </b>
                {course.total_of_activities}
              </p>
              <p>
                <b>Duração: </b>
                30 minutos
              </p>
              {empty && (
                <p className="my-2 max-w-[250px] text-sm text-danger-600">
                  Este curso ainda não possui nenhuma atividade
                </p>
              )}
              <footer className="grid grid-cols-2 gap-5">
                <button
                  onClick={onCancel}
                  className="mt-3 rounded-md border bg-zinc-200 px-2 py-1"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => router.replace(`/course/${course.id_course}`)}
                  disabled={empty}
                  className="bg-custom-gradient mt-3 rounded-md border p-2 text-neutral-100 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Iniciar
                </button>
              </footer>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
