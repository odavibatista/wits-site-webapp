import { CircleAlert, Eye, EyeOff } from 'lucide-react'
import { InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeHolder: string
  isInvalid?: boolean
  errorMessage?: string[]
}

export function InputConfirmPassword({
  name,
  label,
  isInvalid,
  placeHolder,
  className,
  errorMessage,
  ...props
}: InputProps) {
  const [visible, setVisible] = useState<true | false>(false)

  return (
    // <div className="flex w-full gap-2">
    <div className="flex flex-1 flex-col space-y-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div
        className={`relative rounded-md p-[1px] ${isInvalid ? 'bg-danger-500' : 'bg-custom-gradient'}`}
      >
        <input
          type={visible ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder={placeHolder}
          className={`rounded-md bg-neutral-900 p-2 outline-none ${className}`}
          {...props}
        />
        {visible ? (
          <EyeOff
            onClick={() => setVisible(!visible)}
            className="absolute right-2 top-[9px] cursor-pointer"
          />
        ) : (
          <Eye
            onClick={() => setVisible(!visible)}
            className="absolute right-2 top-[9px] cursor-pointer"
          />
        )}
      </div>
      {errorMessage && (
        <span className="flex items-center gap-1 text-sm text-danger-500">
          <CircleAlert size={16} className="-translate-y-0.5" />
          {errorMessage}
        </span>
      )}
    </div>
  )
}
