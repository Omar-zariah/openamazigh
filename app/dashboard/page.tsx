'use client'

import { useEffect, useState } from 'react'
import { BookOpen, GraduationCap, Heart, Trophy, TrendingUp, Download } from 'lucide-react'
import Link from 'next/link'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import ProgressRing from '@/components/ProgressRing'
import Breadcrumbs from '@/components/Breadcrumbs'
import StreakTracker from '@/components/StreakTracker'

export default function Dashboard() {
  const [stats, setStats] = useState({
    completedLessons: 0,
    totalLessons: 6,
    favoriteWords: 0,
    quizScore: 0,
  })

  useEffect(() => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    const quizScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    
    const avgScore = quizScores.length > 0
      ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
      : 0

    setStats({
      completedLessons: completed.length,
      totalLessons: 6,
      favoriteWords: favorites.length,
      quizScore: avgScore,
    })
  }, [])

  const lessonProgress = (stats.completedLessons / stats.totalLessons) * 100

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Dashboard', href: '/dashboard' }]} />
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4">
            Your Learning Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Track your progress and achievements
          </p>
        </div>

        {/* Study Streak */}
        <div className="mb-8">
          <StreakTracker />
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <GraduationCap className="text-amazigh-primary" size={32} />
              <span className="text-2xl font-bold text-amazigh-primary">
                {stats.completedLessons}/{stats.totalLessons}
              </span>
            </div>
            <p className="text-gray-600">Lessons Completed</p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-amazigh-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${lessonProgress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Heart className="text-red-500" size={32} />
              <span className="text-2xl font-bold text-amazigh-primary">
                {stats.favoriteWords}
              </span>
            </div>
            <p className="text-gray-600">Favorite Words</p>
            <Link
              href="/dictionary"
              className="text-amazigh-primary hover:underline text-sm mt-2 inline-block"
            >
              View Dictionary →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="text-amazigh-accent" size={32} />
              <span className="text-2xl font-bold text-amazigh-primary">
                {stats.quizScore}%
              </span>
            </div>
            <p className="text-gray-600">Average Quiz Score</p>
            <Link
              href="/learn/quiz"
              className="text-amazigh-primary hover:underline text-sm mt-2 inline-block"
            >
              Take Quiz →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="text-green-500" size={32} />
              <span className="text-2xl font-bold text-amazigh-primary">
                {Math.round(lessonProgress)}%
              </span>
            </div>
            <p className="text-gray-600">Overall Progress</p>
            <div className="mt-4">
              <ProgressRing progress={lessonProgress} size={80} strokeWidth={6} />
            </div>
          </div>
        </div>

        {/* Export Progress */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-amazigh-dark mb-2">Export Your Progress</h3>
              <p className="text-gray-600">Download your learning data as a backup</p>
            </div>
            <Link
              href="/export"
              className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Export</span>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/learn"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
          >
            <BookOpen className="text-amazigh-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-amazigh-dark mb-2">Continue Learning</h3>
            <p className="text-gray-600">Pick up where you left off</p>
          </Link>

          <Link
            href="/learn/quiz"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
          >
            <Trophy className="text-amazigh-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-amazigh-dark mb-2">Take a Quiz</h3>
            <p className="text-gray-600">Test your knowledge</p>
          </Link>

          <Link
            href="/learn/flashcards"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
          >
            <BookOpen className="text-amazigh-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-amazigh-dark mb-2">Practice Flashcards</h3>
            <p className="text-gray-600">Review vocabulary</p>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/achievements"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
          >
            <Trophy className="text-amazigh-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-amazigh-dark mb-2">View Achievements</h3>
            <p className="text-gray-600">See all your unlocked achievements</p>
          </Link>
          <Link
            href="/collections"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
          >
            <Heart className="text-red-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-amazigh-dark mb-2">Word Collections</h3>
            <p className="text-gray-600">Organize your favorite words</p>
          </Link>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'First Steps',
                description: 'Complete your first lesson',
                unlocked: stats.completedLessons > 0,
              },
              {
                title: 'Word Collector',
                description: 'Add 5 words to favorites',
                unlocked: stats.favoriteWords >= 5,
              },
              {
                title: 'Quiz Master',
                description: 'Score 80% or higher on a quiz',
                unlocked: stats.quizScore >= 80,
              },
              {
                title: 'Dedicated Learner',
                description: 'Complete 3 lessons',
                unlocked: stats.completedLessons >= 3,
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked
                    ? 'border-amazigh-primary bg-amazigh-light'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy
                    className={achievement.unlocked ? 'text-amazigh-accent' : 'text-gray-400'}
                    size={24}
                  />
                  <h3
                    className={`font-semibold ${
                      achievement.unlocked ? 'text-amazigh-dark' : 'text-gray-500'
                    }`}
                  >
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

