import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="text-2xl opacity-90">Administrar Cursos</h1>
      {children}
    </>
  )
}
