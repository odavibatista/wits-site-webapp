import api, { IAPIError, IAPIResponse } from '../api'

export const removeActivity = async (
  activityId: number,
  token: string,
): Promise<IAPIResponse | IAPIError> => {
  const response = await api
    .delete(`/activity/remove/${activityId}`, {
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
