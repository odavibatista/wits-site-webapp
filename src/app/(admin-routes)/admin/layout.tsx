import { HomeDataProvider } from '@/app/(private-routes)/provider-home-data'
import api from '@/app/api/api'
import { NavbarAdmin } from '@/presentation/components/navbar-admin'
import { isApiError } from '@/server/utils/typeguard'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
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
      <div className="absolute left-0 top-0 flex min-h-screen w-full text-neutral-50">
        <div className="flex w-full">
          <NavbarAdmin />
          <div className="flex flex-1 flex-col p-5">{children}</div>
        </div>
      </div>
    </HomeDataProvider>
  )
}
