import api, { IAPIError } from '../api'

export interface IRegisterResponse {
  user: {
    id: 1
    username: 'string'
    score: 1
    role: 'string'
  }
}

const homeData = async (): Promise<IRegisterResponse | IAPIError> => {
  const response = await api.get('/user/home-data').catch((error) => {
    return error.response
  })

  return response.data
}

export default homeData
