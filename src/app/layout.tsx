import type { Metadata } from 'next'
import { IBM_Plex_Sans as IBM, Fira_Mono as FiraMono } from 'next/font/google'
import './globals.css'

const ibm = IBM({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const firaMono = FiraMono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Wits!',
  description: 'Uma Plataforma de Exercícios Mentais Hackathon VI - OneBitCode',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`overflow-y-scroll ${ibm.className} ${firaMono.className}`}
      >
        {children}
      </body>
    </html>
  )
}
