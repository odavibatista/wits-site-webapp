'use client'

import { useSearchParams } from 'next/navigation'
import { CardLogin } from './Login'
import { CardRegister } from './Register'

export function CardAuth() {
  const searchParams = useSearchParams()
  const isLogin = searchParams.get('auth') === 'login'
  const isRegister = searchParams.get('auth') === 'register'

  return isLogin ? <CardLogin /> : isRegister ? <CardRegister /> : null
}
