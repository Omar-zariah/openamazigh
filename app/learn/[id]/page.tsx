'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'
import { storage, STORAGE_KEYS } from '@/lib/storage'

interface LessonContent {
  id: number
  title: string
  content: string[]
  exercises?: string[]
}

const lessonContents: Record<number, LessonContent> = {
  1: {
    id: 1,
    title: 'Introduction to Tamazight',
    content: [
      'Welcome to your first Tamazight lesson! Tamazight is a Berber language spoken across North Africa.',
      'The Tamazight alphabet uses the Tifinagh script, which is one of the oldest scripts still in use today.',
      'Common greetings include:',
      '• ⴰⵣⵓⵍ (azul) - Hello / Peace',
      '• ⵉⵎⵉⵏⵉⵏ (iminin) - Good morning',
      '• ⵎⵙⵙⵏⵉⵙ (tanemmirt) - Thank you',
    ],
    exercises: [
      'Practice saying "ⴰⵣⵓⵍ" (azul) out loud',
      'Try greeting someone using Tamazight',
      'Write the Tifinagh letters you learned',
    ],
  },
  2: {
    id: 2,
    title: 'Numbers and Counting',
    content: [
      'Learning numbers is essential for everyday communication.',
      'Here are the numbers 1-10 in Tamazight:',
      '• ⵢⴰⵏ (yan) - One',
      '• ⵙⵉⵏ (sin) - Two',
      '• ⴽⵕⴰⴹ (krad) - Three',
      '• ⴽⵓⵣ (kuz) - Four',
      '• ⵙⵎⵎⵓⵙ (smmus) - Five',
      '• ⵙⴹⵉⵙ (sdis) - Six',
      '• ⵙⴰ (sa) - Seven',
      '• ⵜⴰⵎ (tam) - Eight',
      '• ⵜⵣⴰ (tza) - Nine',
      '• ⵎⵔⴰⵡ (mraw) - Ten',
      'Continue practicing these numbers until you can count confidently!',
    ],
    exercises: [
      'Count from 1 to 10 in Tamazight',
      'Practice writing the numbers in Tifinagh',
      'Try counting objects around you',
    ],
  },
  3: {
    id: 3,
    title: 'Family and Relationships',
    content: [
      'Family is very important in Amazigh culture. Let\'s learn the words for family members:',
      '• ⵉⵎⵎⴰ (yemma) - Mother',
      '• ⴱⴰⴱⴰ (baba) - Father',
      '• ⵢⵎⵎⴰ (gma) - Brother',
      '• ⵡⵍⵎⵙⵉ (ultma) - Sister',
      '• ⵢⵎⵎⴰ (baba n baba) - Grandfather',
      '• ⵉⵎⵎⴰ (yemma n yemma) - Grandmother',
      '• ⵎⵎⵉ (mmi) - Son',
      '• ⵍⵍⵉⵙ (llis) - Daughter',
      'These words help you talk about your family and relationships in Tamazight.',
    ],
    exercises: [
      'Practice saying each family member word out loud',
      'Try to describe your family using Tamazight words',
      'Write sentences about your family members',
    ],
  },
  4: {
    id: 4,
    title: 'Daily Conversations',
    content: [
      'Now let\'s learn some phrases for daily conversations:',
      '• ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ (azul nnnin) - Hello everyone',
      '• ⵎⵎⵙⵙⵏⵉⵙ (tanemmirt) - Thank you',
      '• ⵙⵙⵏⵉⵙ (afak) - Please',
      '• ⵙⵙⵏⵉⵙ (samah) - Excuse me / Sorry',
      '• ⵉⵎⵉⵏⵉⵏ (iminin) - Good morning',
      '• ⵎⵙⵙⵏⵉⵙ (tansawt) - Good evening',
      '• ⵎⵙⵙⵏⵉⵙ (tansawt n tansawt) - Good night',
      '• ⵎⵙⵙⵏⵉⵙ (bssaha) - You\'re welcome',
      'Practice these phrases to improve your conversational Tamazight!',
    ],
    exercises: [
      'Practice greeting people in different situations',
      'Create a short conversation using these phrases',
      'Try using these phrases in real conversations',
    ],
  },
  5: {
    id: 5,
    title: 'Grammar Fundamentals',
    content: [
      'Understanding basic grammar will help you form sentences correctly:',
      'Word Order: Tamazight typically follows a Subject-Verb-Object (SVO) order, similar to English.',
      'Verbs: Tamazight verbs change based on the subject. For example:',
      '• ⵏⴽⴽⵉⵏⵉ (nkkini) - I am',
      '• ⴽⴽⵉⵏⵉⵏⵉ (kkinnit) - You are (singular)',
      '• ⵏⵙⵙⵉⵏⵙⵉⵏ (nssinsin) - We are',
      'Nouns: Nouns in Tamazight have gender (masculine/feminine) and can be singular or plural.',
      'Possessives: To show possession, you add prefixes to nouns.',
      'Practice forming simple sentences to master these grammar concepts!',
    ],
    exercises: [
      'Practice conjugating verbs with different subjects',
      'Try forming simple sentences using the grammar rules',
      'Identify the gender of different nouns',
    ],
  },
  6: {
    id: 6,
    title: 'Cultural Expressions',
    content: [
      'Tamazight is rich with cultural expressions and proverbs:',
      'Common Proverbs:',
      '• "ⵉⵎⵣⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ ⵉⵎⵣⵉⵏ" - "Our house is our home" (Home is where the heart is)',
      '• "ⵉⵎⵣⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ ⵉⵎⵣⵉⵏ" - "Unity is strength"',
      'Cultural Phrases:',
      '• ⵉⵎⵣⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ (imazighen nnnin) - We are all Amazigh',
      '• ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⵉⵣⵉⵣⵉ (tamazight tizizi) - Amazigh culture is beautiful',
      '• ⵉⵎⵣⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ (imazighen nnnin) - Long live the Amazigh people',
      'These expressions reflect the values and wisdom of Amazigh culture.',
    ],
    exercises: [
      'Memorize at least three cultural expressions',
      'Try to understand the meaning behind each proverb',
      'Use these expressions in appropriate contexts',
    ],
  },
}

