'use client'

import { useEffect, useState } from "react";
import { getTopScores, ITopScoresResponse } from "../../api/score/top-scores.endpoint";
import { Top3 } from "../../../presentation/components/top-3";
import { RankingSlot } from "../../../presentation/components/ranking-slot";
import { useHomeData } from "../provider-home-data";
import { Footer } from "../../../presentation/components/landing-page/Footer";
import HeaderAuth from "../../../presentation/components/header-auth";

export default function RankingPage ()  {
    const [users, setUsers] = useState<ITopScoresResponse[]>([])
    const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)

    const { token } = useHomeData()
    
    const styles =  {
        section: 'flex flex-col items-center justify-center gap-8 w-full pb-32',
        h1Global: 'text-custom-gradient text-3xl sm:text-4xl md:text-5xl font-bold',
        othersRanking: 'flex flex-col gap-4 md:gap-8 w-full',
        top3: 'flex md:flex-row justify-evenly sm:justify-between items-center w-full',
        top1: 'mb-0 md:pb-[200px]'
    }

    useEffect(() => {
        (async () => {
          const data = await getTopScores(token);
    
          if ("statusCode" in data) {
            setIsUsersLoading(false);
          } else {
            setUsers(data);
            setIsUsersLoading(false);
          }
        })();
      }, []);

    return (
        <main className="text-neutral-100">
            <HeaderAuth />
            <section className={styles.section}>
                <h1 className={styles.h1Global}>
                    Ranking Global
                </h1>
                <div className={styles.top3}>
                    <Top3 username={users[1]?.username} score={users[1]?.score} ranking={2} />
                    <div className={styles.top1}>
                        <Top3 username={users[0]?.username} score={users[0]?.score} ranking={1}/>
                    </div>
                    <Top3 username={users[2]?.username} score={users[2]?.score} ranking={3} />
                </div>
                <div className={styles.othersRanking}>
                    {users.slice(3).map((user, index) => (
                        <RankingSlot key={user.username} username={user.username} score={user.score} index={index} />
                    ))}
                </div>
            </section>
          <Footer />
        </main>
    )
}