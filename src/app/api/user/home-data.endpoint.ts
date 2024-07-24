import api, { IAPIError } from '../api'

export interface IHomeDataResponse {
  user: {
    id: number
    username: string
    score: number
    role: 'common' | 'admin'
  }
}

export const getHomeData = async (
  token: string,
): Promise<IHomeDataResponse | IAPIError> => {
  const response = await api
    .get('/user/home-data', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .catch((error) => {
      return error.response
    })

  return response.data
}
