import { cookies } from 'next/headers'

export default async function TestPage() {
  const user = JSON.parse(cookies().get('wits-app-session')?.value as string)
  return (
    <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center text-neutral-100">
      <h1>Usuario Logado:</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
