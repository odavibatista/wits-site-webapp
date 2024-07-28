'use client'

import { actions } from '@/actions'
import { toast } from 'sonner'

export function BtnDeleteActivity({ activityId }: { activityId: number }) {
  const onDelete = () =>
    toast.promise(actions.activity.remove(activityId), {
      loading: 'Aguarde...',
      success: 'Atividade removida com sucesso.',
      error: 'Ocorreu um erro, tente novamente',
    })

  return (
    <button
      onClick={onDelete}
      className="rounded-md border border-neutral-600 bg-danger-500/60 p-1.5 transition duration-300 active:scale-95"
    >
      Excluir
    </button>
  )
}
