import api, { IAPIError } from '../api'

export interface IEditCourseRequest {
  course_name: string
  points_worth: number
}

export interface IEditCourseResponse {
  id_course: number
  course_name: string
  points_worth: number
  created_at: string
}

export const editCourse = async (
  token: string,
  courseId: number,
  data: IEditCourseRequest,
): Promise<IEditCourseResponse | IAPIError> => {
  const response = await api
    .patch(`/course/edit/${courseId}`, data, {
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
