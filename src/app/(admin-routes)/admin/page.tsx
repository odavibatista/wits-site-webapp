import { getTopScores } from '@/app/api/score/top-scores.endpoint'
import { DashboardAdmin } from '@/presentation/components/dashboard/DashboardAdmin'
import { isApiError } from '@/server/utils/typeguard'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const token = cookies().get('wits-app-session')?.value
  if (!token) redirect('/')

  const ranking = await getTopScores(token)

  if (isApiError(ranking)) return null

  return (
    <>
      <h1 className="text-2xl opacity-90">Painel do Administrador</h1>
      <DashboardAdmin totalQuizzes={500} ranking={ranking} />
    </>
  )
}
