import api, { IAPIError } from '../api'

export interface IGetActivityResponse {
  id_activity: number
  course_id: number
  question: string
  option_1: string
  option_2: string
  option_3: string
  option_4: string
  correct_answer: string
  created_at: string
}

export const getActivity = async (
  token: string,
  activityId: number,
): Promise<IGetActivityResponse | IAPIError> => {
  const response = await api
    .get(`/activity/${activityId}/info`, {
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
