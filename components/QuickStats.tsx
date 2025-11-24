'use client'

import { useEffect, useState } from 'react'
import { BookOpen, Heart, Trophy, TrendingUp } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import Link from 'next/link'

export default function QuickStats() {
  const [stats, setStats] = useState({
    lessonsCompleted: 0,
    favoriteWords: 0,
    quizScore: 0,
    totalProgress: 0,
  })

  useEffect(() => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    const quizScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    
    const avgScore = quizScores.length > 0
      ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
      : 0

    const totalProgress = Math.round((completed.length / 6) * 100)

    setStats({
      lessonsCompleted: completed.length,
      favoriteWords: favorites.length,
      quizScore: avgScore,
      totalProgress,
    })
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-amazigh-dark mb-4">Your Quick Stats</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-amazigh-primary/10 p-3 rounded-lg">
            <BookOpen className="text-amazigh-primary" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-amazigh-primary">{stats.lessonsCompleted}</div>
            <div className="text-sm text-gray-600">Lessons</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-red-100 p-3 rounded-lg">
            <Heart className="text-red-500" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-amazigh-primary">{stats.favoriteWords}</div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Trophy className="text-yellow-600" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-amazigh-primary">{stats.quizScore}%</div>
            <div className="text-sm text-gray-600">Quiz Avg</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-amazigh-primary">{stats.totalProgress}%</div>
            <div className="text-sm text-gray-600">Progress</div>
          </div>
        </div>
      </div>
      <Link
        href="/dashboard"
        className="block text-center bg-amazigh-primary text-white py-2 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
      >
        View Full Dashboard →
      </Link>
    </div>
  )
}

