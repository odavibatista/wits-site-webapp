'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { InputPassword, InputText } from '../input'
import { BtnBlur, BtnDefault } from '../button'

export function CardRegister() {
  const pathname = usePathname()
  const { replace } = useRouter()

  return (
    <>
      <div className="fixed right-0 top-0 z-10 min-h-screen max-w-md border-l-2 border-neutral-700 bg-neutral-800 p-6">
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
          <span className="text-xl">Cadastre-se</span>
          <div className="flex items-center px-3 text-sm">
            <div className="w-12 border-t" />
            <p className="w-full text-center">inscreva-se com seu e-mail</p>
            <div className="w-12 border-t" />
          </div>
          <div className="w-full space-y-3">
            <InputText
              name="name"
              label="Nome e sobrenome"
              placeHolder="Nome e sobrenome"
              className="w-full"
            />
            <InputText
              name="email"
              label="Digite o seu email"
              placeHolder="Digite o seu email"
              className="w-full"
            />
            <InputPassword
              name="password"
              label="Crie uma senha"
              placeHolder="Crie uma senha"
              className="w-full"
              confirmPassoword
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <BtnDefault
              title="Acessar"
              className="w-full"
              onClick={() =>
                replace(`${pathname}?auth=login`, { scroll: false })
              }
            />
            <BtnBlur title="Criar conta" className="w-full" />
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