'use server'

import { deleteCourse } from '@/app/api/course/delete-course.endpoint'
import { editCourse } from '@/app/api/course/edit-course.endpoint'
import { CourseSchema } from '@/presentation/lib/Schemas'
import { UpdateCourseFormState } from '@/presentation/lib/States'
import { courseTypeguard } from '@/server/utils/typeguard'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function create() {}

export async function update(
  formState: UpdateCourseFormState,
  formData: FormData,
): Promise<UpdateCourseFormState> {
  const parsed = CourseSchema.update.safeParse({
    courseId: formData.get('courseId'),
    courseName: formData.get('courseName'),
    pointsWorth: formData.get('pointsWorth'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    const token = cookies().get('wits-app-session')?.value
    if (!token) redirect('/')

    const data = {
      course_name: parsed.data.courseName,
      points_worth: parsed.data.pointsWorth,
    }

    const res = await editCourse(token, parsed.data.courseId, data)

    if (!courseTypeguard.isEditCourseResponse(res)) {
      return { errors: { _apiResponse: res.message } }
    }
  } catch (err) {
    return {
      errors: {
        _form: 'Não foi possível estabelecer uma conexão com o servidor',
      },
    }
  }

  revalidatePath('/admin')
  return { success: true, errors: {} }
}

export async function remove(courseId: number) {
  const token = cookies().get('wits-app-session')?.value
  await deleteCourse(courseId, token as string)
  revalidatePath('/admin')
}
