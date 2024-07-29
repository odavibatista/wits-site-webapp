import { Platforms } from '@/presentation/lib/mocks/Platform'
import { BtnPlatform } from '../button'
import Image from 'next/image'

export function ThirdFold() {
  return (
    <div className="lp-section">
      <h2 className="lp-title">
        Pratique{' '}
        <span className="text-custom-gradient">Lógica e Raciocínio</span> a
        qualquer hora, em qualquer lugar
      </h2>
      <div className="relative min-h-[250px] w-full scale-90 lg:min-h-[500px]">
        <Image
          src="/assets/devices.svg"
          alt="Dispositivos compatíveis"
          className="object-cover"
          style={{ objectFit: 'contain' }}
          fill
        />
      </div>
      <section className="flex items-center justify-center gap-2">
        {Platforms.map((platform) => (
          <BtnPlatform
            key={platform.id}
            imageUrl={platform.pathImage}
            platformName={platform.name}
          />
        ))}
      </section>
    </div>
  )
}
