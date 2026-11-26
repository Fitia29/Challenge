import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ButtonVariant = 'pill-active' | 'pill-outline' | 'primary'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  'pill-active': 'rounded-full bg-[#1877F2] px-4 py-2 text-white hover:bg-blue-600',
  'pill-outline': 'rounded-full border border-[#1877F2] px-4 py-2 text-[#1877F2] hover:bg-blue-50',
  primary: 'rounded bg-[#1877F2] px-6 py-2.5 text-white hover:bg-blue-700',
};


export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
    
