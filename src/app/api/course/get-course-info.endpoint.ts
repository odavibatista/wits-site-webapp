import api, { IAPIError } from '../api'

export interface ICourseInfoResponse {
  id_course: number
  course_name: string
  points_worth: number
  activities: [
    {
      id_activity: number
      question: string
      option_1: string
      option_2: string
      option_3: string
      option_4: string
      correct_answer: string
    },
  ]
  user_concluded_course: boolean
  concluded_at: string | null
  created_at: string
}

export const getCourseInfo = async (
  token: string,
  courseId: number,
): Promise<ICourseInfoResponse | IAPIError> => {
  const response = await api
    .get(`/course/${courseId}/info`, {
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
