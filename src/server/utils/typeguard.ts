import { IEditActivityResponse } from '@/app/api/activities/edit-activity.endpoint'
import { IAPIError } from '@/app/api/api'
import { IBrowseCoursesResponse } from '@/app/api/course/browse-courses.endpoint'
import { IEditCourseResponse } from '@/app/api/course/edit-course.endpoint'
import { ICourseInfoResponse } from '@/app/api/course/get-course-info.endpoint'
import { ITopScoresResponse } from '@/app/api/score/top-scores.endpoint'
import { IHomeDataResponse } from '@/app/api/user/home-data.endpoint'
import { ILoginResponse } from '@/app/api/user/login.endpoint'
import { IRegisterResponse } from '@/app/api/user/register.endpoint'

type CatalogedReturns =
  | ILoginResponse
  | IRegisterResponse
  | IHomeDataResponse
  | IBrowseCoursesResponse
  | IBrowseCoursesResponse[]
  | ICourseInfoResponse
  | IEditCourseResponse
  | IEditActivityResponse
  | ITopScoresResponse
  | ITopScoresResponse[]

export const isApiError = (
  res: CatalogedReturns | IAPIError,
): res is IAPIError =>
  (res as IAPIError) !== undefined &&
  (res as IAPIError).statusCode !== undefined &&
  (res as IAPIError).message !== undefined
