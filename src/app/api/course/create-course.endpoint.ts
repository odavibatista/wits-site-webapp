import api, { IAPIError } from '../api'

export interface ICreateCourseRequest {
  course_name: string
  points_worth: number
}

export interface ICreateCourseResponse {
  id_course: number
  course_name: string
  points_worth: number
  created_at: string
}

export const createCourse = async (
  token: string,
  data: ICreateCourseRequest,
): Promise<ICreateCourseResponse | IAPIError> => {
  const response = await api
    .post('/course/create', data, {
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
