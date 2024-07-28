'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { getHomeData, IHomeDataResponse } from '@/app/api/user/home-data.endpoint'
import { useHomeData } from '@/app/(private-routes)/provider-home-data'

const HeaderAuth = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [users, setUsers] = useState<IHomeDataResponse>()
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false)
  const { token } = useHomeData()

  useEffect(() => {
    (async () => {
      const data = await getHomeData(token);

      if ("status" in data) {
        setIsUsersLoading(false);
      } else {
        setUsers(data);
        setIsUsersLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <nav>
        <div className="mx-auto h-20 max-w-full px-1">
          <div className="flex items-center justify-between py-3">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <img
                  src="/assets/LogotipoGradient.svg"
                  alt="logo Wits"
                  className="w-32"
                />
              </Link>
              <Button
                onPress={onOpen}
                className="rounded-md border px-3 py-1.5 text-xs font-medium text-neutral-100 transition duration-500 hover:bg-primary-950 active:scale-95 md:px-4 md:text-sm"
              >
                {users?.user.username} <ChevronDown />
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="fixed right-8 top-20 z-50 flex h-40 w-36 items-center rounded-lg bg-neutral-900 text-sm text-white opacity-90 shadow-lg shadow-secondary-900 lg:right-28 lg:h-44 lg:w-40 lg:text-base">
                  {(onClose) => (
                    <>
                      <ModalHeader></ModalHeader>
                      <ModalBody className="mb-2 flex w-full items-center justify-between px-2 lg:mt-2">
                        <Link href="/dashboard">
                          <button className="w-32 hover:hover:bg-custom-gradient rounded-md transition duration-300 py-1">
                            Dashboard
                          </button>
                        </Link>
                        <Link href="/profile">
                          <button className="w-32 hover:hover:bg-custom-gradient rounded-md transition duration-300 py-1">
                            Meus Dados
                          </button>
                        </Link>
                        <button className="w-32 hover:hover:bg-custom-gradient rounded-md transition duration-300 py-1">
                          Sair
                        </button>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderAuth
