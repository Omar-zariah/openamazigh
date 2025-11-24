'use client'

import TypingPractice from '@/components/TypingPractice'
import { Keyboard } from 'lucide-react'

const typingExercises = [
  { word: 'ⴰⵣⵓⵍ', translation: 'Hello / Peace', pronunciation: 'azul' },
  { word: 'ⵉⵎⵉⵏⵉⵏ', translation: 'Good morning', pronunciation: 'iminin' },
  { word: 'ⵉⵎⵣⵉⵏ', translation: 'Water', pronunciation: 'amane' },
  { word: 'ⴰⵙⵙⵉⵏ', translation: 'Sun', pronunciation: 'tifawt' },
  { word: 'ⵉⵎⵣⵉⵏ', translation: 'House / Home', pronunciation: 'tigemmi' },
  { word: 'ⵉⵎⵎⴰ', translation: 'Mother', pronunciation: 'yemma' },
  { word: 'ⴱⴰⴱⴰ', translation: 'Father', pronunciation: 'baba' },
  { word: 'ⵢⴰⵏ', translation: 'One', pronunciation: 'yan' },
  { word: 'ⵙⵉⵏ', translation: 'Two', pronunciation: 'sin' },
  { word: 'ⴽⵕⴰⴹ', translation: 'Three', pronunciation: 'krad' },
]

export default function TypingPage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Keyboard className="text-amazigh-primary" size={48} />
            <span>Tifinagh Typing Practice</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice typing Tifinagh characters and improve your speed and accuracy
          </p>
        </div>

        <TypingPractice exercises={typingExercises} title="Tifinagh Typing Practice" />
      </div>
    </div>
  )
}

