import { CardAuth } from '@/presentation/components/card-auth'
import { FifthFold } from '@/presentation/components/landing-page/FifthFold'
import { FirstFold } from '@/presentation/components/landing-page/FirstFold'
import { Footer } from '@/presentation/components/landing-page/Footer'
import { FourthFold } from '@/presentation/components/landing-page/FourthFold'
import { SecondFold } from '@/presentation/components/landing-page/SecondFold'
import { SixthFold } from '@/presentation/components/landing-page/SixthFold'
import { ThirdFold } from '@/presentation/components/landing-page/ThirdFold'
import { Suspense } from 'react'

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
      <Suspense>
        <CardAuth />
      </Suspense>
    </main>
  )
}
