import api, { IAPIError } from '../api'

export interface ITopScoresResponse {
  id: number
  username: string
  score: number
}

export const getTopScores = async (
  token: string,
): Promise<ITopScoresResponse[] | IAPIError> => {
  const response = await api
    .get('/scores/top-scores', {
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
