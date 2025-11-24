'use client'

import { useState, useEffect } from 'react'
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle, CheckCircle } from 'lucide-react'

interface Flashcard {
  front: string
  back: string
  category: string
}

interface FlashcardsProps {
  cards: Flashcard[]
  title?: string
}

export default function Flashcards({ cards, title = 'Flashcards' }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>(cards)
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    setShuffledCards(cards)
  }, [cards])

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const nextCard = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const markAsStudied = () => {
    setStudiedCards(prev => new Set([...prev, currentIndex]))
  }

  const currentCard = shuffledCards[currentIndex]
  const progress = ((currentIndex + 1) / shuffledCards.length) * 100

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-amazigh-dark">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {currentIndex + 1} / {shuffledCards.length}
          </span>
          <button
            onClick={shuffleCards}
            className="p-2 text-amazigh-primary hover:bg-amazigh-light rounded-lg transition-colors"
            aria-label="Shuffle cards"
          >
            <Shuffle size={20} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-amazigh-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Flashcard */}
      <div className="mb-6">
        <div
          className="relative h-64 cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
          >
            {/* Front */}
            <div
              className={`absolute inset-0 w-full h-full rounded-lg flex items-center justify-center p-8 transition-opacity duration-300 ${
                isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, #2C5F2D 0%, #1A3D1F 100%)',
              }}
            >
              <div className="text-center text-white">
                <p className="text-sm text-gray-300 mb-2">Front</p>
                <h4 className="text-4xl font-bold mb-2">{currentCard?.front}</h4>
                <p className="text-sm text-gray-300">Click to flip</p>
              </div>
            </div>

            {/* Back */}
            <div
              className={`absolute inset-0 w-full h-full rounded-lg flex items-center justify-center p-8 transition-opacity duration-300 ${
                isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                background: 'linear-gradient(135deg, #97BC62 0%, #2C5F2D 100%)',
              }}
            >
              <div className="text-center text-white">
                <p className="text-sm text-gray-200 mb-2">Back</p>
                <h4 className="text-3xl font-bold mb-2">{currentCard?.back}</h4>
                <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mt-2">
                  {currentCard?.category}
                </span>
                <p className="text-sm text-gray-200 mt-4">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-amazigh-light text-amazigh-dark rounded-lg hover:bg-amazigh-secondary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </button>

        <button
          onClick={markAsStudied}
          className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors"
        >
          <CheckCircle size={20} />
          <span>Mark as Studied</span>
        </button>

        <button
          onClick={nextCard}
          disabled={currentIndex === shuffledCards.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-amazigh-primary text-white rounded-lg hover:bg-amazigh-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Study Progress */}
      {studiedCards.size > 0 && (
        <div className="mt-6 p-4 bg-amazigh-light rounded-lg">
          <p className="text-sm text-amazigh-dark">
            <strong>{studiedCards.size}</strong> card{studiedCards.size !== 1 ? 's' : ''} marked as studied
          </p>
        </div>
      )}
    </div>
  )
}

