import React from "react"

interface CardProps {
    student_name: string
    photo: string
    testimony_text: string
    profession: string
}

const StudentTestimony:React.FC<CardProps> = ({student_name, photo, testimony_text, profession}) => {
    return (
        <>
            <div className="w-72 h-80 bg-zinc-300 rounded-2xl flex flex-col justify-between font-mono m-10">
                <div className="flex justify-between items-center px-5 pt-5 gap-1">
                    <h2 className="text-lg text-zinc-800 font-bold">{student_name}</h2>
                    <img src={photo} className="w-16 h-16 rounded-full" alt={`Foto de ${student_name}`} />
                </div>
                <div className="px-5">
                    <p className="font-bold text-zinc-800 text-sm">{testimony_text}</p>
                </div>
                <div className="px-5 pb-5">
                    <p className="text-base text-zinc-800 font-bold">{profession}</p>
                </div>
            </div>
        </>
    )
}

export default StudentTestimony