'use client'

import {
  browseCourses,
  IBrowseCoursesResponse,
} from '@/app/api/course/browse-courses.endpoint'
import { useHomeData } from '../../provider-home-data'
import { courseTypeguard } from '@/server/utils/typeguard'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/button'
import { Plus } from 'lucide-react'

export default function CoursesPage() {
  const { token } = useHomeData()
  const [courses, setCourses] = useState<IBrowseCoursesResponse[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await browseCourses(token)
      if (courseTypeguard.isBrowseCoursesResponse(res)) {
        setCourses(res)
      }
    }
    fetchData()
  }, [token])

  if (!courses)
    return (
      <div>
        <span>Carregando...</span>
      </div>
    )

  return (
    <>
      <section className="flex justify-between">
        <h1 className="lp-title flex-1 text-start">Cursos</h1>
      </section>
      {Array.isArray(courses) ? (
        courses.map((course) => (
          <>
            <Button className="absolute right-5 top-5 max-h-10 rounded-md border p-2 hover:bg-emerald-700">
              <Plus size={20} /> Cadastrar curso
            </Button>
            <section key={course.id_course}>
              <h2>{course.course_name}</h2>
            </section>
          </>
        ))
      ) : (
        <section className="flex flex-col items-center justify-center space-y-5">
          <h2>Nenhum curso cadastrado</h2>
          <Button className="rounded-md border p-2 hover:bg-emerald-700">
            <Plus size={20} /> Cadastrar novo curso
          </Button>
        </section>
      )}
    </>
  )
}
