import { IEditActivityResponse } from '@/app/api/activities/edit-activity.endpoint'
import { IAPIError } from '@/app/api/api'
import { IBrowseCoursesResponse } from '@/app/api/course/browse-courses.endpoint'
import { IEditCourseResponse } from '@/app/api/course/edit-course.endpoint'
import { ICourseInfoResponse } from '@/app/api/course/get-course-info.endpoint'
import { IHomeDataResponse } from '@/app/api/user/home-data.endpoint'
import { ILoginResponse } from '@/app/api/user/login.endpoint'
import { IRegisterResponse } from '@/app/api/user/register.endpoint'

export const userTypeguard = {
  isLoginResponse: (res: ILoginResponse | IAPIError): res is ILoginResponse =>
    (res as ILoginResponse).user !== undefined &&
    (res as ILoginResponse).token !== undefined,
  isRegisterResponse: (
    res: IRegisterResponse | IAPIError,
  ): res is IRegisterResponse =>
    (res as IRegisterResponse).user !== undefined &&
    (res as IRegisterResponse).token !== undefined,
  isHomeDataResponse: (
    res: IHomeDataResponse | IAPIError,
  ): res is IHomeDataResponse => (res as IHomeDataResponse).user !== undefined,
}

export const courseTypeguard = {
  isBrowseCoursesResponse: (
    res: IBrowseCoursesResponse[] | IAPIError,
  ): res is IBrowseCoursesResponse[] =>
    (res as IBrowseCoursesResponse[]) !== undefined,
  isCourseInfoResponse: (
    res: ICourseInfoResponse | IAPIError,
  ): res is ICourseInfoResponse => (res as ICourseInfoResponse) !== undefined,
  isEditCourseResponse: (
    res: IEditCourseResponse | IAPIError,
  ): res is IEditCourseResponse => (res as IEditCourseResponse) !== undefined,
}

export const activityTypeguard = {
  isEditActivityResponse: (
    res: IEditActivityResponse | IAPIError,
  ): res is IEditActivityResponse =>
    (res as IEditActivityResponse) !== undefined,
}
