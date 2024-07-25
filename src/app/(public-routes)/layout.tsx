import HeaderNoAuth from "@/presentation/components/header-no-auth"

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
