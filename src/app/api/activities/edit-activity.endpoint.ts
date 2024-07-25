import api, { IAPIError } from '../api'

export interface IEditActivityRequest {
    course_id: number
    question: string
    option_1: string
    option_2: string
    option_3: string
    option_4: string
    correct_answer: string
}

export interface IEditActivityResponse {
    course_id: number
    question: string
    option_1: string
    option_2: string
    option_3: string
    option_4: string
    correct_answer: string
    created_at: string
}

export const editActivity = async (
    token: string,
    activityId: number,
    data: IEditActivityRequest,
): Promise<IEditActivityResponse | IAPIError> => {
    const response = await api
        .patch(`/activity/edit/${activityId}`, data, {
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