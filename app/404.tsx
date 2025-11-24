'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-amazigh-light flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-amazigh-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-amazigh-dark mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-amazigh-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white text-amazigh-primary border-2 border-amazigh-primary px-8 py-3 rounded-lg font-semibold hover:bg-amazigh-light transition-colors inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

