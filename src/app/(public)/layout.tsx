import HeaderNoAuth from '@/components/HeaderNoAuth'

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
