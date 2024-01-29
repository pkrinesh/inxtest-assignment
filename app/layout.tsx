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
          <div className="relative min-h-screen overflow-hidden">
            <TheNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
