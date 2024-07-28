'use client'

import { useEffect, useState } from 'react'
import {
  getTopScores,
  ITopScoresResponse,
} from '@/app/api/score/top-scores.endpoint'
import { Top3 } from '@/presentation/components/top-3'
import { RankingSlot } from '@/presentation/components/ranking-slot'
import { useHomeData } from '../provider-home-data'
import { isApiError } from '@/server/utils/typeguard'
import Image from 'next/image'

export default function RankingPage() {
  const { token } = useHomeData()
  const [users, setUsers] = useState<ITopScoresResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopScores(token)

      if (!isApiError(data)) {
        setUsers(data)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="text-neutral-100">
      <section className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="text-custom-gradient mt-10 min-h-14 text-3xl font-bold sm:text-4xl md:mt-0 md:text-5xl">
          Ranking Global
        </h1>
        <div className="my-6 grid min-h-48 grid-cols-3 items-center gap-3">
          {users.slice(0, 3).map((user, index) => (
            <Top3 username={user.username} score={user.score} ranking={index} />
          ))}
          <Image
            src="/assets/ranking/podium.svg"
            width={250}
            height={250}
            alt="Podium image"
            className="col-span-3"
          />
        </div>
        <div className="flex w-full max-w-lg flex-col gap-4 pb-20">
          {users.map((user, index) => (
            <RankingSlot
              key={user.id}
              username={user.username}
              score={user.score}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
