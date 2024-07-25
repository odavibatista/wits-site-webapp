import api, { IAPIError } from '../api'

export interface ICreateActivityRequest {
    course_id: number
    question: string
    option_1: string
    option_2: string
    option_3: string
    option_4: string
    correct_answer: string
}

export interface ICreateActivityResponse {
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

export const createActivity = async (
    token: string,
    data: ICreateActivityRequest,
): Promise<ICreateActivityResponse | IAPIError> => {
    const response = await api
        .post('/activity/create', data, {
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