import api from '@/app/api/api'
import { cookies } from 'next/headers'
import { HomeDataProvider } from './provider-home-data'
import { userTypeguard } from '@/server/utils/typeguard'

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

  if (!userTypeguard.isHomeDataResponse(res.data)) return

  return <HomeDataProvider value={res.data.user}>{children}</HomeDataProvider>
}
