'use client'
import Link from 'next/link'
import React from "react";
import { ChevronDown } from 'lucide-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button';


const HeaderAuth = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                            <Button onPress={onOpen} className='rounded-md border px-3 py-1.5 text-xs font-medium md:px-4 md:text-sm text-neutral-100 transition duration-500 hover:bg-primary-950 active:scale-95'>Nick Name <ChevronDown /></Button>
                            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                <ModalContent className='text-white text-sm lg:text-base z-50 bg-neutral-900 opacity-80 fixed top-20 right-10 lg:right-20 w-36 h-32 lg:w-40 lg:h-36 flex items-center rounded-lg shadow-lg shadow-secondary-900 '>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader></ModalHeader>
                                            <ModalBody className='w-full px-2 flex justify-between mb-2 lg:mt-2'>
                                                <button className='hover:hover:bg-custom-gradient rounded-md  transition duration-300'>Meus Dados</button>
                                                <button className='hover:hover:bg-custom-gradient rounded-md  transition duration-300'>Sair</button>
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