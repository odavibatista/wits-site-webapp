import {
  BarChart,
  Gem,
  ListChecks,
  Search,
  SlidersHorizontal,
} from 'lucide-react'
import { ElementType } from 'react'

export function SixthFold() {
  const Steps = ({ Icon, text }: { Icon: ElementType; text: string }) => (
    <div className="z-10 flex items-center gap-3 px-5 sm:max-w-32 sm:flex-col sm:px-0 md:max-w-40 lg:max-w-52">
      <div className="bg-custom-gradient rounded-full p-1">
        <div className="rounded-full bg-neutral-100 p-4 sm:p-6">
          <Icon className="text-primary-500" />
        </div>
      </div>
      <span className="text-sm sm:text-center md:text-base">{text}</span>
    </div>
  )

  return (
    <div className="lp-section">
      <h6 className="text-custom-gradient lp-title">Como funciona</h6>
      <div className="relative mx-auto flex max-w-4xl flex-col justify-between space-y-6 sm:flex-row sm:space-y-0">
        <Steps Icon={Search} text="Pesquise o curso que deseja" />
        <Steps Icon={SlidersHorizontal} text="Filtre por categoria" />
        <Steps Icon={BarChart} text="Escolha a dificuldade" />
        <Steps Icon={ListChecks} text="Realize as atividades" />
        <Steps
          Icon={Gem}
          text="Utilize Wit Coins para comprar prêmios maiores"
        />
        <div className="bg-custom-gradient absolute left-[50px] top-5 h-[350px] w-1 sm:hidden" />
        <div className="bg-custom-gradient absolute left-20 top-[35px] hidden h-1 w-[75vw] sm:flex lg:w-[720px]" />
      </div>
    </div>
  )
}
