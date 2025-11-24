'use client'

import { useState, useEffect, useRef } from 'react'
import { RotateCcw, CheckCircle, XCircle, Play, Pause } from 'lucide-react'

interface TypingExercise {
  word: string
  translation: string
  pronunciation: string
}

interface TypingPracticeProps {
  exercises: TypingExercise[]
  title?: string
}

export default function TypingPractice({ exercises, title = 'Typing Practice' }: TypingPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [isPaused, setIsPaused] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const currentExercise = exercises[currentIndex]

  useEffect(() => {
    if (inputRef.current && !isPaused) {
      inputRef.current.focus()
    }
  }, [currentIndex, isPaused])

  useEffect(() => {
    if (userInput === currentExercise?.word) {
      setIsCorrect(true)
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }))
      setTimeout(() => {
        nextExercise()
      }, 1000)
    } else if (userInput.length > 0 && !currentExercise?.word.startsWith(userInput)) {
      setIsCorrect(false)
    } else {
      setIsCorrect(null)
    }
  }, [userInput, currentExercise])

  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isPaused])

  const nextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setUserInput('')
      setIsCorrect(null)
    } else {
      // Restart
      setCurrentIndex(0)
      setUserInput('')
      setIsCorrect(null)
      setScore({ correct: 0, total: 0 })
      setTimeElapsed(0)
    }
  }

  const reset = () => {
    setCurrentIndex(0)
    setUserInput('')
    setIsCorrect(null)
    setScore({ correct: 0, total: 0 })
    setTimeElapsed(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
  const wpm = timeElapsed > 0 ? Math.round((score.correct / timeElapsed) * 60) : 0

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-amazigh-dark">{title}</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 text-amazigh-primary hover:bg-amazigh-light rounded-lg transition-colors"
            aria-label={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
          <button
            onClick={reset}
            className="p-2 text-amazigh-primary hover:bg-amazigh-light rounded-lg transition-colors"
            aria-label="Reset"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-amazigh-light rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amazigh-primary">{score.correct}</div>
          <div className="text-sm text-gray-600">Correct</div>
        </div>
        <div className="bg-amazigh-light rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amazigh-primary">{accuracy}%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
        <div className="bg-amazigh-light rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amazigh-primary">{wpm}</div>
          <div className="text-sm text-gray-600">WPM</div>
        </div>
      </div>

      {/* Exercise */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-2">Type this word:</p>
          <div className="text-5xl font-bold text-amazigh-primary mb-2">
            {currentExercise?.word}
          </div>
          <p className="text-lg text-gray-600 mb-1">{currentExercise?.translation}</p>
          <p className="text-sm text-gray-500 italic">[{currentExercise?.pronunciation}]</p>
        </div>

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isPaused}
            className={`w-full text-3xl text-center py-4 px-6 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amazigh-primary transition-colors ${
              isCorrect === true
                ? 'border-green-500 bg-green-50'
                : isCorrect === false
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-white'
            }`}
            placeholder="Type here..."
          />
          {isCorrect === true && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <CheckCircle className="text-green-500" size={32} />
            </div>
          )}
          {isCorrect === false && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <XCircle className="text-red-500" size={32} />
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress: {currentIndex + 1} / {exercises.length}</span>
          <span>Time: {formatTime(timeElapsed)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-amazigh-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Hint */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Type the Tifinagh word exactly as shown. Use the pronunciation guide to help you.
        </p>
      </div>
    </div>
  )
}

