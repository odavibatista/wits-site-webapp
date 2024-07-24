import api, { IAPIError } from '../api'

export interface IRegisterRequest {
  username: string
  email: string
  password: string
}

export interface IRegisterResponse {
  user: {
    id: number
    username: string
    role: 'common' | 'admin'
  }
  token: string
}

export const register = async (
  data: IRegisterRequest,
): Promise<IRegisterResponse | IAPIError> => {
  const response = await api.post('/user/register', data).catch((error) => {
    return error.response
  })

  return response.data
}
