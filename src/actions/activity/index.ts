'use server'

import { editActivity } from '@/app/api/activities/edit-activity.endpoint'
import { removeActivity } from '@/app/api/activities/remove-activity.endpoint'
import { ActivitySchema } from '@/presentation/lib/Schemas'
import { ActivityFormState } from '@/presentation/lib/States'
import { activityTypeguard } from '@/server/utils/typeguard'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function create() {}

export async function update(
  formState: ActivityFormState,
  formData: FormData,
): Promise<ActivityFormState> {
  const parsed = ActivitySchema.update.safeParse({
    courseId: formData.get('courseId'),
    activityId: formData.get('courseId'),
    question: formData.get('question'),
    option1: formData.get('option1'),
    option2: formData.get('option2'),
    option3: formData.get('option3'),
    option4: formData.get('option4'),
    correctAnswer: formData.get('correctAnswer'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    const token = cookies().get('wits-app-session')?.value
    if (!token) redirect('/')

    const data = {
      course_id: parsed.data.courseId,
      question: parsed.data.question,
      option_1: parsed.data.option1,
      option_2: parsed.data.option2,
      option_3: parsed.data.option3,
      option_4: parsed.data.option4,
      correct_answer: parsed.data.correctAnswer,
    }

    const res = await editActivity(token, parsed.data.activityId, data)

    if (!activityTypeguard.isEditActivityResponse(res)) {
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
  redirect(`/admin/cursos/${parsed.data.courseId}`)
}

export async function remove(activityId: number) {
  const token = cookies().get('wits-app-session')?.value
  await removeActivity(activityId, token as string)
  revalidatePath('/admin')
}
