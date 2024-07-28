interface Props {
    username: string
    score: number
    ranking: 1 | 2 | 3
}

export function Top3({ username, score, ranking }: Props) {

    const div = 'flex flex-col items-center justify-center gap:2 sm:gap-4 w-[80px] sm:w-[155px] md:w-[196px]'
    const p = 'text-custom-gradient text-[3vw] sm:text-xl md:text-2xl font-bold'
    const scoreText = 'text-yellow-500 text-md sm:text-2xl md:text-3xl font-bold'
    const img = 'w-full'
    
    return(
        <>
            {
                ranking === 1 && (
                    <div className={div}>
                        <p className={p}>{username}</p>
                        <p className={scoreText}>{score}</p>
                        <img src="/assets/ranking/first_place.svg" alt="First place" className={img} />
                    </div>
                )
            }

            {
                ranking === 2 && (
                    <div className={div}>
                        <p className={p}>{username}</p>
                        <p className={scoreText}>{score}</p>
                        <img src="/assets/ranking/second_place.svg" alt="Second place" className={img} />
                    </div>
                )
            }

            {
                ranking === 3 && (
                    <div className={div}>
                        <p className={p}>{username}</p>
                        <p className={scoreText}>{score}</p>
                        <img src="/assets/ranking/third_place.svg" alt="Third place" className={img} />
                    </div>
                )
            }
        </>
    )
}