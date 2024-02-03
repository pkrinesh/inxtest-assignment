'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ToggleTheme } from './toggle-theme'

export function TheNav() {
  const pathname = usePathname()
  const [isHidden, setIsHidden] = React.useState(false)

  React.useEffect(() => {
    if (pathname === '/center-div') {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  }, [pathname])
  return (
    <nav
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => setIsHidden(true)}
      className={clsx(
        'fixed bottom-0 z-10 w-full py-6 transition-all',
        isHidden ? 'md:bottom-[-52px]' : 'bottom-0'
      )}
    >
      <div className="flex justify-center gap-3">
        <div className="flex justify-center items-center gap-4 px-8 bg-card border border-border rounded-full">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/center-div">Center</NavLink>
          <NavLink href="/table">Table</NavLink>
          <NavLink href="/data-table">Data-Table</NavLink>
        </div>
        <ToggleTheme />
      </div>
    </nav>
  )
}

export function NavLink({ href, className, ...rest }: React.ComponentProps<typeof Link>) {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <Link
      href={href}
      {...rest}
      className={`hover:opacity-70 text-sm md:text-base transition-all font-medium ${
        isActive ? 'text-accent' : 'text-accent-foreground'
      } ${className}`}
    />
  )
}
