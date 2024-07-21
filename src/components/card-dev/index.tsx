import { IDevelopers } from '@/lib/Developers'
import { AppWindowMac, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ElementType } from 'react'

export function CardDev({ dev }: { dev: IDevelopers }) {
  const Social = ({
    Icon,
    label,
    href,
  }: {
    Icon: ElementType
    label: string
    href: string
  }) => (
    <Link
      href={href}
      target="_blank"
      className="my-1 flex items-end text-xs text-neutral-400 hover:text-neutral-100"
    >
      <Icon className="mr-1 h-5 w-5" /> {label}
    </Link>
  )

  return (
    <div className="flex flex-col rounded-2xl bg-neutral-950/30 p-2">
      <div className="flex items-center justify-between">
        <span>{dev.name}</span>
        <div className="relative mb-3 ml-auto h-20 w-20 overflow-hidden rounded-3xl">
          <Image
            src={dev.avatar}
            alt={`Foto de ${dev.name}`}
            layout="fill"
            objectFit="cover"
            className="object-cover opacity-80"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {dev.email && <Social Icon={Mail} label="E-mail" href={dev.email} />}
        {dev.github && (
          <Social Icon={Github} label="Github" href={dev.github} />
        )}
        {dev.website && (
          <Social Icon={AppWindowMac} label="Website" href={dev.website} />
        )}
        {dev.linkedin && (
          <Social Icon={Linkedin} label="Linkedin" href={dev.linkedin} />
        )}
        {dev.instagram && (
          <Social Icon={Instagram} label="Instagram" href={dev.instagram} />
        )}
      </div>
    </div>
  )
}
