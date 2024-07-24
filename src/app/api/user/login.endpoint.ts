import api, { IAPIError } from '../api'

export interface ILoginRequest {
  username: string
  inserted_password: string
}

export interface ILoginResponse {
  user: {
    id: number
    username: string
    role: string
  }
  token: string
}

export const login = async (
  data: ILoginRequest,
): Promise<ILoginResponse | IAPIError> => {
  const response = await api.post('/user/login', data).catch((error) => {
    return error.response
  })

  return response.data
}
