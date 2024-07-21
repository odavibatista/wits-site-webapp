import { BtnWrapper, PropsBtn } from '.'

export function BtnBlur({ title }: PropsBtn) {
  return (
    <div className="bg-custom-gradient inline-flex rounded-md p-[1px]">
      <BtnWrapper className="border-none bg-neutral-900">
        <span className="text-custom-gradient text-lg">{title}</span>
      </BtnWrapper>
    </div>
  )
}
