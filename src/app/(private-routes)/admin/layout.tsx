import { NavbarAdmin } from '@/presentation/components/navbar-admin'
import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full text-neutral-50">
      <div className="flex w-full">
        <NavbarAdmin />
        <div className="flex flex-1 flex-col p-5">{children}</div>
      </div>
    </div>
  )
}
