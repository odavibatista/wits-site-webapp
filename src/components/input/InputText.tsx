import { CircleAlert } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeHolder: string
  isInvalid?: boolean
  errorMessage?: boolean
}

export function InputText({
  name,
  label,
  placeHolder,
  isInvalid,
  errorMessage,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div
        className={`rounded-md p-[1px] ${isInvalid ? 'bg-danger-500' : 'bg-custom-gradient'}`}
      >
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeHolder}
          className={`rounded-md bg-neutral-900 p-2 outline-none ${className}`}
          {...props}
        />
      </div>
      {errorMessage && (
        <span className="flex gap-1 text-danger-500">
          <CircleAlert size={16} />
          {errorMessage}
        </span>
      )}
    </div>
  )
}
