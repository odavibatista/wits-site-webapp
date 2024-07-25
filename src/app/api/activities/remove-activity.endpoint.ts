import api, { IAPIError, IAPIResponse } from '../api'

export const removeActivity = async (
    activity_id: number,
    token: string,
): Promise<IAPIResponse | IAPIError> => {
    const response = await api
        .delete(`/activity/remove/${activity_id}`, {
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