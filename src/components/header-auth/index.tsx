'use client'
import Link from 'next/link'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'

const HeaderAuth = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
                Nick Name <ChevronDown />
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="fixed right-10 top-20 z-50 flex h-32 w-36 items-center rounded-lg bg-neutral-900 text-sm text-white opacity-80 shadow-lg shadow-secondary-900 lg:right-20 lg:h-36 lg:w-40 lg:text-base">
                  {(onClose) => (
                    <>
                      <ModalHeader></ModalHeader>
                      <ModalBody className="mb-2 flex w-full justify-between px-2 lg:mt-2">
                        <button className="hover:hover:bg-custom-gradient rounded-md transition duration-300">
                          Meus Dados
                        </button>
                        <button className="hover:hover:bg-custom-gradient rounded-md transition duration-300">
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
