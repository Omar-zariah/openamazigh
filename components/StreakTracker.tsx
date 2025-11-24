'use client'

import { useEffect, useState } from 'react'
import { Flame, Calendar } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'

export default function StreakTracker() {
  const [streak, setStreak] = useState(0)
  const [lastActivity, setLastActivity] = useState<string | null>(null)

  useEffect(() => {
    const today = new Date().toDateString()
    const savedLastActivity = storage.get<string>(STORAGE_KEYS.USER_PROGRESS + '_lastActivity', '')
    const savedStreak = storage.get<number>(STORAGE_KEYS.USER_PROGRESS + '_streak', 0)

    if (savedLastActivity === today) {
      // Already active today
      setStreak(savedStreak)
      setLastActivity(today)
    } else {
      const lastDate = savedLastActivity ? new Date(savedLastActivity) : null
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      if (lastDate && lastDate.toDateString() === yesterday.toDateString()) {
        // Continue streak
        const newStreak = savedStreak + 1
        setStreak(newStreak)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_streak', newStreak)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_lastActivity', today)
        setLastActivity(today)
      } else if (!lastDate || lastDate.toDateString() !== today) {
        // New streak or broken streak
        const newStreak = lastDate && lastDate.toDateString() === today ? savedStreak : 1
        setStreak(newStreak)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_streak', newStreak)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_lastActivity', today)
        setLastActivity(today)
      }
    }
  }, [])

  const updateStreak = () => {
    const today = new Date().toDateString()
    const savedLastActivity = storage.get<string>(STORAGE_KEYS.USER_PROGRESS + '_lastActivity', '')
    
    if (savedLastActivity !== today) {
      const lastDate = savedLastActivity ? new Date(savedLastActivity) : null
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      if (lastDate && lastDate.toDateString() === yesterday.toDateString()) {
        // Continue streak
        const newStreak = streak + 1
        setStreak(newStreak)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_streak', newStreak)
      } else {
        // Start new streak
        setStreak(1)
        storage.set(STORAGE_KEYS.USER_PROGRESS + '_streak', 1)
      }
      
      storage.set(STORAGE_KEYS.USER_PROGRESS + '_lastActivity', today)
      setLastActivity(today)
    }
  }

  // Auto-update on component mount if needed
  useEffect(() => {
    updateStreak()
  }, [])

  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Flame className="text-white" size={32} />
          <div>
            <h3 className="text-lg font-semibold">Study Streak</h3>
            <p className="text-sm text-orange-100">Keep learning every day!</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{streak}</div>
          <div className="text-sm text-orange-100">days</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-sm">
        <Calendar size={16} />
        <span>Last active: {lastActivity ? new Date(lastActivity).toLocaleDateString() : 'Today'}</span>
      </div>

      {streak > 0 && (
        <div className="mt-4 p-3 bg-white/20 rounded-lg">
          <p className="text-sm">
            {streak === 1
              ? 'Great start! Come back tomorrow to continue your streak!'
              : `Amazing! You've been learning for ${streak} days in a row! 🔥`}
          </p>
        </div>
      )}
    </div>
  )
}

