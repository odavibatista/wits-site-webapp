interface Props {
  platformName: string
  imageUrl: string
}

export function BtnPlatform({ platformName, imageUrl }: Props) {
  return (
    <div className="m-2 flex h-9 w-44 cursor-pointer items-center justify-center gap-4 rounded-lg text-white transition duration-300 hover:scale-110">
      <img
        className="h-8 w-8"
        src={imageUrl}
        alt={`Logo da plataforma ${platformName}`}
      />
      <p className="font-mono text-sm md:text-base lg:text-lg">
        {platformName}
      </p>
    </div>
  )
}
