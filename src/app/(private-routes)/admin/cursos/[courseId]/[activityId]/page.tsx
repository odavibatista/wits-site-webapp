import { getCourseInfo } from '@/app/api/course/get-course-info.endpoint'
import { FormActivity } from '@/presentation/components/course/FormActivity'
import { courseTypeguard } from '@/server/utils/typeguard'
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
  if (!courseTypeguard.isCourseInfoResponse(res))
    return redirect(`/admin/cursos/${courseId}`)

  const activityInfo = res.activities.find(
    (item) => item.id_activity === Number(activityId),
  )
  if (!activityInfo) return redirect(`/admin/cursos/${courseId}`)

  return (
    <div>
      <h1 className="my-5 text-2xl opacity-90">Editar Atividade</h1>
      <FormActivity activity={activityInfo} courseId={courseId} />
    </div>
  )
}
