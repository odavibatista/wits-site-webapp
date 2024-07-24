import { IAPIError } from '@/app/api/api'
import { IHomeDataResponse } from '@/app/api/user/home-data.endpoint'
import { IRegisterResponse } from '@/app/api/user/register.endpoint'

export const userTypeguard = {
  // Registro de usuário
  isRegisterResponse: (
    res: IRegisterResponse | IAPIError,
  ): res is IRegisterResponse =>
    (res as IRegisterResponse).user !== undefined &&
    (res as IRegisterResponse).token !== undefined,

  // Informações do usuário
  isHomeDataResponse: (
    res: IHomeDataResponse | IAPIError,
  ): res is IHomeDataResponse => (res as IHomeDataResponse).user !== undefined,
}
