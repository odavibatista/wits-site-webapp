import { BtnWrapper, PropsBtn } from '.'

export function BtnPrimary({ title }: PropsBtn) {
  return (
    <BtnWrapper className="border-primary-400 text-primary-400 hover:bg-secondary-900/30 transition duration-500 active:scale-95">
      {title}
    </BtnWrapper>
  )
}
