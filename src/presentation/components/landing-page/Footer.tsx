import { Developers } from '@/presentation/lib/Developers'
import Image from 'next/image'
import { CardDev } from '@/components/card-dev'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute left-0 right-0 flex border-t-2 border-neutral-800 bg-neutral-900 py-5 lg:py-10">
      <div className="mx-auto w-full max-w-7xl space-y-5 px-2 lg:p-0">
        <div className="flex flex-col space-y-5 self-end">
          <div className="mb-5 flex flex-col space-y-3 px-3">
            <Image
              src="/assets/LogotipoGradient.svg"
              height={130}
              width={130}
              alt="Logotipo Wits"
            />
            <p className="lg:text-xl">
              Um lugar para{' '}
              <span className="text-custom-gradient">mentes criativas</span>
            </p>
            <p className="text-sm text-neutral-300 lg:text-base">
              © {currentYear} . Todos os direitos reservados.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-xl bg-neutral-950/20 p-5 shadow">
          <h3 className="mb-5 font-firaMono -tracking-tighter text-neutral-400 md:text-xl">
            Desenvolvedores
          </h3>
          <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap">
            {Developers.map((dev) => (
              <CardDev key={dev.name} dev={dev} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
