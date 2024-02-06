import { clsx } from 'clsx'
import * as React from 'react'
import styles from './badge.module.css'

export function Badge({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={clsx(styles.badge, className)} {...props} />
}
