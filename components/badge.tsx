import { clsx, type ClassValue } from 'clsx'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// const badgeVariants = cva(
//   'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
//   {
//     variants: {
//       variant: {
//         default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
//         secondary:
//           'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
//         destructive:
//           'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
//         outline: 'text-foreground',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//     },
//   }
// )

export function Badge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        'inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold transition-colors',
        className
      )}
      {...props}
    />
  )
}
