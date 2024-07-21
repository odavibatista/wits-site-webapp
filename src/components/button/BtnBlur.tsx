import { BtnWrapper, PropsBtn } from '.'

export function BtnBlur({ title }: PropsBtn) {
  return (
    <div className="bg-custom-gradient inline-flex rounded-md p-[1px] duration-500 hover:scale-105 active:scale-100">
      <BtnWrapper className="border-none bg-neutral-900 transition-all">
        <span className="text-custom-gradient text-lg">{title}</span>
      </BtnWrapper>
    </div>
  )
}
