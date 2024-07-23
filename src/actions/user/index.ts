'use server'

import register from '@/app/api/user/register.endpoint'
import { RegisterUserSchema } from '@/lib/Schemas'
import { RegisterUserFormState } from '@/lib/States'
import { isRegisterResponse } from '@/utils/typeguard'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function registerUserAction(
  formState: RegisterUserFormState,
  formData: FormData,
): Promise<RegisterUserFormState> {
  const parsed = RegisterUserSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    const data = {
      username: parsed.data.name,
      email: parsed.data.email,
      password: parsed.data.password,
    }

    const res = await register(data)

    if (isRegisterResponse(res)) {
      cookies().set('wits-app-session', JSON.stringify(res.user), {
        path: '/',
        httpOnly: true,
      })
    } else {
      return { errors: { _apiResponse: res.message } }
    }
  } catch (err) {
    return {
      errors: {
        _form: 'Não foi possível estabelecer uma conexão com o servidor',
      },
    }
  }

  redirect('/test')
}
