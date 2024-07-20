import Image from 'next/image'

export function FirstFold() {
  const ImageBackground = () => {
    return (
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[480px]">
        <Image
          src="/assets/cerebro.webp"
          height={600}
          width={600}
          alt="background image brain"
          className="absolute -right-12 w-[280px] sm:-right-[90px] sm:w-[480px]"
        />
      </div>
    )
  }

  return (
    <section className="relative flex">
      <article className="absolute translate-y-40 space-y-2 text-xl font-bold sm:space-y-5 sm:text-3xl">
        <span className="text-custom-gradient mr-2 inline-flex items-center">
          &gt;&gt;
        </span>
        <span>Pratique</span>
        <p className="text-custom-gradient">lógica e raciocínio</p>
        <p className="max-w-[220px] text-xs font-medium sm:min-w-[300px] sm:text-base">
          Nunca foi tão fácil desenvolver suas habilidades
        </p>
      </article>
      <ImageBackground />
    </section>
  )
}
