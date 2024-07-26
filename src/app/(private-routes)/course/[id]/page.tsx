'use client'

import { useEffect, useState } from "react";
import { DynamicRoute } from "../../../../server/utils/validators/dynamic.route";
import { getCourseInfo, ICourseInfoResponse } from "../../../api/course/get-course-info.endpoint";
import { useHomeData } from "../../provider-home-data";
import { useModal } from "../../../../presentation/hooks/useModal";
import { answerActivity } from "../../../api/activities/answer-activity.endpoint";

export default function CoursePage ({ params }: DynamicRoute)  {
    const [course, setCourse] = useState<ICourseInfoResponse>()
    const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false)
    const [isCourseConcluded, setCourseConcluded] = useState<boolean>(false)

    const { token } = useHomeData();

    const courseId = Number(params.id);

    const { modal, setModal, openCloseModal } = useModal();

    const handleAnswer = async (answer: string) => {
        const response = await answerActivity(token, courseId, {
            answer
        });

        if ('status' in response) setModal({ message: response.message, type: 'error' });
        
        setModal({ message: 'Resposta correta!', type: 'success' });
    }

    useEffect(() => {
        (async () => {
          const data = await getCourseInfo(token, courseId);
    
          if ("status" in data) {
            setIsCourseLoading(false);
            setModal({ message: data.message, type: "error" });
          } else {
            setCourse(data);

            if (data.user_concluded_course === true) setCourseConcluded(true);
            
            setIsCourseLoading(false);
          }
        })();
      }, [courseId]);
}