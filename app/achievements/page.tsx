'use client'

import { useEffect, useState } from 'react'
import { Trophy, BookOpen, Heart, Target, Star, Zap, Award } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import AchievementBadge from '@/components/AchievementBadge'
import Breadcrumbs from '@/components/Breadcrumbs'

interface Achievement {
  id: string
  icon: any
  title: string
  description: string
  unlocked: boolean
  progress: number
  requirement: number
  color: string
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    const quizScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    
    const allAchievements: Achievement[] = [
      {
        id: 'first-steps',
        icon: BookOpen,
        title: 'First Steps',
        description: 'Complete your first lesson',
        unlocked: completed.length > 0,
        progress: Math.min((completed.length / 1) * 100, 100),
        requirement: 1,
        color: 'blue',
      },
      {
        id: 'word-collector',
        icon: Heart,
        title: 'Word Collector',
        description: 'Add 5 words to favorites',
        unlocked: favorites.length >= 5,
        progress: Math.min((favorites.length / 5) * 100, 100),
        requirement: 5,
        color: 'red',
      },
      {
        id: 'quiz-master',
        icon: Trophy,
        title: 'Quiz Master',
        description: 'Score 80% or higher on a quiz',
        unlocked: quizScores.some(score => score >= 80),
        progress: quizScores.length > 0 ? Math.min((Math.max(...quizScores) / 80) * 100, 100) : 0,
        requirement: 80,
        color: 'yellow',
      },
      {
        id: 'dedicated-learner',
        icon: Target,
        title: 'Dedicated Learner',
        description: 'Complete 3 lessons',
        unlocked: completed.length >= 3,
        progress: Math.min((completed.length / 3) * 100, 100),
        requirement: 3,
        color: 'green',
      },
      {
        id: 'perfectionist',
        icon: Star,
        title: 'Perfectionist',
        description: 'Score 100% on a quiz',
        unlocked: quizScores.some(score => score === 100),
        progress: quizScores.length > 0 ? Math.min((Math.max(...quizScores) / 100) * 100, 100) : 0,
        requirement: 100,
        color: 'purple',
      },
      {
        id: 'speed-learner',
        icon: Zap,
        title: 'Speed Learner',
        description: 'Complete 5 lessons',
        unlocked: completed.length >= 5,
        progress: Math.min((completed.length / 5) * 100, 100),
        requirement: 5,
        color: 'orange',
      },
      {
        id: 'vocabulary-expert',
        icon: Award,
        title: 'Vocabulary Expert',
        description: 'Add 10 words to favorites',
        unlocked: favorites.length >= 10,
        progress: Math.min((favorites.length / 10) * 100, 100),
        requirement: 10,
        color: 'indigo',
      },
    ]

    setAchievements(allAchievements)
  }, [])

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Achievements', href: '/achievements' }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Trophy className="text-amazigh-primary" size={48} />
            <span>Achievements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your learning milestones and unlock achievements as you progress
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amazigh-dark">Your Progress</h2>
              <p className="text-gray-600">Unlock achievements by learning and practicing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amazigh-primary">
                {unlockedCount} / {totalCount}
              </div>
              <div className="text-gray-600">Achievements</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-amazigh-primary h-4 rounded-full transition-all duration-300"
              style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              unlocked={achievement.unlocked}
              progress={achievement.progress}
              color={achievement.color}
            />
          ))}
        </div>

        {/* Tips */}
        <div className="mt-12 bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Tips to Unlock More Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <div>
              <p className="font-semibold mb-2">Keep Learning</p>
              <p className="text-sm">Complete lessons regularly to unlock learning achievements</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Practice Daily</p>
              <p className="text-sm">Take quizzes and practice vocabulary to improve your scores</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Build Vocabulary</p>
              <p className="text-sm">Add words to favorites to unlock collection achievements</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Aim for Perfection</p>
              <p className="text-sm">Try to score 100% on quizzes to unlock special achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

