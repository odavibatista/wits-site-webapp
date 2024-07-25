import api, { IAPIError } from '../api'

export interface IBrowseCoursesResponse {
    id_course: number
    course_name: string
    points_worth: number
    total_of_activities: number
    created_at: string
}

export const browseCourses = async (
    token: string,
): Promise<IBrowseCoursesResponse[] | IAPIError> => {
    const response = await api
        .get('/course/browse-courses', {
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