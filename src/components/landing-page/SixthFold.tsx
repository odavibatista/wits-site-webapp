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
    <div className="flex max-w-52 flex-col items-center space-y-5">
      <div className="bg-custom-gradient rounded-full p-0.5">
        <div className="rounded-full bg-neutral-100 p-6">
          <Icon className="text-primary-500" />
        </div>
      </div>
      <span className="text-center text-sm">{text}</span>
    </div>
  )

  return (
    <div className="lp-section">
      <h6 className="text-custom-gradient lp-title">Como funciona</h6>
      <div className="mx-auto flex max-w-4xl justify-between">
        <Steps Icon={Search} text="Pesquise o curso que deseja" />
        <Steps Icon={SlidersHorizontal} text="Filtre por categoria" />
        <Steps Icon={BarChart} text="Escolha a dificuldade" />
        <Steps Icon={ListChecks} text="Realize as atividades" />
        <Steps
          Icon={Gem}
          text="Utilize Wit Coins para comprar prêmios maiores"
        />
      </div>
    </div>
  )
}
