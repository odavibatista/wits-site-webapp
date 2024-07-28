'use client'

import { ITopScoresResponse } from '@/app/api/score/top-scores.endpoint'
import { captalize } from '@/presentation/lib/Capitalize'
import { useState } from 'react'

export function DashboardAdmin({
  totalQuizzes,
  ranking,
}: {
  totalQuizzes: number
  ranking: ITopScoresResponse[]
}) {
  const [mode, setMode] = useState<'statistics' | 'ranking'>('statistics')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const paginatedRanking = ranking.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const totalPages = Math.ceil(ranking.length / itemsPerPage)

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <div className="my-5 max-w-xl rounded-md bg-neutral-800 p-2">
      <nav className="flex justify-between gap-5 px-5 py-1.5">
        <button
          onClick={() => setMode('statistics')}
          className={`flex-1 rounded-md border p-2 ${mode === 'statistics' ? 'bg-custom-gradient' : ''}`}
        >
          Estatísticas
        </button>
        <button
          onClick={() => setMode('ranking')}
          className={`flex-1 rounded-md border p-2 ${mode === 'ranking' ? 'bg-custom-gradient' : ''}`}
        >
          Ranking
        </button>
      </nav>
      {mode === 'statistics' && <Statistics totalQuizzes={totalQuizzes} />}
      {mode === 'ranking' && (
        <Ranking
          ranking={paginatedRanking}
          prevPage={prevPage}
          nextPage={nextPage}
          pagination={{ currentPage, totalPages }}
        />
      )}
    </div>
  )
}

function Statistics({ totalQuizzes }: { totalQuizzes: number }) {
  const Card = ({
    label,
    value,
    // color,
  }: {
    label: string
    value: string | number
    // color: string
  }) => (
    <div className="flex flex-col justify-between rounded-xl bg-neutral-900/40 p-3 text-center font-firaMono shadow">
      <span className="font-medium uppercase text-amber-600">{label}</span>
      <span className="p-2 text-2xl">{value}</span>
    </div>
  )

  return (
    <div className="mt-5 grid grid-cols-2 gap-3">
      <Card label="Total de quizzes" value={totalQuizzes} />
      <Card label="Média de acertos" value={'78%'} />
      <Card label="Melhor pontuação" value={98} />
      <Card label="Tempo médio por quiz" value={'5min 30s'} />
      <Card label="Número de usuários ativos" value={150} />
    </div>
  )
}

function Ranking({
  ranking,
  pagination,
  prevPage,
  nextPage,
}: {
  ranking: ITopScoresResponse[]
  pagination: { currentPage: number; totalPages: number }
  prevPage: () => void
  nextPage: () => void
}) {
  return (
    <div className="flex flex-col">
      <h2 className="my-3 text-center text-xl">Melhores jogadores</h2>
      {ranking.length >= 1 &&
        ranking.map((player, index) => (
          <section key={player.id} className="mb-3 grid grid-cols-3">
            <span className="text-center">
              {index + 1 + (pagination.currentPage - 1) * 10}º
            </span>
            <span>{captalize(player.username)}</span>
            <span className="text-center">{player.score}</span>
          </section>
        ))}
      <footer className="mt-5 flex items-center justify-between">
        <button
          disabled={pagination.currentPage === 1}
          className="rounded-md border border-neutral-700 bg-neutral-700 px-2 py-1 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={prevPage}
        >
          Anterior
        </button>
        <span className="text-sm">
          página {pagination.currentPage} de {pagination.totalPages}
        </span>
        <button
          disabled={pagination.currentPage === pagination.totalPages}
          className="rounded-md border border-neutral-700 bg-neutral-700 px-2 py-1 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={nextPage}
        >
          Próximo
        </button>
      </footer>
    </div>
  )
}
