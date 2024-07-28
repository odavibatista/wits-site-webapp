'use client'

import { actions } from '@/actions'
import { Breadcrumb } from '@/presentation/components/breadcrumb'
import { BtnPrimary } from '@/presentation/components/button'
import { InputText } from '@/presentation/components/input'
import { useFormState } from 'react-dom'

export default function NewCourse() {
  const [formState, action] = useFormState(actions.course.create, {
    errors: {},
  })

  return (
    <>
      <Breadcrumb
        paths={[
          { href: '/admin/cursos', label: 'Cursos' },
          { href: '/admin/cursos/novo', label: 'Novo' },
        ]}
      />
      <form
        action={action}
        className="my-6 flex flex-col gap-3 md:flex-row md:items-center"
      >
        <div className="md:min-h-[98px]">
          <InputText
            name="courseName"
            label="Nome do curso"
            placeHolder="Nome do curso"
            className="w-full min-w-[50vw] flex-1 lg:min-w-[32vw]"
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
            isInvalid={!!formState.errors.pointsWorth}
            errorMessage={formState.errors.pointsWorth}
          />
        </div>
        <BtnPrimary className="h-10 w-full md:w-fit" title="Salvar" />
      </form>
    </>
  )
}
