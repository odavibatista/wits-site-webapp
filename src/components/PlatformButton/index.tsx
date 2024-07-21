import React from 'react'

interface ButtonProps {
  platformName: string
  imageUrl: string
}

const PlatformButton: React.FC<ButtonProps> = ({ platformName, imageUrl }) => {
  return (
    <>
      <div className="m-2 flex h-9 w-44 items-center justify-center gap-4 rounded-lg text-white">
        <img
          className="h-8 w-8"
          src={imageUrl}
          alt={`Logo da plataforma ${platformName}`}
        />
        <p className="font-mono text-lg">{platformName}</p>
      </div>
    </>
  )
}

export default PlatformButton
