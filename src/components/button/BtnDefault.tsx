import { BtnWrapper, PropsBtn } from '.'

export function BtnDefault({ title }: PropsBtn) {
  return <BtnWrapper className="text-neutral-100">{title}</BtnWrapper>
}
