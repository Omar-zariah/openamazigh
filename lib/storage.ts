// Utility functions for localStorage

export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },
}

export const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'openamazigh_completed_lessons',
  QUIZ_SCORES: 'openamazigh_quiz_scores',
  USER_PROGRESS: 'openamazigh_user_progress',
}

