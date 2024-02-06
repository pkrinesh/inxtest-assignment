import { clsx } from 'clsx'
import * as React from 'react'
import styles from './table.module.css'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className={styles['table-container']}>
      <table className={clsx(styles['table'], className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead className={className} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody className={clsx(className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return <tr className={clsx(styles['table__row'], className)} {...props} />
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return <th className={clsx(styles['table__head'], className)} {...props} />
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return <td className={clsx(styles['table__data'], className)} {...props} />
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return <caption className={clsx(styles['table__caption'], className)} {...props} />
}

export { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow }
