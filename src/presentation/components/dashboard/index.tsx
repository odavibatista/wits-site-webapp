'use client'

import { useHomeData } from "@/app/(private-routes)/provider-home-data"
import { BtnBlur } from "../button"
import { getHomeData, IHomeDataResponse } from "@/app/api/user/home-data.endpoint"
import { useEffect, useState } from "react"
import Link from "next/link"
import { browseCourses, IBrowseCoursesResponse } from "../../../app/api/course/browse-courses.endpoint"

const DashboardUser = () => {
    const [users, setUsers] = useState<IHomeDataResponse>()
    const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)
    const [courses, setCourses] = useState<IBrowseCoursesResponse[]>([])
    const [isCoursesLoading, setCoursesLoading] = useState<boolean>(false)
  
    const { token } = useHomeData()

    const user = useHomeData()

    useEffect(() => {
        (async () => {
            const data = await getHomeData(token);

            if ("statusCode" in data) {
                setIsUsersLoading(false);
            } else {
                setUsers(data);
                setIsUsersLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
          const data = await browseCourses(user.token, 1);
    
          if ("statusCode" in data) {
            setCoursesLoading(false);
          } else {
            setCourses(data);
            setCoursesLoading(false);
          }
        })();
      }, []);
      
    return (
        <>
            <section className="h-[700px] w-full -mt-10 flex items-center justify-center">
                <div className="border border-secondary-600 flex h-3/4 rounded-xl">
                    <div className="w-1/2 md:w-[34%] flex flex-col items-center justify-between p-3 lg:p-10">
                        <h2 className="text-lg text-center md:text-2xl lg:text-3xl">Bem vindo <span className="text-custom-gradient uppercase">{users?.user.username}</span></h2>
                        <p className="text-base text-center md:text-2xl lg:text-2xl">Score atual do Usuário: <span className="text-custom-gradient">{users?.user.score}</span></p>
                        <div className="flex flex-col items-center gap-5">
                            <p className="text-base text-center lg:text-lg">Acesse o <span className="text-custom-gradient">RANKING</span> e veja sua posição</p>
                            <Link href="/ranking">
                                <BtnBlur title="Ranking" />
                            </Link>
                        </div>
                    </div>
                    <div className="border border-secondary-600"></div>
                    <div className="w-1/2 md:w-[66%] flex flex-col items-center justify-between p-3 lg:p-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-center">Acesse agora mesmo e continue a <span className="text-custom-gradient uppercase">evoluir!</span></h2>
                        <p className="text-lg text-center md:text-2xl">Escolha seu próximo desafio</p>
                        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-3">
                            {
                                courses &&
                                courses?.map((course) => {
                                    return (
                                        <Link href={`/course/${course.id_course}`} key={course.id_course}>
                                            <BtnBlur key={course.id_course} title={course.course_name} className="w-full" />
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DashboardUser