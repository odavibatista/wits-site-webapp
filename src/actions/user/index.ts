'use server'

import { getHomeData } from '@/app/api/user/home-data.endpoint'
import { register } from '@/app/api/user/register.endpoint'
import {
  LoginUserFormState,
  RegisterUserFormState,
} from '@/presentation/lib/States'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { login as loginRouteHandler } from '@/app/api/user/login.endpoint'
import { AuthSchema } from '@/presentation/lib/Schemas'
import { isApiError } from '@/server/utils/typeguard'

export async function login(
  formState: LoginUserFormState,
  formData: FormData,
): Promise<LoginUserFormState> {
  const parsed = AuthSchema.login.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    const userDTO = {
      username: parsed.data.username,
      inserted_password: parsed.data.password,
    }

    const res = await loginRouteHandler(userDTO)

    if (!isApiError(res)) {
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

export async function create(
  formState: RegisterUserFormState,
  formData: FormData,
): Promise<RegisterUserFormState> {
  const parsed = AuthSchema.register.safeParse({
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

    if (!isApiError(res)) {
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
  if (!isApiError(response)) {
    return [true, response.user.role]
  } else {
    return [false, null]
  }
}

export async function logout() {
  console.log('chamou.')
  cookies().delete('wits-app-session')
  redirect('/')
}
