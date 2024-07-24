'use server'

import { getHomeData } from '@/app/api/user/home-data.endpoint'
import { register } from '@/app/api/user/register.endpoint'
import { RegisterUserSchema } from '@/lib/Schemas'
import { RegisterUserFormState } from '@/lib/States'
import { userTypeguard } from '@/utils/typeguard'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function create(
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

    if (userTypeguard.isRegisterResponse(res)) {
      cookies().set('wits-app-session', res.token, {
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

  return redirect('/dashboard')
}

export async function canActivate(token: string) {
  const response = await getHomeData(token)
  return userTypeguard.isHomeDataResponse(response)
}
