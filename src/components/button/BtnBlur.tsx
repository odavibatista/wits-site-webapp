import { BtnWrapper, PropsBtn } from '.'

export function BtnBlur({ title, className, ...props }: PropsBtn) {
  return (
    <div
      className={`bg-custom-gradient inline-flex rounded-md p-[1px] transition duration-500 active:scale-95 ${className}`}
    >
      <BtnWrapper
        className={`border-none bg-neutral-900 transition duration-500 hover:bg-neutral-900/90 ${className}`}
        {...props}
      >
        <span className="text-custom-gradient text-lg">{title}</span>
      </BtnWrapper>
    </div>
  )
}
