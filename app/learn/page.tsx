'use client'

import { useState, useEffect } from 'react'
import { BookOpen, CheckCircle, Circle, ArrowRight, ArrowLeft, HelpCircle, Keyboard, Volume2 } from 'lucide-react'
import Link from 'next/link'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import Breadcrumbs from '@/components/Breadcrumbs'

interface Lesson {
  id: number
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  topics: string[]
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Introduction to Tamazight',
    description: 'Learn the basics of Tamazight language, alphabet, and common greetings',
    level: 'Beginner',
    duration: '15 min',
    topics: ['Alphabet', 'Greetings', 'Basic Phrases'],
  },
  {
    id: 2,
    title: 'Numbers and Counting',
    description: 'Master numbers from 1 to 100 and learn how to count in Tamazight',
    level: 'Beginner',
    duration: '20 min',
    topics: ['Numbers 1-10', 'Tens', 'Hundreds'],
  },
  {
    id: 3,
    title: 'Family and Relationships',
    description: 'Learn vocabulary related to family members and relationships',
    level: 'Beginner',
    duration: '18 min',
    topics: ['Family Members', 'Relationships', 'Possessives'],
  },
  {
    id: 4,
    title: 'Daily Conversations',
    description: 'Practice common daily conversations and expressions',
    level: 'Intermediate',
    duration: '25 min',
    topics: ['Shopping', 'Restaurant', 'Directions'],
  },
  {
    id: 5,
    title: 'Grammar Fundamentals',
    description: 'Understand basic Tamazight grammar rules and sentence structure',
    level: 'Intermediate',
    duration: '30 min',
    topics: ['Verbs', 'Nouns', 'Sentence Structure'],
  },
  {
    id: 6,
    title: 'Cultural Expressions',
    description: 'Learn culturally significant phrases and expressions',
    level: 'Advanced',
    duration: '35 min',
    topics: ['Proverbs', 'Idioms', 'Cultural Context'],
  },
]

export default function Learn() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All')
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    setCompletedLessons(saved)
  }, [])

  const filteredLessons = selectedLevel === 'All'
    ? lessons
    : lessons.filter(lesson => lesson.level === selectedLevel)

  const toggleLessonComplete = (lessonId: number) => {
    setCompletedLessons(prev => {
      const updated = prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
      storage.set(STORAGE_KEYS.COMPLETED_LESSONS, updated)
      return updated
    })
  }

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Learn', href: '/learn' }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <BookOpen className="text-amazigh-primary" size={48} />
            <span>Learn Tamazight</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive lessons and exercises to help you learn Tamazight at your own pace
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedLevel === level
                  ? 'bg-amazigh-primary text-white'
                  : 'bg-white text-amazigh-dark hover:bg-gray-100'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-4">Your Progress</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Completed Lessons</span>
                <span className="font-semibold text-amazigh-primary">
                  {completedLessons.length} / {lessons.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-amazigh-primary h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(lesson => {
            const isCompleted = completedLessons.includes(lesson.id)
            const levelColors = {
              Beginner: 'bg-green-100 text-green-800',
              Intermediate: 'bg-yellow-100 text-yellow-800',
              Advanced: 'bg-red-100 text-red-800',
            }

            return (
              <div
                key={lesson.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${levelColors[lesson.level]}`}>
                        {lesson.level}
                      </span>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-amazigh-dark mb-2">
                      Lesson {lesson.id}: {lesson.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                  </div>
                  <button
                    onClick={() => toggleLessonComplete(lesson.id)}
                    className="ml-2 text-amazigh-primary hover:text-amazigh-secondary transition-colors"
                    aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isCompleted ? (
                      <CheckCircle size={24} className="fill-current" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Topics covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {lesson.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amazigh-light text-amazigh-dark px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/learn/${lesson.id}`}
                  className="w-full bg-amazigh-primary text-white py-2 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Lesson</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            )
          })}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No lessons found for this level.</p>
          </div>
        )}

        {/* Learning Resources */}
        <div className="mt-12 bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              href="/learn/quiz"
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center space-x-2 mb-2">
                <HelpCircle size={24} className="text-amazigh-accent" />
                <h3 className="font-semibold">Practice Quiz</h3>
              </div>
              <p className="text-gray-200 text-sm mb-3">
                Test your knowledge with interactive exercises and quizzes
              </p>
              <span className="text-amazigh-accent hover:text-yellow-400 font-semibold">
                Start Quiz →
              </span>
            </Link>
            <Link
              href="/learn/alphabet"
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold mb-2">Learn Alphabet</h3>
              <p className="text-gray-200 text-sm mb-3">
                Master the Tifinagh script and alphabet
              </p>
              <span className="text-amazigh-accent hover:text-yellow-400 font-semibold">
                Start Learning →
              </span>
            </Link>
            <Link
              href="/learn/typing"
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold mb-2">Typing Practice</h3>
              <p className="text-gray-200 text-sm mb-3">
                Practice typing Tifinagh characters
              </p>
              <span className="text-amazigh-accent hover:text-yellow-400 font-semibold">
                Start Practicing →
              </span>
            </Link>
            <Link
              href="/learn/flashcards"
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <h3 className="font-semibold mb-2">Flashcards</h3>
              <p className="text-gray-200 text-sm mb-3">
                Practice vocabulary with interactive flashcards
              </p>
              <span className="text-amazigh-accent hover:text-yellow-400 font-semibold">
                Start Learning →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

