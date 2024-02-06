'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import styles from './toggle-theme.module.css'

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export default useHasMounted

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className={styles['button']} onClick={handleTheme}>
      {hasMounted && theme === 'dark' ? (
        <Moon className={styles['button-icon__moon']} />
      ) : (
        <Sun className={styles['button-icon__sun']} />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
