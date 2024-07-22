import Image from 'next/image'
import React from 'react'

interface CardProps {
  studentName: string
  imageUrl: string
  testimonyText: string
  profession: string
}

const CardTestimony: React.FC<CardProps> = ({
  studentName,
  imageUrl,
  testimonyText,
  profession,
}) => {
  return (
    <div className="flex h-80 w-72 flex-col justify-between rounded-2xl bg-zinc-300 px-2 py-4 font-firaMono text-neutral-700">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{studentName}</h2>
        <div className="relative h-16 w-16 rounded-full">
          <Image
            src={imageUrl}
            alt="Avatar"
            className="rounded-full object-cover"
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">{testimonyText}</p>
      </div>
      <div>
        <p className="text-base font-bold">{profession}</p>
      </div>
    </div>
  )
}

export default CardTestimony
