'use client'

import HeaderAuth from '@/presentation/components/header-auth'
import { useHomeData } from '../provider-home-data'
import DashboardUser from '@/presentation/components/dashboard'
import { Footer } from '@/presentation/components/landing-page/Footer'

export default function Dashboard() {
  const user = useHomeData()

  return (
    <div className="text-neutral-50">
      <HeaderAuth />
      <DashboardUser />
      <Footer />
    </div>
  )
}
