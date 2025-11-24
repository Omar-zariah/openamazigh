'use client'

import { useState, useEffect } from 'react'
import { Search, Volume2, BookOpen, Heart } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import ShareButton from '@/components/ShareButton'
import Breadcrumbs from '@/components/Breadcrumbs'

interface DictionaryEntry {
  word: string
  translation: string
  pronunciation: string
  example: string
  category: string
}

const sampleEntries: DictionaryEntry[] = [
  {
    word: 'ⴰⵣⵓⵍ',
    translation: 'Hello / Peace',
    pronunciation: 'azul',
    example: 'ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ - Hello everyone',
    category: 'Greetings',
  },
  {
    word: 'ⵉⵎⵉⵏⵉⵏ',
    translation: 'Good morning',
    pronunciation: 'iminin',
    example: 'ⵉⵎⵉⵏⵉⵏ ⵏⵏⴰⵏⵏⵉⵏ - Good morning everyone',
    category: 'Greetings',
  },
  {
    word: 'ⵎⵙⵙⵏⵉⵙ',
    translation: 'Thank you',
    pronunciation: 'tanemmirt',
    example: 'ⵎⵙⵙⵏⵉⵙ ⵏⵏⴰⵏⵏⵉⵏ - Thank you very much',
    category: 'Greetings',
  },
  {
    word: 'ⵙⵙⵏⵉⵙ',
    translation: 'Please',
    pronunciation: 'afak',
    example: 'ⵙⵙⵏⵉⵙ ⵏⵏⴰⵏⵏⵉⵏ - Please help',
    category: 'Greetings',
  },
  {
    word: 'ⵜⴰⵎⵣⵉⵖⵜ',
    translation: 'Tamazight (the language)',
    pronunciation: 'tamazight',
    example: 'ⵏⵙⵙⵉⵏⵙⵉⵏ ⵏ ⵜⴰⵎⵣⵉⵖⵜ - We speak Tamazight',
    category: 'Language',
  },
  {
    word: 'ⴰⵎⴰⵣⵉⵖ',
    translation: 'Amazigh (Berber person)',
    pronunciation: 'amazigh',
    example: 'ⵏⴽⴽⵉⵏⵉ ⴰⵎⴰⵣⵉⵖ - I am Amazigh',
    category: 'Identity',
  },
  {
    word: 'ⵉⵎⴰⵣⵉⵖⵏ',
    translation: 'Amazigh people',
    pronunciation: 'imazighen',
    example: 'ⵉⵎⴰⵣⵉⵖⵏ ⵏⵏⵉⵏⵏⵉⵏ - We are Amazigh people',
    category: 'Identity',
  },
  {
    word: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
    translation: 'Amazigh language / culture',
    pronunciation: 'tamazight',
    example: 'ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⵉⵣⵉⵣⵉ - Amazigh culture is beautiful',
    category: 'Culture',
  },
  {
    word: 'ⵉⵎⵣⵉⵏ',
    translation: 'Water',
    pronunciation: 'amane',
    example: 'ⵙⵙⵉⵏⵙⵉⵏ ⵉⵎⵣⵉⵏ - We drink water',
    category: 'Nature',
  },
  {
    word: 'ⴰⵙⵙⵉⵏ',
    translation: 'Sun',
    pronunciation: 'tifawt',
    example: 'ⵢⵏⵏⵓⵙⵙⵉⵏ - The sun rises',
    category: 'Nature',
  },
  {
    word: 'ⴰⴳⵍⵎⵎⴰⵏ',
    translation: 'Moon',
    pronunciation: 'agurram',
    example: 'ⵢⵏⵏⵓⵙⵙⵉⵏ ⴰⴳⵍⵎⵎⴰⵏ - The moon is beautiful',
    category: 'Nature',
  },
  {
    word: 'ⴰⵎⵏⵉⵙⵙⵉ',
    translation: 'Sky',
    pronunciation: 'igenni',
    example: 'ⴰⵎⵏⵉⵙⵙⵉ ⵢⵣⵉⵣⵉ - The sky is blue',
    category: 'Nature',
  },
  {
    word: 'ⵉⵎⵣⵉⵏ',
    translation: 'House / Home',
    pronunciation: 'tigemmi',
    example: 'ⵏⵙⵙⵉⵏⵙⵉⵏ ⵙ ⵉⵎⵣⵉⵏ - We are at home',
    category: 'Home',
  },
  {
    word: 'ⵉⵎⵎⴰ',
    translation: 'Mother',
    pronunciation: 'yemma',
    example: 'ⵉⵎⵎⴰ ⵏⵏⵉⵏⵏⵉⵏ - Our mother',
    category: 'Family',
  },
  {
    word: 'ⴱⴰⴱⴰ',
    translation: 'Father',
    pronunciation: 'baba',
    example: 'ⴱⴰⴱⴰ ⵏⵏⵉⵏⵏⵉⵏ - Our father',
    category: 'Family',
  },
  {
    word: 'ⵎⵎⵉ',
    translation: 'My mother',
    pronunciation: 'yemma',
    example: 'ⵎⵎⵉ ⵜⵉⵣⵉⵣⵉ - My mother is beautiful',
    category: 'Family',
  },
  {
    word: 'ⵢⵎⵎⴰ',
    translation: 'Brother',
    pronunciation: 'gma',
    example: 'ⵢⵎⵎⴰ ⵏⵏⵉⵏⵏⵉⵏ - Our brother',
    category: 'Family',
  },
  {
    word: 'ⵡⵍⵎⵙⵉ',
    translation: 'Sister',
    pronunciation: 'ultma',
    example: 'ⵡⵍⵎⵙⵉ ⵏⵏⵉⵏⵏⵉⵏ - Our sister',
    category: 'Family',
  },
  {
    word: 'ⵢⴰⵏ',
    translation: 'One',
    pronunciation: 'yan',
    example: 'ⵢⴰⵏ ⵏⵏⵉⵏⵏⵉⵏ - One person',
    category: 'Numbers',
  },
  {
    word: 'ⵙⵉⵏ',
    translation: 'Two',
    pronunciation: 'sin',
    example: 'ⵙⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ - Two people',
    category: 'Numbers',
  },
  {
    word: 'ⴽⵕⴰⴹ',
    translation: 'Three',
    pronunciation: 'krad',
    example: 'ⴽⵕⴰⴹ ⵏⵏⵉⵏⵏⵉⵏ - Three people',
    category: 'Numbers',
  },
  {
    word: 'ⴰⵎⵣⵡⴰⵔⵓ',
    translation: 'Food',
    pronunciation: 'imkli',
    example: 'ⵏⵙⵙⵉⵏⵙⵉⵏ ⴰⵎⵣⵡⴰⵔⵓ - We eat food',
    category: 'Food',
  },
  {
    word: 'ⵉⵙⵙⵏ',
    translation: 'Bread',
    pronunciation: 'agrum',
    example: 'ⵉⵙⵙⵏ ⵏⵏⵉⵏⵏⵉⵏ - Our bread',
    category: 'Food',
  },
]

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState<number[]>([])

  // Load favorites from localStorage and check URL params
  useEffect(() => {
    const saved = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    setFavorites(saved)
    
    // Check for search query in URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const urlSearch = params.get('search')
      if (urlSearch) {
        setSearchTerm(urlSearch)
      }
    }
  }, [])

  const toggleFavorite = (index: number) => {
    setFavorites(prev => {
      const updated = prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
      storage.set(STORAGE_KEYS.USER_PROGRESS + '_favorites', updated)
      
      // Show toast notification
      if (typeof window !== 'undefined' && (window as any).showToast) {
        (window as any).showToast(
          prev.includes(index) ? 'Removed from favorites' : 'Added to favorites',
          'success'
        )
      }
      
      return updated
    })
  }

  const categories = ['All', ...Array.from(new Set(sampleEntries.map(e => e.category)))]

  const filteredEntries = sampleEntries.filter(entry => {
    const matchesSearch = 
      entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Dictionary', href: '/dictionary' }]} />
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark flex items-center space-x-2">
              <BookOpen className="text-amazigh-primary" size={48} />
              <span>Tamazight Dictionary</span>
            </h1>
            <ShareButton
              title="Tamazight Dictionary"
              text="Check out this amazing Tamazight dictionary!"
              className="hidden md:block"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search and explore Tamazight words with translations, pronunciations, and examples
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for words, translations, or pronunciations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        {filteredEntries.length > 0 && (
          <div className="mb-4 text-gray-600">
            Found {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'}
          </div>
        )}

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry, index) => {
            const originalIndex = sampleEntries.findIndex(e => e.word === entry.word)
            const isFavorite = favorites.includes(originalIndex)
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
              >
                <button
                  onClick={() => toggleFavorite(originalIndex)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart
                    size={20}
                    className={isFavorite ? 'fill-red-500 text-red-500' : ''}
                  />
                </button>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-amazigh-primary mb-2">
                      {entry.word}
                    </h3>
                    <p className="text-2xl font-semibold text-amazigh-dark mb-1">
                      {entry.translation}
                    </p>
                    <p className="text-gray-600 italic">
                      [{entry.pronunciation}]
                    </p>
                  </div>
                  <button
                    className="text-amazigh-primary hover:text-amazigh-secondary transition-colors ml-2"
                    aria-label="Pronounce"
                  >
                    <Volume2 size={24} />
                  </button>
                </div>
              
              <div className="border-t pt-4">
                <span className="inline-block bg-amazigh-secondary text-white text-xs px-2 py-1 rounded mb-2">
                  {entry.category}
                </span>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Example:</span> {entry.example}
                </p>
              </div>
            </div>
            )
          })}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No entries found. Try a different search term.</p>
          </div>
        )}

        {/* Contribute Section */}
        <div className="mt-12 bg-amazigh-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Help Expand the Dictionary</h2>
          <p className="mb-6 text-gray-200">
            This dictionary is community-driven. Contribute new words, translations, 
            and examples to help preserve Tamazight language.
          </p>
          <a
            href="https://github.com/yourusername/openamazigh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amazigh-accent text-amazigh-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

