'use client'

import { useEffect, useState } from "react";
import { getTopScores, ITopScoresResponse } from "../../api/score/top-scores.endpoint";
import { Top3 } from "../../../presentation/components/top-3";
import { RankingSlot } from "../../../presentation/components/ranking-slot";
import { cookies } from "next/headers";

export default function RankingPage ()  {
    const [users, setUsers] = useState<ITopScoresResponse[]>([])
    const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)
    
    const styles =  {
        section: 'flex flex-col items-center justify-center gap-8',
        h1Global: 'text-custom-gradient text-3xl font-bold',
        othersRanking: 'flex flex-col gap-4 md:gap-8',
        top3: 'flex flex-col md:flex-row gap-4 md:gap-8',
        top1: 'mb-0 md:mb-8'
    }

    useEffect(() => {
        (async () => {
            const token = cookies().get('wits-app-session')?.value

            if (!token) return

          const data = await getTopScores(token);
    
          if ("status" in data) {
            setIsUsersLoading(false);
          } else {
            setUsers(data);
            setIsUsersLoading(false);
          }
        })();
      }, []);

    return (
        <section className={styles.section}>
            <h1 className={styles.h1Global}>
                Ranking Global
            </h1>
            <div className={styles.top3}>
                <div className={styles.top1}>
                    <Top3 username={users[0].username} score={users[0].score} ranking={1}/>
                </div>
                <Top3 username={users[1].username} score={users[1].score} ranking={2} />
                <Top3 username={users[2].username} score={users[2].score} ranking={3} />
            </div>
            <div className={styles.othersRanking}>
                {users.slice(3).map((user, index) => (
                    <RankingSlot key={user.username} username={user.username} score={user.score} index={index} />
                ))}
            </div>
        </section>
    )
}