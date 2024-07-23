import HeaderNoAuth from '@/components/header-no-auth'
import { Providers } from '../providers'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <HeaderNoAuth />
      {children}
    </Providers>
  )
}
