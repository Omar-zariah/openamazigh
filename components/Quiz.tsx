'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: Question[]
  title: string
}

export default function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    
    setSelectedAnswer(index)
    setIsAnswered(true)
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setIsAnswered(false)
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    
    // Save quiz score
    const savedScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    storage.set(STORAGE_KEYS.QUIZ_SCORES, [...savedScores, percentage])
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h3 className="text-3xl font-bold text-amazigh-dark mb-4">Quiz Complete!</h3>
        <div className="text-6xl font-bold text-amazigh-primary mb-4">
          {score} / {questions.length}
        </div>
        <div className="text-2xl text-gray-600 mb-6">{percentage}%</div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${
              percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <button
          onClick={handleReset}
          className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center space-x-2 mx-auto"
        >
          <RotateCcw size={20} />
          <span>Try Again</span>
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-amazigh-dark">{title}</h3>
          <span className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-amazigh-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-amazigh-dark mb-6">
          {question.question}
        </h4>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrectOption = index === question.correctAnswer
            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all '
            
            if (isAnswered) {
              if (isCorrectOption) {
                buttonClass += 'bg-green-100 border-green-500 text-green-800'
              } else if (isSelected && !isCorrectOption) {
                buttonClass += 'bg-red-100 border-red-500 text-red-800'
              } else {
                buttonClass += 'bg-gray-50 border-gray-300 text-gray-600'
              }
            } else {
              buttonClass += isSelected
                ? 'bg-amazigh-light border-amazigh-primary text-amazigh-dark'
                : 'bg-white border-gray-300 hover:border-amazigh-primary hover:bg-amazigh-light'
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && (
                    <>
                      {isCorrectOption && <CheckCircle className="text-green-600" size={20} />}
                      {isSelected && !isCorrectOption && <XCircle className="text-red-600" size={20} />}
                    </>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {isAnswered && question.explanation && (
        <div className={`mb-6 p-4 rounded-lg ${
          isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
            {question.explanation}
          </p>
        </div>
      )}

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full bg-amazigh-primary text-white py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center justify-center space-x-2"
        >
          <span>{currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  )
}

