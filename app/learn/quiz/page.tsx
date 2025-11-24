'use client'

import Quiz from '@/components/Quiz'
import { BookOpen } from 'lucide-react'

const quizQuestions = [
  {
    question: 'What does "ⴰⵣⵓⵍ" (azul) mean?',
    options: ['Hello / Peace', 'Goodbye', 'Thank you', 'Please'],
    correctAnswer: 0,
    explanation: '"ⴰⵣⵓⵍ" (azul) is a common greeting in Tamazight meaning "Hello" or "Peace".',
  },
  {
    question: 'How do you say "I am Amazigh" in Tamazight?',
    options: [
      'ⵏⴽⴽⵉⵏⵉ ⴰⵎⴰⵣⵉⵖ',
      'ⵏⴽⴽⵉⵏⵉ ⵜⴰⵎⵣⵉⵖⵜ',
      'ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ',
      'ⵉⵎⵣⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ',
    ],
    correctAnswer: 0,
    explanation: '"ⵏⴽⴽⵉⵏⵉ ⴰⵎⴰⵣⵉⵖ" means "I am Amazigh" in Tamazight.',
  },
  {
    question: 'What is the Tamazight word for "water"?',
    options: ['ⵉⵎⵣⵉⵏ', 'ⴰⵙⵙⵉⵏ', 'ⵜⴰⵎⵣⵉⵖⵜ', 'ⵉⵎⵎⴰ'],
    correctAnswer: 0,
    explanation: '"ⵉⵎⵣⵉⵏ" (amane) means "water" in Tamazight.',
  },
  {
    question: 'What does the letter "ⵣ" (yaz) in the Amazigh flag represent?',
    options: [
      'The free person',
      'The sun',
      'The mountains',
      'The sea',
    ],
    correctAnswer: 0,
    explanation: 'The letter "ⵣ" (yaz) represents the free person, a core concept in Amazigh identity.',
  },
  {
    question: 'Which of these is a Tamazight dialect?',
    options: ['Tarifit', 'Arabic', 'French', 'English'],
    correctAnswer: 0,
    explanation: 'Tarifit is one of the major Tamazight dialects spoken in northern Morocco.',
  },
  {
    question: 'What is the Tamazight word for "mother"?',
    options: ['ⵉⵎⵎⴰ', 'ⴱⴰⴱⴰ', 'ⵢⵎⵎⴰ', 'ⵡⵍⵎⵙⵉ'],
    correctAnswer: 0,
    explanation: '"ⵉⵎⵎⴰ" (yemma) means "mother" in Tamazight.',
  },
  {
    question: 'How do you say "two" in Tamazight?',
    options: ['ⵢⴰⵏ', 'ⵙⵉⵏ', 'ⴽⵕⴰⴹ', 'ⴽⵓⵣ'],
    correctAnswer: 1,
    explanation: '"ⵙⵉⵏ" (sin) means "two" in Tamazight.',
  },
  {
    question: 'What is Tifinagh?',
    options: [
      'The Tamazight alphabet',
      'A type of food',
      'A traditional dance',
      'A musical instrument',
    ],
    correctAnswer: 0,
    explanation: 'Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) is the traditional script used to write Tamazight.',
  },
  {
    question: 'What color represents the desert in the Amazigh flag?',
    options: ['Blue', 'Yellow', 'Red', 'Green'],
    correctAnswer: 1,
    explanation: 'Yellow in the Amazigh flag represents the desert and the land.',
  },
  {
    question: 'Where are Amazigh people primarily located?',
    options: [
      'North Africa',
      'South America',
      'East Asia',
      'Northern Europe',
    ],
    correctAnswer: 0,
    explanation: 'Amazigh people are primarily located in North Africa, including Morocco, Algeria, Tunisia, Libya, and other countries.',
  },
]

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <BookOpen className="text-amazigh-primary" size={48} />
            <span>Tamazight Quiz</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge of Tamazight language and culture
          </p>
        </div>

        <Quiz questions={quizQuestions} title="Tamazight Knowledge Quiz" />
      </div>
    </div>
  )
}

