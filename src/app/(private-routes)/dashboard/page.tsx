'use client'

import { useHomeData } from '../provider-home-data'

export default function Dashboard() {
  const user = useHomeData()

  return (
    <div className="text-neutral-50">
      <h1>Dashboard Component</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
