import React from 'react'
import { Metadata } from 'next'
import '@/styles/index.css'
import '@/utils/react-refresh'

export const metadata: Metadata = {
  title: 'Gahelrasoul | Portfolio',
  description: 'Front End Portfolio built with Next.js',
  icons: '/assets/logo.svg',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="page relative z-0 bg-primary">{children}</body>
    </html>
  )
}
