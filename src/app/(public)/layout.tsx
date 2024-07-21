import HeaderNoAuth from '@/components/header-no-auth'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderNoAuth />
      {children}
    </>
  )
}
