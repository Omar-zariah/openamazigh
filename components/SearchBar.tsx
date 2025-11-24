'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/dictionary?search=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:text-amazigh-secondary transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
            <form onSubmit={handleSearch} className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search dictionary, lessons, or content..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setQuery('')
                }}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

