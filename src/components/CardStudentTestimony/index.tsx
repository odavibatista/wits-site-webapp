import React from 'react'

interface CardProps {
  studentName: string
  photo: string
  testimonyText: string
  profession: string
}

const StudentTestimony: React.FC<CardProps> = ({
  studentName,
  photo,
  testimonyText,
  profession,
}) => {
  return (
    <>
      <div className="m-10 flex h-80 w-72 flex-col justify-between rounded-2xl bg-zinc-300 font-mono">
        <div className="flex items-center justify-between gap-1 px-5 pt-5">
          <h2 className="text-lg font-bold text-zinc-800">{studentName}</h2>
          <img
            src={photo}
            className="h-16 w-16 rounded-full"
            alt={`Foto de ${studentName}`}
          />
        </div>
        <div className="px-5">
          <p className="text-sm font-bold text-zinc-800">{testimonyText}</p>
        </div>
        <div className="px-5 pb-5">
          <p className="text-base font-bold text-zinc-800">{profession}</p>
        </div>
      </div>
    </>
  )
}

export default StudentTestimony
