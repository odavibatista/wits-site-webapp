import { CircleAlert } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeHolder: string
  isInvalid?: boolean
  errorMessage?: boolean
  confirmPassoword?: boolean
}

export function InputPassword({
  name,
  label,
  placeHolder,
  isInvalid,
  errorMessage,
  confirmPassoword,
  className,
  ...props
}: InputProps) {
  return (
    // <div className="flex w-full gap-2">
    <div className="flex flex-1 flex-col space-y-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div
        className={`rounded-md p-[1px] ${isInvalid ? 'bg-danger-500' : 'bg-custom-gradient'}`}
      >
        <input
          type="password"
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
      {confirmPassoword && (
        <>
          <label htmlFor={name} className="text-sm">
            Repita a senha
          </label>
          <div
            className={`rounded-md p-[1px] ${isInvalid ? 'bg-danger-500' : 'bg-custom-gradient'}`}
          >
            <input
              type="password"
              name={name}
              id={name}
              placeholder="Repita a senha"
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
        </>
      )}
      {/* </div> */}
    </div>
    // <div className="flex flex-1 flex-col space-y-2">// </div>
  )
}
