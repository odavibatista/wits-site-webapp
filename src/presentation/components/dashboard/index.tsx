'use client'

import { useHomeData } from "@/app/(private-routes)/provider-home-data"
import { BtnBlur, BtnDefault } from "../button"
import { getHomeData, IHomeDataResponse } from "@/app/api/user/home-data.endpoint"
import { useEffect, useState } from "react"
import Link from "next/link"

const DashboardUser = () => {
    const [users, setUsers] = useState<IHomeDataResponse>()
    const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)
    const { token } = useHomeData()

    useEffect(() => {
        (async () => {
            const data = await getHomeData(token);

            if ("status" in data) {
                setIsUsersLoading(false);
            } else {
                setUsers(data);
                setIsUsersLoading(false);
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
                            <BtnBlur title="Aritmética I" className="w-full" />
                            <BtnBlur title="Aritmética II" className="w-full" />
                            <BtnBlur title="Lógica I" className="w-full" />
                            <BtnBlur title="Lógica II" className="w-full" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DashboardUser