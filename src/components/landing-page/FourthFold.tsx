import { BtnBlur } from '../button'

export function FourthFold() {
  return (
    <div className="lp-section">
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
        <BtnBlur title="Comece a aprender agora mesmo" />
      </div>
    </div>
  )
}