export default function LessonPage() {
  const params = useParams()
  const lessonId = parseInt(params.id as string)
  const lesson = lessonContents[lessonId]
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    setIsCompleted(completed.includes(lessonId))
  }, [lessonId])

  const toggleComplete = () => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const updated = completed.includes(lessonId)
      ? completed.filter(id => id !== lessonId)
      : [...completed, lessonId]
    storage.set(STORAGE_KEYS.COMPLETED_LESSONS, updated)
    setIsCompleted(!isCompleted)
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-amazigh-light py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amazigh-dark mb-4">Lesson Not Found</h1>
          <Link href="/learn" className="text-amazigh-primary hover:underline">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/learn"
          className="inline-flex items-center space-x-2 text-amazigh-primary hover:text-amazigh-dark mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Lessons</span>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-amazigh-dark mb-2">{lesson.title}</h1>
              <p className="text-gray-600">Lesson {lesson.id}</p>
            </div>
            <button
              onClick={toggleComplete}
              className="text-amazigh-primary hover:text-amazigh-secondary transition-colors"
              aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {isCompleted ? (
                <CheckCircle size={32} className="fill-current" />
              ) : (
                <Circle size={32} />
              )}
            </button>
          </div>

          <div className="prose max-w-none mb-8">
            {lesson.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {lesson.exercises && (
            <div className="bg-amazigh-light rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-amazigh-dark mb-4">Practice Exercises</h2>
              <ul className="space-y-3">
                {lesson.exercises.map((exercise, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-amazigh-primary font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{exercise}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t">
            {lessonId > 1 && (
              <Link
                href={`/learn/${lessonId - 1}`}
                className="bg-amazigh-light text-amazigh-dark px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-secondary hover:text-white transition-colors"
              >
                ← Previous Lesson
              </Link>
            )}
            <div className="flex-1" />
            {lessonContents[lessonId + 1] && (
              <Link
                href={`/learn/${lessonId + 1}`}
                className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Next Lesson →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

