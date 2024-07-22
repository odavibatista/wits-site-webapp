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
    <div className="mx-auto flex min-h-[257px] min-w-[330px] overflow-hidden rounded-2xl font-firaMono text-neutral-700 lg:h-[373px] lg:w-[474px]">
      <div className="relative h-full min-w-28 lg:min-w-40">
        <Image
          src={imageUrl}
          alt="Avatar"
          className="object-cover"
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
      <div className="flex flex-col bg-zinc-300 px-4 py-6">
        <p className="flex-1 text-sm lg:text-base">{message}</p>
        <div className="flex justify-between">
          <span>{name}</span>
          <span>{nationality}</span>
        </div>
      </div>
    </div>
  )
}
