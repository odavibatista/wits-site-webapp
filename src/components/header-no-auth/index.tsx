'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BtnDefault, BtnPrimary } from '../button'
import { usePathname, useRouter } from 'next/navigation'

const HeaderNoAuth = () => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const [isOpen, setIsOpen] = useState<true | false>(false)

  return (
    <nav>
      <div className="mx-auto py-3 md:py-5">
        <div className="flex items-center justify-between py-3">
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/assets/LogotipoGradient.svg"
                height={100}
                width={100}
                alt="Logotipo Wits"
              />
            </Link>
            <div className="hidden md:block">
              <div className="flex gap-3">
                <BtnDefault
                  title="Entrar"
                  onClick={() => replace(`${pathname}?auth=login`)}
                />
                <BtnPrimary
                  title="Criar conta"
                  onClick={() => replace(`${pathname}?auth=register`)}
                />
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2"
            >
              <Menu className="text-neutral-100" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div id="menu" className="rounded-md bg-neutral-900/30 md:hidden">
          <div className="px-2 pb-3 pt-2 sm:px-3">
            <button className="hover:bg-custom-gradient flex w-full rounded-md px-3 py-2 text-base font-medium text-white">
              Entrar
            </button>
            <button className="hover:bg-custom-gradient flex w-full rounded-md px-3 py-2 text-base font-medium text-white">
              Criar conta
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default HeaderNoAuth
