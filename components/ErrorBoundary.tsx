'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-amazigh-light flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <AlertTriangle className="text-red-500 mx-auto mb-4" size={64} />
            <h1 className="text-3xl font-bold text-amazigh-dark mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Refresh Page
              </button>
              <Link
                href="/"
                className="bg-white text-amazigh-primary border-2 border-amazigh-primary px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-light transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Home size={20} />
                <span>Go Home</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

