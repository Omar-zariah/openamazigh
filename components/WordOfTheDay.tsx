'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Volume2, Heart } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'

interface WordOfTheDay {
  word: string
  translation: string
  pronunciation: string
  example: string
  category: string
  description: string
}

const wordsOfTheDay: WordOfTheDay[] = [
  {
    word: 'ⴰⵣⵓⵍ',
    translation: 'Hello / Peace',
    pronunciation: 'azul',
    example: 'ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ - Hello everyone',
    category: 'Greetings',
    description: 'The most common greeting in Tamazight, meaning both "hello" and "peace". It reflects the Amazigh value of peace and harmony.',
  },
  {
    word: 'ⵉⵎⵣⵉⵏ',
    translation: 'Water',
    pronunciation: 'amane',
    example: 'ⵙⵙⵉⵏⵙⵉⵏ ⵉⵎⵣⵉⵏ - We drink water',
    category: 'Nature',
    description: 'Water is essential for life, and this word is fundamental in Tamazight vocabulary. It represents the importance of nature in Amazigh culture.',
  },
  {
    word: 'ⵉⵎⵎⴰ',
    translation: 'Mother',
    pronunciation: 'yemma',
    example: 'ⵉⵎⵎⴰ ⵏⵏⵉⵏⵏⵉⵏ - Our mother',
    category: 'Family',
    description: 'The word for mother, representing the central role of women and family in Amazigh society.',
  },
  {
    word: 'ⵣ',
    translation: 'Free Person',
    pronunciation: 'yaz',
    example: 'ⵉⵎⴰⵣⵉⵖⵏ - Imazighen (Free People)',
    category: 'Identity',
    description: 'The letter "ⵣ" (yaz) represents the free person, a core concept in Amazigh identity. It appears on the Amazigh flag.',
  },
  {
    word: 'ⵜⴰⵎⵣⵉⵖⵜ',
    translation: 'Tamazight Language',
    pronunciation: 'tamazight',
    example: 'ⵏⵙⵙⵉⵏⵙⵉⵏ ⵏ ⵜⴰⵎⵣⵉⵖⵜ - We speak Tamazight',
    category: 'Language',
    description: 'The name of the language itself, representing the rich linguistic heritage of the Amazigh people.',
  },
]

export default function WordOfTheDay() {
  const [word, setWord] = useState<WordOfTheDay | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Get word based on day of year for consistency
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
    const selectedWord = wordsOfTheDay[dayOfYear % wordsOfTheDay.length]
    setWord(selectedWord)

    // Check if favorited
    const favorites = storage.get<string[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites_words', [])
    setIsFavorite(favorites.includes(selectedWord.word))
  }, [])

  const toggleFavorite = () => {
    if (!word) return
    const favorites = storage.get<string[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites_words', [])
    const updated = isFavorite
      ? favorites.filter(w => w !== word.word)
      : [...favorites, word.word]
    storage.set(STORAGE_KEYS.USER_PROGRESS + '_favorites_words', updated)
    setIsFavorite(!isFavorite)
  }

  if (!word) return null

  return (
    <div className="bg-gradient-to-br from-amazigh-primary to-amazigh-dark text-white rounded-lg shadow-xl p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <Sparkles size={100} />
      </div>
      <div className="absolute bottom-4 left-4 text-8xl opacity-10">
        {word.word}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-amazigh-accent" size={24} />
            <span className="text-sm font-semibold text-amazigh-accent">Word of the Day</span>
          </div>
          <button
            onClick={toggleFavorite}
            className="text-white hover:text-amazigh-accent transition-colors"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={24} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>

        <div className="mb-6">
          <div className="text-6xl font-bold mb-4">{word.word}</div>
          <div className="text-3xl font-semibold mb-2">{word.translation}</div>
          <div className="text-xl text-gray-200 italic mb-4">[{word.pronunciation}]</div>
          <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
            {word.category}
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 mb-4">
          <p className="text-gray-200 mb-2">
            <strong>Example:</strong> {word.example}
          </p>
          <p className="text-gray-200 text-sm">
            {word.description}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-amazigh-accent text-amazigh-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            <Volume2 size={18} />
            <span>Listen</span>
          </button>
          <a
            href="/dictionary"
            className="text-white hover:text-amazigh-accent transition-colors underline"
          >
            View in Dictionary →
          </a>
        </div>
      </div>
    </div>
  )
}

