import { useHomeData } from "../../../app/(private-routes)/provider-home-data";
import { answerActivity } from "../../../app/api/activities/answer-activity.endpoint";
import { useModal } from "../../hooks/useModal";
import UserModal from "../modal";

export interface OptionProps    {
    id_activity: number
    option: string
    index: string
}

export default function Option ({ id_activity, option, index }: OptionProps)  {
    const { token } = useHomeData();

    const { modal, setModal, openCloseModal } = useModal();

    const handleAnswer = async (answer: string) => {
        const response = await answerActivity(token, id_activity, {
            answer
        });

        if ('statusCode' in response) setModal({ message: response.message, type: 'error' });

        else setModal({ message: 'Resposta correta!', type: 'success' });
        
    }

    return(
        <div className="flex flex-row cursor-pointer items-center justify-items-center bg-slate-800 px-8 p-4 rounded-lg w-[100%] h-12 lg:h-14" onClick={async() => handleAnswer(index)} >
            <h1 className="text-violet-500">
                {
                    index === '1' ? 'A' : index === '2' ? 'B' : index === '3' ? 'C' : 'D'
                }) {option}
            </h1>

            {modal?.message !== "" && (
                <UserModal modal={modal} openCloseModal={openCloseModal} />
            )}
        </div>
    )
}