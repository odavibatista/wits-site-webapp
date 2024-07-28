'use client'

import { actions } from '@/actions'
import { useModal } from '@/presentation/hooks/useModal'
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Home,
  LogOut,
  Undo2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import UserModal from '../modal'

export function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const ButtonToggle = () => (
    <>
      {isOpen ? (
        <div className="mb-6 flex w-full items-center justify-between">
          <Image
            src="/assets/LogotipoGradient.svg"
            alt="logo Wits"
            height={80}
            width={80}
            className={`${isOpen ? 'inline-flex' : 'hidden'}`}
          />
          <ChevronLeft
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      ) : (
        <ChevronRight
          className="mb-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  )

  const Item = ({
    href,
    label,
    Icon,
  }: {
    href: string
    label: string
    Icon: JSX.ElementType
  }) => {
    const isActive = pathname === href

    return (
      <Link
        href={href}
        className={`mx-auto my-1 flex w-full gap-2 rounded-md p-1.5 ${isActive ? 'bg-custom-gradient' : ''}`}
        title={`Ir para ${label}`}
      >
        <div>
          <Icon />
        </div>
        {isOpen && label}
      </Link>
    )
  }

  const { modal, setModal, openCloseModal } = useModal()

  return (
    <div
      className={`flex flex-col items-center bg-neutral-800 px-1.5 py-4 ${isOpen ? 'w-56' : 'w-12'}`}
    >
      <ButtonToggle />
      <Item href="/admin" label="Página inicial" Icon={Home} />
      <Item href="/admin/cursos" label="Cursos" Icon={GraduationCap} />
      <Item href="/dashboard" label="Dashboard" Icon={Undo2} />
      <button
        onClick={() =>
          toast.promise(actions.user.logout, {
            loading: 'Aguarde...',
            success: 'Sua sessão foi encerrada. Até breve 👋',
            error: 'Tente novamente',
            richColors: false,
          })
        }
        className="mx-auto mt-auto flex w-full gap-2 rounded-md border bg-danger-500/60 p-1.5 hover:bg-danger-500"
      >
        <LogOut />
        {isOpen && <span>Finalizar sessão</span>}
      </button>
      {modal?.message !== '' && (
        <UserModal modal={modal} openCloseModal={openCloseModal} />
      )}
    </div>
  )
}
