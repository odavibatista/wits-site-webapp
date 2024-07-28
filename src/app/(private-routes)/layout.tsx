import api from '@/app/api/api'
import { cookies } from 'next/headers'
import { HomeDataProvider } from './provider-home-data'
import { isApiError } from '@/server/utils/typeguard'
import HeaderAuth from '@/presentation/components/header-auth'

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = cookies().get('wits-app-session')?.value
  if (!token) return

  const res = await api.get('/user/home-data', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (isApiError(res.data)) return

  const userDataWithToken = { ...res.data.user, token }

  return (
    <HomeDataProvider value={userDataWithToken}>
      <HeaderAuth />
      {children}
    </HomeDataProvider>
  )
}
