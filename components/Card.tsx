import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  const baseClasses = 'bg-white rounded-lg shadow-lg p-6'
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 card-hover cursor-pointer' : ''
  const clickClasses = onClick ? 'cursor-pointer' : ''
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

