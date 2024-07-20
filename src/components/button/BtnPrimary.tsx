import { BtnWrapper, PropsBtn } from '.'

export function BtnPrimary({ title }: PropsBtn) {
  return (
    <BtnWrapper className="border-primary-400 text-primary-400">
      {title}
    </BtnWrapper>
  )
}
