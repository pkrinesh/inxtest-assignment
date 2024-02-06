'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ToggleTheme } from '../toggle-theme'
import styles from './navlink.module.css'

export function TheNav() {
  const [isHidden, setIsHidden] = React.useState(false)

  return (
    <nav
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsHidden(true)
      }}
      data-hidden={isHidden ? isHidden : undefined}
      className={styles.nav}
    >
      <div className={styles['nav-container']}>
        <div className={styles['nav-menu']}>
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
      data-active={isActive ? isActive : undefined}
      className={`hover:opacity-70 text-sm md:text-base transition-all font-medium ${
        isActive ? 'text-accent' : 'text-accent-foreground'
      } ${styles['nav-menu__item']}`}
    />
  )
}
