'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { BtnBlur, BtnDefault } from '../button'
import { InputPassword, InputText } from '../input'

export function CardLogin() {
  const pathname = usePathname()
  const { replace } = useRouter()

  return (
    <>
      <div className="fixed right-0 top-0 z-10 min-h-screen min-w-[448px] border-l-2 border-neutral-700 bg-neutral-800 p-6">
        <ChevronLeft
          onClick={() => replace(pathname, { scroll: false })}
          className="cursor-pointer"
        />
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/assets/LogotipoGradient.svg"
            height={120}
            width={120}
            alt="Logotipo Wits"
          />
          <span className="text-xl">Identifique-se</span>
          <div className="flex items-center px-3 text-sm">
            <div className="w-12 border-t" />
            <p className="w-full text-center">Faça login e acesse o sistema</p>
            <div className="w-12 border-t" />
          </div>
          <div className="w-full space-y-3">
            <InputText
              name="email"
              label="Digite seu e-mail"
              placeHolder="Digite seu e-mail"
              className="w-full"
            />
            <InputPassword
              name="password"
              label="Digite sua senha"
              placeHolder="Digite sua senha"
              className="w-full"
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <BtnDefault
              title="Criar conta"
              className="w-full"
              onClick={() =>
                replace(`${pathname}?auth=register`, { scroll: false })
              }
            />
            <BtnBlur title="Acessar" className="w-full" />
          </div>
        </div>
      </div>
      <div
        onClick={() => replace(pathname, { scroll: false })}
        className="fixed left-0 top-0 min-h-screen w-full bg-neutral-950/80"
      />
    </>
  )
}
