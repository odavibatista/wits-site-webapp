import api, { IAPIError } from '../api'

export interface IAnswerActivityRequest {
    answer: string
}

export interface IAnswerActivityResponse {
    true: true
}

export const answerActivity = async (
    token: string,
    activity_id: number,
    data: IAnswerActivityRequest,
): Promise<IAnswerActivityResponse | IAPIError> => {
    const response = await api
        .post(`/course/answer-activity/${activity_id}`, data, {
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