import { ButtonHTMLAttributes, ReactNode } from 'react'

export { BtnBlur } from './BtnBlur'
export { BtnDefault } from './BtnDefault'
export { BtnPrimary } from './BtnPrimary'
export { BtnPlatform } from './BtnPlatform'
export { BtnDeleteActivity } from './BtnDeleteActivity'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export interface PropsBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  Icon?: JSX.ElementType
}

export function BtnWrapper({ children, className, ...props }: Props) {
  return (
    <button
      className={`rounded-md border px-3 py-1.5 text-xs font-medium transition md:px-4 md:text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
