'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@nextui-org/button'
import { useHomeData } from '@/app/(private-routes)/provider-home-data'
import { motion } from 'framer-motion'
import { actions } from '@/actions'
import { toast } from 'sonner'

const HeaderAuth = () => {
  const { username, role } = useHomeData()
  const [open, setOpen] = useState<boolean>(false)

  const MenuItem = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <button className="hover:hover:bg-custom-gradient w-32 rounded-md py-1.5 transition duration-300">
        {label}
      </button>
    </Link>
  )

  return (
    <div className="relative">
      <nav className="flex items-center justify-between py-5">
        <Link href="/">
          <img
            src="/assets/LogotipoGradient.svg"
            alt="logo Wits"
            className="w-32"
          />
        </Link>
        <Button
          onClick={() => setOpen(!open)}
          className="rounded-md border px-3 py-1.5 text-xs font-medium text-neutral-100 transition duration-500 hover:bg-primary-950 active:scale-95 md:px-4 md:text-sm"
        >
          {username} <ChevronDown />
        </Button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="absolute right-0 top-[70px] z-50 flex h-28 w-36 flex-col items-center justify-evenly rounded-lg bg-neutral-900 text-sm text-white opacity-90 shadow-lg shadow-secondary-900 lg:text-base"
        >
          <MenuItem href="/dashboard" label="Dashboard" />
          {/* <MenuItem href="/profile" label="Meus dados" /> */}
          {role === 'admin' && <MenuItem href="/admin" label="Painel Adm" />}
          <button
            onClick={() =>
              toast.promise(actions.user.logout, {
                loading: 'Aguarde...',
                success: 'Sua sessão foi encerrada. Até breve 👋',
                error: 'Tente novamente',
                richColors: false,
              })
            }
            className="hover:hover:bg-custom-gradient w-32 rounded-md py-1.5 transition duration-300"
          >
            Sair
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default HeaderAuth
