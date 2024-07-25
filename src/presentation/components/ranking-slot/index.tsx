interface Props {
    username: string
    score: number
    index: number
}

export function RankingSlot({ username, score, index }: Props) {

    const div = 'flex flex-row items-center justify-items-center gap-4 md:gap-8 bg-slate-800 px-8 p-4 rounded-lg w-[100%] h-16 lg:h-20'
    const p = 'text-violet-500 font-bold text-xl md:text-2xl lg:text-3xl'
    const usernameP = 'text-purple-700 font-bold text-xl md:text-2xl lg:text-3xl'
    const scoreP = 'text-amber-500 font-bold text-lg md:text-xl lg:text-2xl ml-auto'
    const rankingImg = 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'

    return(
        <div className={div}>
            <p className={p}>{index + 1}º</p>
            <img src="/assets/ranking/ranking_icon.svg" alt="person-icon" className={rankingImg} />
            <p className={usernameP}>{username}</p>
            <p className={scoreP}>{score}</p>
        </div>
    )
}