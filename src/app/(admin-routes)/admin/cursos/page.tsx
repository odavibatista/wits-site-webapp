'use client'

import {
  browseCourses,
  IBrowseCoursesResponse,
} from '@/app/api/course/browse-courses.endpoint'
import React, { useEffect, useState } from 'react'
import { Loader2, PenSquareIcon, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  getCourseInfo,
  ICourseInfoResponse,
} from '@/app/api/course/get-course-info.endpoint'
import { toast } from 'sonner'
import { actions } from '@/actions'
import { isApiError } from '@/server/utils/typeguard'
import { Breadcrumb } from '@/presentation/components/breadcrumb'
import { useHomeData } from '@/app/(private-routes)/provider-home-data'

export default function CoursesPage() {
  const { token } = useHomeData()
  const [courses, setCourses] = useState<IBrowseCoursesResponse[] | null>(null)
  const [course, setCourse] = useState<ICourseInfoResponse | null>(null)
  const [courseId, setCourseId] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  useEffect(() => {
    const fetchData = async () => {
      if (!courses) {
        const res = await browseCourses(token, page)
        if (!isApiError(res)) {
          setCourses(res)
        }
      }
      if (courseId) {
        const res = await getCourseInfo(token, courseId)
        if (!isApiError(res)) {
          setCourse(res)
        }
      }
    }
    fetchData()
  }, [token, courseId])

  if (!courses)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    )

  return (
    <>
      <Breadcrumb paths={[{ href: '/admin/cursos', label: 'Cursos' }]} />
      <div className="flex flex-col-reverse gap-5 xl:flex-row">
        {/* Cursos */}
        <div className="my-5 w-full min-w-[50vw] xl:max-w-3xl">
          <h1 className="mb-2.5 bg-slate-800 p-2 text-lg lg:text-2xl">
            Visualizar
          </h1>
          <Link
            href="/admin/cursos/novo"
            className="bg-custom-gradient absolute right-5 top-3 my-1.5 max-w-sm rounded-md border p-2 text-sm transition duration-300 active:scale-95 md:text-base"
          >
            Adicionar
          </Link>
          {renderCourses(courses, setCourseId)}
        </div>

        {/* Detalhes do curso */}
        {course && (
          <div className="m-5 mx-auto h-fit min-w-[56vw] flex-1 bg-zinc-500 p-3 lg:min-w-fit">
            <div className="relative">
              <p className="w-full border-b border-zinc-400 pb-2.5 font-firaMono lg:text-2xl">
                Detalhes do curso
              </p>
              <X
                onClick={() => setCourse(null)}
                className="absolute right-0 top-0 cursor-pointer"
                size={20}
              />
            </div>

            {renderCourseDetails(course)}
          </div>
        )}
      </div>
    </>
  )
}

function renderCourses(
  courses: IBrowseCoursesResponse[],
  setCourseId: (course: number) => void,
) {
  return courses.length === 0 ? (
    <div className="my-5 flex flex-col">
      <p className="text-center text-lg">Nenhum curso cadastrado</p>
      <Link
        href="/admin/cursos/novo"
        className="bg-custom-gradient mx-auto my-6 max-w-sm rounded-md border p-2 transition duration-300 active:scale-95"
      >
        Adicione seu primeiro curso
      </Link>
    </div>
  ) : (
    <>
      {courses
        .sort((a, b) => a.course_name.localeCompare(b.course_name))
        .map((course) => (
          <div
            key={course.id_course}
            className="flex justify-between border-b border-neutral-600 p-2 last:border-none"
          >
            {course.course_name}
            <button
              onClick={() => setCourseId(course.id_course)}
              className="flex items-center gap-1.5"
            >
              <PenSquareIcon size={20} className="text-lime-400" />
              Alterar
            </button>
          </div>
        ))}
    </>
  )
}

function renderCourseDetails(course: ICourseInfoResponse) {
  const onDelete = () =>
    toast.promise(actions.course.remove(course.id_course), {
      loading: 'Aguarde...',
      success: 'Curso removido com sucesso.',
      error: 'Ocorreu um erro, tente novamente',
    })

  return (
    <div className="mt-3">
      <div className="grid grid-cols-3 items-center">
        <b className="text-sm">Nome:</b>
        <span className="col-span-2">{course.course_name}</span>
      </div>
      <div className="grid grid-cols-3 items-center">
        <b className="text-sm">Criado em:</b>
        <span className="col-span-2">
          {new Date(course.created_at).toLocaleDateString('pt-br', {
            dateStyle: 'medium',
          })}
        </span>
      </div>
      <div className="grid grid-cols-3 items-center">
        <b className="text-sm">Atividades:</b>
        <span className="col-span-2">{course?.activities.length}</span>
      </div>

      <footer className="mt-2.5 grid grid-cols-2 gap-2.5">
        <Link
          href={`/admin/cursos/${course.id_course}`}
          className="rounded-md border border-neutral-600 bg-lime-500/60 p-1.5 text-center transition duration-300 active:scale-95"
        >
          Editar
        </Link>
        <button
          onClick={onDelete}
          className="rounded-md border border-neutral-600 bg-danger-500/60 p-1.5 transition duration-300 active:scale-95"
        >
          Excluir
        </button>
      </footer>
    </div>
  )
}
