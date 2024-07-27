'use client'

import HeaderAuth from '@/presentation/components/header-auth'
import { useHomeData } from '../provider-home-data'
import DashboardUser from '@/presentation/components/dashboard'
import { Footer } from '@/presentation/components/landing-page/Footer'
import { useEffect, useState } from 'react'
import { browseCourses, IBrowseCoursesResponse } from '../../api/course/browse-courses.endpoint'
import Option from '../../../presentation/components/course/Option'

export default function Dashboard() {

  return (
    <div className="text-neutral-50">
      <HeaderAuth />
      <DashboardUser />
      <Option index={'A'} id_activity={1} option='A' />
      <Footer />
    </div>
  )
}
