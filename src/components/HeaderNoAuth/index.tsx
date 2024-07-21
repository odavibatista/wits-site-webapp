'use client'
import Link from 'next/link'
import { useState } from 'react'

const HeaderNoAuth = () => {
  const [isOpen, setIsOpen] = useState('hidden')

  const toggleMenu = () => {
    isOpen === 'hidden' ? setIsOpen('') : setIsOpen('hidden')
  }
  return (
    <>
      <nav>
        <div className="mx-auto h-20 max-w-full px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between py-3">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <img src="/logo.png" alt="logo Wits" className="w-40" />
              </Link>
              <div className="hidden md:block">
                <div className="flex gap-3">
                  <Link href="/login">
                    <button className="rounded border border-white px-4 py-2 text-white transition hover:border-fuchsia-600 hover:text-fuchsia-600 hover:duration-300">
                      Entrar
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="rounded border border-blue-600 px-4 py-2 text-blue-600 transition hover:border-fuchsia-600 hover:text-fuchsia-600 hover:duration-300">
                      Criar conta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 transition duration-300 ease-in-out hover:bg-blue-800 focus:bg-blue-900 focus:outline-none"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_64_123)">
                    <path
                      d="M23 10.9997H1C0.447715 10.9997 0 11.4474 0 11.9997C0 12.552 0.447715 12.9997 1 12.9997H23C23.5523 12.9997 24 12.552 24 11.9997C24 11.4474 23.5523 10.9997 23 10.9997Z"
                      fill="white"
                    />
                    <path
                      d="M23 4.00031H1C0.447715 4.00031 0 4.44802 0 5.0003C0 5.55259 0.447715 6.0003 1 6.0003H23C23.5523 6.0003 24 5.55259 24 5.0003C24 4.44802 23.5523 4.00031 23 4.00031Z"
                      fill="white"
                    />
                    <path
                      d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z"
                      fill="white"
                    />
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
        <div id="menu" className={`${isOpen} md:${isOpen}`}>
          <div className="px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-white transition duration-300 hover:bg-blue-900 hover:text-zinc-400"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="block rounded-md px-3 py-2 text-base font-medium text-white transition duration-300 hover:bg-blue-900 hover:text-zinc-400"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderNoAuth
