import { captalize } from '@/presentation/lib/Capitalize'

interface Props {
  username: string
  score: number
  index: number
}

export function RankingSlot({ username, score, index }: Props) {
  return (
    <div className="flex h-16 w-[100%] flex-row items-center justify-items-center gap-4 rounded-lg bg-slate-800 p-4 px-8 text-xl text-neutral-100 md:gap-8 lg:h-20">
      <p>{index + 4}º</p>
      <img
        src="/assets/ranking/ranking_icon.svg"
        alt="person-icon"
        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
      />
      <p>{captalize(username)}</p>
      <p className="ml-auto font-bold text-amber-400">{score}</p>
    </div>
  )
}
