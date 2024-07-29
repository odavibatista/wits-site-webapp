import { captalize } from '@/presentation/lib/Capitalize'
import Image from 'next/image'

interface Props {
  username: string
  score: number
  ranking: number
}

export function Top3({ username, score, ranking }: Props) {
  const index = ranking as 0 | 1 | 2
  const rankingMapping = {
    0: {
      src: '/assets/ranking/first_place.svg',
      positionStyles: 'col-start-2 row-start-1 relative top-3',
    },
    1: {
      src: '/assets/ranking/second_place.svg',
      positionStyles: 'col-start-1 row-start-1 relative top-12 right-2',
    },
    2: {
      src: '/assets/ranking/third_place.svg',
      positionStyles: 'col-start-3 row-start-1 relative top-12 left-2',
    },
  }

  return (
    <button
      className={`relative flex flex-col items-center transition duration-300 hover:scale-110 ${rankingMapping[index].positionStyles}`}
    >
      <p className="absolute -top-7 truncate text-xl">
        {captalize(username).split(' ')[0]}
      </p>
      <p className="text-3xl text-amber-400">{score}</p>
      <Image src={rankingMapping[index].src} width={50} height={50} alt="" />
    </button>
  )
}
