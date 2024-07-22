'use client'
import Link from "next/link"
import { useState } from "react"
import { BtnDefault, BtnPrimary } from "../button"

const HeaderNoAuth = () => {
    const [isOpen, setIsOpen] = useState('hidden')

    const toggleMenu = () => {
        isOpen === 'hidden' ? setIsOpen('') : setIsOpen('hidden')
    }
    return (
        <>
            <nav>
                <div className="h-20 max-w-full mx-auto px-1" >
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center justify-between w-full">
                            <Link href='/'>
                                <img src="/assets/LogotipoGradient.svg" alt="logo Wits" className="w-32" />
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex gap-3">
                                    <Link href='/login'>
                                        <BtnDefault title="Entrar"/>
                                    </Link>
                                    <Link href='/register'>
                                        <BtnPrimary title="Criar conta"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden">
                            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:bg-custom-gradient focus:outline-none transition duration-300 ease-in-out" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_64_123)">
                                        <path d="M23 10.9997H1C0.447715 10.9997 0 11.4474 0 11.9997C0 12.552 0.447715 12.9997 1 12.9997H23C23.5523 12.9997 24 12.552 24 11.9997C24 11.4474 23.5523 10.9997 23 10.9997Z" fill="white" />
                                        <path d="M23 4.00031H1C0.447715 4.00031 0 4.44802 0 5.0003C0 5.55259 0.447715 6.0003 1 6.0003H23C23.5523 6.0003 24 5.55259 24 5.0003C24 4.44802 23.5523 4.00031 23 4.00031Z" fill="white" />
                                        <path d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_64_123">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="menu" className={`${isOpen} md:${isOpen} bg-neutral-900/30 rounded-md`}>
                    <div className="px-2 pt-2 pb-3 sm:px-3">
                        <Link href='/login' className="text-white block hover:bg-custom-gradient px-3 py-2 rounded-md text-base font-medium transition duration-300 hover:text-neutral-300">Entrar</Link>
                        <Link href='/register' className="text-white block hover:bg-custom-gradient px-3 py-2 rounded-md text-base font-medium transition duration-300 hover:text-neutral-300">Criar conta</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderNoAuth