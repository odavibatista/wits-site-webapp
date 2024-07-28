'use client'

import { ChevronLeft, ChevronRight, GraduationCap, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const ButtonToggle = () => (
    <>
      {isOpen ? (
        <div className="flex w-full items-center justify-between">
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
          className="cursor-pointer"
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
        className={`top-20 mx-auto my-2 flex w-full gap-2 rounded-md p-1.5 ${isActive ? 'bg-custom-gradient' : ''}`}
        title={`Ir para ${label}`}
      >
        <div>
          <Icon />
        </div>
        {isOpen && label}
      </Link>
    )
  }

  return (
    <div
      className={`flex flex-col items-center space-y-6 bg-neutral-800 px-1.5 py-4 ${isOpen ? 'w-56' : 'w-12'}`}
    >
      <ButtonToggle />
      <Item href="/admin" label="Página inicial" Icon={Home} />
      <Item href="/admin/cursos" label="Cursos" Icon={GraduationCap} />
    </div>
  )
}
