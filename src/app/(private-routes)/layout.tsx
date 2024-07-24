export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <span>Autenticado</span>
      {children}
    </>
  )
}
