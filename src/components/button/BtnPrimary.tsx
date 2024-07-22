import { BtnWrapper, PropsBtn } from '.'

export function BtnPrimary({ title, className, ...props }: PropsBtn) {
  return (
    <BtnWrapper
      className={`border-primary-400 text-primary-400 transition duration-500 hover:bg-secondary-900/30 active:scale-95 ${className}`}
      {...props}
    >
      {title}
    </BtnWrapper>
  )
}
