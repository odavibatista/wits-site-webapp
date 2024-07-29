import { BtnWrapper, PropsBtn } from '.'

export function BtnBlur({ title, className, Icon, ...props }: PropsBtn) {
  return (
    <div
      className={`bg-custom-gradient inline-flex rounded-md p-[1px] transition duration-500 active:scale-95 ${className}`}
    >
      <BtnWrapper
        className={`border-none bg-neutral-900 transition duration-500 hover:bg-neutral-900/90 ${className}`}
        {...props}
      >
        {Icon ? (
          <span className="text-custom-gradient flex items-center text-xs md:text-base lg:text-lg">
            <Icon className="mr-2 text-primary-600" />
            {title}
          </span>
        ) : (
          <span className="text-custom-gradient text-xs md:text-base lg:text-lg">
            {title}
          </span>
        )}
      </BtnWrapper>
    </div>
  )
}
