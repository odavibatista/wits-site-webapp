'use client'

import { useHomeData } from '@/app/(private-routes)/provider-home-data'
import { BtnBlur } from '../button'
import Link from 'next/link'
import { Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  browseCourses,
  IBrowseCoursesResponse,
} from '@/app/api/course/browse-courses.endpoint'
import { isApiError } from '@/server/utils/typeguard'
import { captalize } from '@/presentation/lib/Capitalize'

const DashboardUser = () => {
  const [courses, setCourses] = useState<IBrowseCoursesResponse[] | null>(null)
  const { username, score, token } = useHomeData()

  useEffect(() => {
    const fetchData = async () => {
      const res = await browseCourses(token, '1')
      if (!isApiError(res)) return setCourses(res)
    }
    fetchData()
  }, [courses])

  return (
    <section className="mx-auto rounded-xl bg-neutral-900/40 p-6 text-xl">
      <div className="grid w-full lg:grid-cols-8">
        {/* Left */}
        <div className="lg:col-span-3">
          <h2 className="text-center">
            Bem vindo{' '}
            <span className="text-custom-gradient">{captalize(username)}</span>
          </h2>
          <p className="text-center">
            Score atual do Usuário:{' '}
            <span className="text-custom-gradient my-5 block text-4xl">
              {score}
            </span>
          </p>
          <div className="flex flex-col items-center gap-5">
            <p className="text-center">
              Acesse o <span className="text-custom-gradient">RANKING</span> e
              veja sua posição
            </p>
            <Link href="/ranking">
              <BtnBlur title="Ranking" Icon={Trophy} className="min-w-full" />
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col items-center justify-center lg:col-span-5">
          <h2 className="text-center">
            Acesse agora mesmo e continue a{' '}
            <span className="text-custom-gradient font-bold">evoluir!</span>
          </h2>
          <p className="text-center">Escolha seu próximo desafio</p>
          <div className="my-5 grid grid-cols-2 items-center gap-3">
            {courses &&
              courses
                .sort((a, b) => a.course_name.localeCompare(b.course_name))
                .map((course) => {
                  return (
                    <Link
                      // href={`/course/${course.id_course}`}
                      href={{
                        query: {
                          course: encodeURIComponent(JSON.stringify(course)),
                        },
                      }}
                      key={course.id_course}
                    >
                      <BtnBlur
                        key={course.id_course}
                        title={course.course_name}
                        className="w-full"
                      />
                    </Link>
                  )
                })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardUser
