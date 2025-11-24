'use client'

import { useState } from 'react'
import { Download, FileText, CheckCircle } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'

export default function ExportPage() {
  const [exported, setExported] = useState(false)

  const exportProgress = () => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    const quizScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    
    const data = {
      exportDate: new Date().toISOString(),
      completedLessons: completed,
      favoriteWords: favorites,
      quizScores: quizScores,
      statistics: {
        totalLessonsCompleted: completed.length,
        totalFavoriteWords: favorites.length,
        averageQuizScore: quizScores.length > 0
          ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
          : 0,
        totalQuizzesTaken: quizScores.length,
      },
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `openamazigh-progress-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setExported(true)
    setTimeout(() => setExported(false), 3000)
  }

  const exportAsText = () => {
    const completed = storage.get<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, [])
    const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])
    const quizScores = storage.get<number[]>(STORAGE_KEYS.QUIZ_SCORES, [])
    
    const text = `OpenAmazigh Learning Progress Report
Generated: ${new Date().toLocaleDateString()}

COMPLETED LESSONS: ${completed.length}
${completed.map(id => `  - Lesson ${id}`).join('\n')}

FAVORITE WORDS: ${favorites.length}
${favorites.length > 0 ? favorites.map((word, i) => `  ${i + 1}. ${word}`).join('\n') : '  None yet'}

QUIZ SCORES:
  Total Quizzes: ${quizScores.length}
  Average Score: ${quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0}%
  Scores: ${quizScores.join(', ')}

---
Keep learning Tamazight! ⵣ
`

    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `openamazigh-progress-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setExported(true)
    setTimeout(() => setExported(false), 3000)
  }

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Download className="text-amazigh-primary" size={48} />
            <span>Export Your Progress</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download your learning progress and statistics
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Export Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <button
              onClick={exportProgress}
              className="bg-amazigh-primary text-white p-6 rounded-lg hover:bg-amazigh-dark transition-colors text-left group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <FileText className="text-white" size={32} />
                <h3 className="text-xl font-semibold">Export as JSON</h3>
              </div>
              <p className="text-gray-200 text-sm">
                Download your progress as a JSON file. Perfect for backup or importing to another device.
              </p>
            </button>

            <button
              onClick={exportAsText}
              className="bg-amazigh-secondary text-white p-6 rounded-lg hover:bg-opacity-90 transition-colors text-left group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <FileText className="text-white" size={32} />
                <h3 className="text-xl font-semibold">Export as Text</h3>
              </div>
              <p className="text-gray-200 text-sm">
                Download a human-readable text report of your learning progress and achievements.
              </p>
            </button>
          </div>

          {exported && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2 text-green-800 animate-fade-in">
              <CheckCircle size={20} className="text-green-600" />
              <span>Progress exported successfully!</span>
            </div>
          )}
        </div>

        <div className="bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Exporting</h2>
          <div className="space-y-3 text-gray-200">
            <p>
              Exporting your progress allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Backup your learning data</li>
              <li>Transfer progress to another device</li>
              <li>Share your achievements with others</li>
              <li>Keep a record of your learning journey</li>
            </ul>
            <p className="mt-4">
              <strong>Note:</strong> Your progress is stored locally in your browser. 
              Exporting creates a backup that you can save elsewhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

