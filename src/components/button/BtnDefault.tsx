import { BtnWrapper, PropsBtn } from '.'

export function BtnDefault({ title }: PropsBtn) {
  return (
    <BtnWrapper className="hover:bg-primary-950/30 text-neutral-100 transition duration-500 active:scale-95 ">
      {title}
    </BtnWrapper>
  )
}
