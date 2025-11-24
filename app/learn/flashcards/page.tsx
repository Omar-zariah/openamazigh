'use client'

import Flashcards from '@/components/Flashcards'
import { BookOpen } from 'lucide-react'

const flashcardData = [
  { front: 'ⴰⵣⵓⵍ', back: 'Hello / Peace', category: 'Greetings' },
  { front: 'ⵉⵎⵉⵏⵉⵏ', back: 'Good morning', category: 'Greetings' },
  { front: 'ⵎⵙⵙⵏⵉⵙ', back: 'Thank you', category: 'Greetings' },
  { front: 'ⵉⵎⵣⵉⵏ', back: 'Water', category: 'Nature' },
  { front: 'ⴰⵙⵙⵉⵏ', back: 'Sun', category: 'Nature' },
  { front: 'ⵉⵎⵣⵉⵏ', back: 'House / Home', category: 'Home' },
  { front: 'ⵉⵎⵎⴰ', back: 'Mother', category: 'Family' },
  { front: 'ⴱⴰⴱⴰ', back: 'Father', category: 'Family' },
  { front: 'ⵢⴰⵏ', back: 'One', category: 'Numbers' },
  { front: 'ⵙⵉⵏ', back: 'Two', category: 'Numbers' },
  { front: 'ⴽⵕⴰⴹ', back: 'Three', category: 'Numbers' },
  { front: 'ⵜⴰⵎⵣⵉⵖⵜ', back: 'Tamazight (the language)', category: 'Language' },
  { front: 'ⴰⵎⴰⵣⵉⵖ', back: 'Amazigh (Berber person)', category: 'Identity' },
]

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <BookOpen className="text-amazigh-primary" size={48} />
            <span>Tamazight Flashcards</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice vocabulary with interactive flashcards. Click to flip and learn!
          </p>
        </div>

        <Flashcards cards={flashcardData} title="Tamazight Vocabulary" />
      </div>
    </div>
  )
}

