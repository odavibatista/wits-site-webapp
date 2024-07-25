'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { InputPassword, InputText } from '@/components/input'
import { BtnBlur, BtnDefault } from '@/components/button'
import { useFormState } from 'react-dom'
import { InputConfirmPassword } from '@/components/input/InputConfirmPassword'
import { toast } from 'sonner'
import { actions } from '@/actions'

export function CardRegister() {
  const pathname = usePathname()
  const { replace } = useRouter()

  const [formState, action] = useFormState(actions.user.create, { errors: {} })

  if (formState.errors._apiResponse) {
    toast.error(formState.errors._apiResponse)
  }

  return (
    <>
      <div className="fixed right-0 top-0 z-50 min-h-screen border-l-2 border-neutral-700 bg-neutral-800 p-6 md:min-w-[413px]">
        <ChevronLeft
          onClick={() => replace(pathname, { scroll: false })}
          className="cursor-pointer"
        />
        <form
          action={action}
          className="no-scrollbar flex max-h-[90vh] flex-col items-center space-y-6 overflow-y-scroll pb-40"
        >
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
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name}
            />
            <InputText
              name="email"
              label="Digite o seu email"
              placeHolder="Digite o seu email"
              className="w-full"
              isInvalid={!!formState.errors.email}
              errorMessage={formState.errors.email}
            />
            <InputPassword
              name="password"
              label="Crie uma senha"
              placeHolder="Crie uma senha"
              className="w-full"
              isInvalid={!!formState.errors.password}
              errorMessage={formState.errors.password}
            />
            <InputConfirmPassword
              name="confirmPassword"
              label="Confirme a senha"
              placeHolder="Confirme a senha"
              className="w-full"
              isInvalid={!!formState.errors.confirmPassword}
              errorMessage={formState.errors.confirmPassword}
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <BtnDefault
              type="button"
              title="Acessar"
              className="w-full"
              onClick={() =>
                replace(`${pathname}?auth=login`, { scroll: false })
              }
            />
            <BtnBlur title="Criar conta" type="submit" className="w-full" />
          </div>
        </form>
      </div>
      <div
        onClick={() => replace(pathname, { scroll: false })}
        className="fixed left-0 top-0 z-20 min-h-screen w-full bg-neutral-950/80"
      />
    </>
  )
}