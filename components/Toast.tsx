'use client'

import { useEffect } from 'react'
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface ToastProps {
  message: string
  type: ToastType
  onClose: () => void
  duration?: number
}

export default function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle,
  }

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  }

  const Icon = icons[type]

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className={`${colors[type]} text-white rounded-lg shadow-lg p-4 min-w-[300px] max-w-md flex items-start space-x-3`}>
        <Icon size={20} className="flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

