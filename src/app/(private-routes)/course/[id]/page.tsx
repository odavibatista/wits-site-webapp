import { RenderCourseQuestions } from '@/presentation/components/course/RenderCourseQuestions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CoursePage({
  params,
}: {
  params: { id: string }
}) {
  const token = cookies().get('wits-app-session')?.value
  if (!token) redirect('/dashboard?exit=true')

  const courseId = Number(params.id)

  if (isNaN(courseId) || courseId <= 0) redirect('/dashboard?exit=true')

  return (
    <>
      <RenderCourseQuestions token={token} courseId={courseId} />
    </>
  )
}
