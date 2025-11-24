import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center space-x-2 font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-amazigh-primary text-white hover:bg-amazigh-dark',
    secondary: 'bg-amazigh-secondary text-white hover:bg-opacity-90',
    accent: 'bg-amazigh-accent text-amazigh-dark hover:bg-yellow-400',
    outline: 'bg-transparent border-2 border-amazigh-primary text-amazigh-primary hover:bg-amazigh-primary hover:text-white',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon size={20} />}
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </button>
  )
}

