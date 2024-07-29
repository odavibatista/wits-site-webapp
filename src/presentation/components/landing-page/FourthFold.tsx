'use client'

import { usePathname, useRouter } from 'next/navigation'
import { BtnBlur } from '../button'

export function FourthFold() {
  const pathname = usePathname()
  const { replace } = useRouter()

  return (
    <div className="lp-section relative">
      <section>
        <h2 className="text-custom-gradient lp-title">Aulas gamificadas</h2>
        <p className="mx-auto max-w-5xl text-center md:text-xl">
          Aprenda com exercícios interativos, desafios e projetos, elaborados
          por especialistas em aprendizagem e apoiados por pesquisas
        </p>
      </section>
      <section>
        <h2 className="text-custom-gradient lp-title">Placares de líderes</h2>
        <p className="mx-auto max-w-5xl text-center md:text-xl">
          Compita com outros alunos e suba na classificação ao concluir
          exercícios, desafios e projetos
        </p>
      </section>
      <div className="flex items-center justify-center">
        <BtnBlur
          title="Comece a aprender agora mesmo"
          onClick={() =>
            replace(`${pathname}?auth=register`, { scroll: false })
          }
        />
      </div>
      <div className="absolute right-28 top-0 -z-50 h-[50%] w-[30%] rotate-45 bg-secondary-800 opacity-20 blur-3xl" />
    </div>
  )
}
