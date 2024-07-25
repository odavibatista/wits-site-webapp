import { BtnWrapper, PropsBtn } from '.'

export function BtnDefault({ title, className, ...props }: PropsBtn) {
  return (
    <BtnWrapper
      className={`text-neutral-100 transition duration-500 hover:bg-primary-950/30 active:scale-95 ${className}`}
      {...props}
    >
      {title}
    </BtnWrapper>
  )
}
