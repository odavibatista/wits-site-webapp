import { IAPIError } from '@/app/api/api'
import { IBrowseCoursesResponse } from '@/app/api/course/browse-courses.endpoint'
import { IHomeDataResponse } from '@/app/api/user/home-data.endpoint'
import { ILoginResponse } from '@/app/api/user/login.endpoint'
import { IRegisterResponse } from '@/app/api/user/register.endpoint'

export const userTypeguard = {
  // Login de usuário
  isLoginResponse: (res: ILoginResponse | IAPIError): res is ILoginResponse =>
    (res as ILoginResponse).user !== undefined &&
    (res as ILoginResponse).token !== undefined,

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

export const courseTypeguard = {
  isBrowseCoursesResponse: (
    res: IBrowseCoursesResponse[] | IAPIError,
  ): res is IBrowseCoursesResponse[] =>
    (res as IBrowseCoursesResponse[]) !== undefined,
}
