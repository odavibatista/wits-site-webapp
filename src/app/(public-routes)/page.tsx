import { CardAuth } from '@/components/card-auth'
import { FifthFold } from '@/components/landing-page/FifthFold'
import { FirstFold } from '@/components/landing-page/FirstFold'
import { Footer } from '@/components/landing-page/Footer'
import { FourthFold } from '@/components/landing-page/FourthFold'
import { SecondFold } from '@/components/landing-page/SecondFold'
import { SixthFold } from '@/components/landing-page/SixthFold'
import { ThirdFold } from '@/components/landing-page/ThirdFold'

export default function Home() {
  return (
    <main className="text-neutral-100">
      <FirstFold />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
      <SixthFold />
      <Footer />

      {/* Autenticação */}
      <CardAuth />
    </main>
  )
}
