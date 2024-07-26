import api, { IAPIError, IAPIResponse } from '../api'

export const deleteCourse = async (
  courseId: number,
  token: string,
): Promise<IAPIResponse | IAPIError> => {
  const response = await api
    .delete(`/course/remove/${courseId}`, {
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
