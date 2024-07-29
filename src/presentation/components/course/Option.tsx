import { useHomeData } from '../../../app/(private-routes)/provider-home-data'
import { answerActivity } from '../../../app/api/activities/answer-activity.endpoint'
import { useModal } from '../../hooks/useModal'
import UserModal from '../modal'

export interface OptionProps {
  idActivity: number
  option: string
  index: string
  onClick?: () => void
}

export default function Option({ idActivity, option, index }: OptionProps) {
  const { token } = useHomeData()

  const { modal, setModal, openCloseModal } = useModal()

  const handleAnswer = async (answer: string) => {
    const response = await answerActivity(token, idActivity, {
      answer,
    })

    if ('statusCode' in response)
      setModal({ message: response.message, type: 'error' })
    else setModal({ message: 'Resposta correta!', type: 'success' })
  }

  return (
    <div
      className="flex h-12 w-[100%] cursor-pointer flex-row items-center justify-items-center rounded-lg bg-slate-800 p-4 px-8 lg:h-14"
      onClick={async () => handleAnswer(index)}
    >
      <h1 className="text-violet-500">
        {index === '1' ? 'A' : index === '2' ? 'B' : index === '3' ? 'C' : 'D'}){' '}
        {option}
      </h1>

      {modal?.message !== '' && (
        <UserModal modal={modal} openCloseModal={openCloseModal} />
      )}
    </div>
  )
}
