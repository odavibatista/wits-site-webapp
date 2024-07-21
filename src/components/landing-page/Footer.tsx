import { Developers } from '@/lib/Developers'
import Image from 'next/image'
import { CardDev } from '@/components/card-dev'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute left-0 right-0 flex border-t-2 border-neutral-800 bg-neutral-900 p-10">
      <div className="flex flex-col space-y-5 self-end">
        <div className="flex flex-col space-y-2.5">
          <Image
            src="/assets/LogotipoGradient.svg"
            height={100}
            width={100}
            alt="Logotipo Wits"
          />
          <span className="max-w-48 text-lg">
            Um lugar para{' '}
            <span className="text-custom-gradient">mentes criativas</span>
          </span>
        </div>
        <span className="text-sm">
          © {currentYear} . Todos os direitos reservados.
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <h3 className="font-firaMono mb-5 -tracking-tighter text-neutral-400">
          Desenvolvedores
        </h3>
        <div className="flex space-x-16">
          {Developers.map((dev) => (
            <CardDev key={dev.name} dev={dev} />
          ))}
        </div>
      </div>
    </footer>
  )
}
