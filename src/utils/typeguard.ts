import { IAPIError } from '@/app/api/api'
import { IRegisterResponse } from '@/app/api/user/register.endpoint'

export function isRegisterResponse(
  res: IRegisterResponse | IAPIError,
): res is IRegisterResponse {
  return (
    (res as IRegisterResponse).user !== undefined &&
    (res as IRegisterResponse).token !== undefined
  )
}
