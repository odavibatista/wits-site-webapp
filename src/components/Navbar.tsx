import Image from 'next/image'
import { BtnDefault, BtnPrimary } from './button'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
        <Image
          src="/assets/LogotipoGradient.svg"
          height={100}
          width={100}
          alt="Logotipo Wits"
        />
      </Link>
      <div className="flex space-x-2">
        <BtnDefault title="Entrar" />
        <BtnPrimary title="Criar conta" />
      </div>
    </nav>
  )
}
