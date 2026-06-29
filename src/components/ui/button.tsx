import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white shadow-card hover:bg-blue-700',
        secondary: 'border border-blue-200 bg-white text-blue-700 hover:bg-blue-50',
        ghost: 'text-blue-700 hover:bg-blue-50',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function UIButton({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
