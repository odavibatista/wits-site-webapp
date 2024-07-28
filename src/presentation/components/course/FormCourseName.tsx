'use client'

import { useFormState } from 'react-dom'
import { BtnPrimary } from '../button'
import { InputText } from '../input'
import { actions } from '@/actions'
import { toast } from 'sonner'

export function FormCourseName({
  courseName,
  pointsWorth,
  courseId,
}: {
  courseName: string
  pointsWorth: number
  courseId: string
}) {
  const [formState, action] = useFormState(actions.course.update, {
    success: false,
    errors: {},
  })

  if (formState.errors._apiResponse) {
    toast.error(formState.errors._apiResponse)
  }

  if (formState.success) {
    toast.success('Nome do curso atualizado com sucesso')
  }

  return (
    <form
      action={action}
      className="flex flex-col gap-3 md:flex-row md:items-center"
    >
      <input type="hidden" name="courseId" value={courseId} />
      <div className="md:min-h-[98px]">
        <InputText
          name="courseName"
          label="Nome do curso"
          placeHolder="Nome do curso"
          className="w-full min-w-[50vw] flex-1 lg:min-w-[32vw]"
          defaultValue={courseName}
          isInvalid={!!formState.errors.courseName}
          errorMessage={formState.errors.courseName}
        />
      </div>
      <div className="md:min-h-[98px]">
        <InputText
          name="pointsWorth"
          label="Pontuação"
          placeHolder="Pontuação"
          className="w-full flex-1"
          defaultValue={pointsWorth}
          isInvalid={!!formState.errors.pointsWorth}
          errorMessage={formState.errors.pointsWorth}
        />
      </div>
      <BtnPrimary className="h-10 w-full md:w-fit" title="Salvar" />
    </form>
  )
}
