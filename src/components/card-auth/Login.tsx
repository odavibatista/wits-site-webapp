'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { BtnBlur, BtnDefault } from '@/components/button'
import { InputPassword, InputText } from '@/components/input'
import { motion } from 'framer-motion'
import { useFormState } from 'react-dom'
import { actions } from '@/actions'
import { toast } from 'sonner'

export function CardLogin() {
  const pathname = usePathname()
  const { replace } = useRouter()

  const [formState, action] = useFormState(actions.user.login, { errors: {} })

  if (formState.errors._apiResponse) {
    toast.error(formState.errors._apiResponse)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="fixed right-0 top-0 z-50 min-h-screen border-l-2 border-neutral-700 bg-neutral-800 p-6"
      >
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
          <span className="text-xl">Identifique-se</span>
          <div className="flex items-center px-3 text-sm">
            <div className="w-12 border-t" />
            <p className="w-full text-center">Faça login e acesse o sistema</p>
            <div className="w-12 border-t" />
          </div>
          <div className="w-full space-y-3">
            <InputText
              name="username"
              label="Digite o nome do usuário"
              placeHolder="Digite o nome do usuário"
              className="w-full"
              isInvalid={!!formState.errors.username}
              errorMessage={formState.errors.username}
            />
            <InputPassword
              name="password"
              label="Digite sua senha"
              placeHolder="Digite sua senha"
              className="w-full"
              isInvalid={!!formState.errors.password}
              errorMessage={formState.errors.password}
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <BtnDefault
              type="button"
              title="Criar conta"
              className="w-full"
              onClick={() =>
                replace(`${pathname}?auth=register`, { scroll: false })
              }
            />
            <BtnBlur title="Acessar" type="submit" className="w-full" />
          </div>
        </form>
      </motion.div>
      <div
        onClick={() => replace(pathname, { scroll: false })}
        className="fixed left-0 top-0 z-20 min-h-screen w-full bg-neutral-950/80"
      />
    </>
  )
}
