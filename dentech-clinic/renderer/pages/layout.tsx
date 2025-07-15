import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dentech',
  description: 'Ssistema de gerenciamento de Clinica Odontológica',
  generator: '@',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
