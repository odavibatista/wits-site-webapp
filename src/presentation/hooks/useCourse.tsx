'use client'

import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import {
  ICourseInfoResponse,
  getCourseInfo,
} from '@/app/api/course/get-course-info.endpoint'

export function useCourse(token: string, courseId: number) {
  const [course, setCourse] = useState<ICourseInfoResponse | null>(null)
  const [currentActivityIndex, setCurrentActivityIndex] = useState<number>(0)
  const [points, setPoints] = useState<number>(0)
  const [cookies, setCookie] = useCookies(['witsAppCourseProgress'])
  const [rightAnswer, setRightAnswer] = useState<number>(0)

  useEffect(() => {
    const fetchCourseInfo = async () => {
      const data = await getCourseInfo(token, courseId)
      if ('activities' in data) {
        setCourse(data)
        // Initialize cookies if not already set
        if (!cookies.witsAppCourseProgress) {
          setCookie(
            'witsAppCourseProgress',
            {
              currentActivityIndex: 0,
              points: 0,
              activities: data.activities,
            },
            { path: '/' },
          )
        } else {
          console.log(points)
          setCurrentActivityIndex(
            cookies.witsAppCourseProgress.currentActivityIndex,
          )
          // setPoints(cookies.witsAppCourseProgress.points)
        }
      }
    }
    fetchCourseInfo()
  }, [token, courseId, cookies, setCookie])

  const handleAnswer = (selectedOption: string) => {
    if (!course) return

    const currentActivity =
      cookies.witsAppCourseProgress.activities[currentActivityIndex]
    const pointsPerActivity = course.points_worth / course.activities.length

    if (selectedOption === currentActivity.correct_answer) {
      const newPoints = points + pointsPerActivity
      setPoints(newPoints)
      setRightAnswer((rightAnswer) => rightAnswer + 1)
      setCookie(
        'witsAppCourseProgress',
        {
          ...cookies.witsAppCourseProgress,
          points: newPoints,
        },
        { path: '/' },
      )
    }
    console.log(cookies.witsAppCourseProgress)
    console.log(points)

    const newIndex = currentActivityIndex + 1
    setCurrentActivityIndex(newIndex)
    setCookie(
      'witsAppCourseProgress',
      {
        ...cookies.witsAppCourseProgress,
        currentActivityIndex: newIndex,
      },
      { path: '/' },
    )
  }

  return {
    course,
    currentActivityIndex,
    points,
    rightAnswer,
    handleAnswer,
  }
}
