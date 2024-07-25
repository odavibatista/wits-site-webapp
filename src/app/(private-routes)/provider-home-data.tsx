'use client'

import React, { createContext, useContext } from 'react'

interface User {
  id: number
  username: string
  score: number
  role: 'common' | 'admin'
  token: string
}

const HomeDataContext = createContext<User | undefined>(undefined)

export const HomeDataProvider: React.FC<{
  value: User
  children: React.ReactNode
}> = ({ value, children }) => {
  return (
    <HomeDataContext.Provider value={value}>
      {children}
    </HomeDataContext.Provider>
  )
}

export const useHomeData = () => {
  const context = useContext(HomeDataContext)
  if (context === undefined) {
    throw new Error('useHomeData must be used within a HomeDataProvider')
  }
  return context
}
