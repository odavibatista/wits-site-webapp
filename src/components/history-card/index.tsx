import Image from 'next/image'

interface HistoryCardProps {
  name: string
  message: string
  nationality: string
  imageUrl: string
}

export function HistoryCard({
  name,
  message,
  nationality,
  imageUrl,
}: HistoryCardProps) {
  return (
    <div className="mx-auto flex h-[373px] w-[474px] overflow-hidden rounded-2xl font-firaMono text-neutral-700">
      <div className="relative h-full min-w-40">
        <Image
          src={imageUrl}
          alt="Avatar"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col bg-zinc-300 px-4 py-6">
        <p className="flex-1">{message}</p>
        <div className="flex justify-between">
          <span>{name}</span>
          <span>{nationality}</span>
        </div>
      </div>
    </div>
  )
}
