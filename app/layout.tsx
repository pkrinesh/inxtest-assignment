import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { TheNav } from '@/components/nav-link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inexpection Assignment by Krinesh',
  description: 'Assignment solved by Krinesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TheNav />
          <div className="h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
