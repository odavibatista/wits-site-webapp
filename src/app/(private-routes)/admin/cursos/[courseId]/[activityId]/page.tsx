import { getCourseInfo } from '@/app/api/course/get-course-info.endpoint'
import { Breadcrumb } from '@/presentation/components/breadcrumb'
import { FormActivity } from '@/presentation/components/course/FormActivity'
import { isApiError } from '@/server/utils/typeguard'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { use } from 'react'

export default function ActivityIdPage({
  params,
}: {
  params: { courseId: string; activityId: string }
}) {
  const courseId = params.courseId
  const activityId = params.activityId

  const token = cookies().get('wits-app-session')?.value
  if (!token) redirect(`/admin/cursos/${courseId}`)

  const res = use(getCourseInfo(token, Number(courseId)))
  if (isApiError(res)) return redirect(`/admin/cursos/${courseId}`)

  const activityInfo = res.activities.find(
    (item) => item.id_activity === Number(activityId),
  )
  if (!activityInfo) return redirect(`/admin/cursos/${courseId}`)

  return (
    <>
      <Breadcrumb
        paths={[
          { href: '/admin/cursos', label: 'Cursos' },
          { href: `/admin/cursos/${params.courseId}`, label: 'Editar curso' },
          {
            href: `/admin/cursos/${params.courseId}/${params.activityId}`,
            label: 'Editar atividade',
          },
        ]}
      />
      <FormActivity activity={activityInfo} courseId={courseId} />
    </>
  )
}
