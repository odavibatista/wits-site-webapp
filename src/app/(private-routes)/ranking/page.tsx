import { useEffect, useState } from "react";
import { getTopScores, ITopScoresResponse } from "../../api/score/top-scores.endpoint";
import { Top3 } from "../../../presentation/components/top-3";

export default function RankingPage ()  {
    const [users, setUsers] = useState<ITopScoresResponse[]>([])
    const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)
    


    useEffect(() => {
        (async () => {
          const data = await getTopScores('');
    
          if ("status" in data) {
            setIsUsersLoading(false);
          } else {
            setUsers(data);
            setIsUsersLoading(false);
          }
        })();
      }, []);
}