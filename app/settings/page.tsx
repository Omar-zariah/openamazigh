'use client'

import { useState, useEffect } from 'react'
import { Settings, Moon, Sun, Bell, Download, Trash2 } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [notifications, setNotifications] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('system')
    }
  }, [])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    if (newTheme === 'system') {
      localStorage.removeItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', prefersDark)
    } else {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  const clearAllData = () => {
    if (confirm('Are you sure you want to clear all your progress? This cannot be undone.')) {
      storage.remove(STORAGE_KEYS.COMPLETED_LESSONS)
      storage.remove(STORAGE_KEYS.USER_PROGRESS + '_favorites')
      storage.remove(STORAGE_KEYS.QUIZ_SCORES)
      storage.remove(STORAGE_KEYS.USER_PROGRESS)
      alert('All progress has been cleared.')
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Settings', href: '/settings' },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center space-x-3">
            <Settings className="text-amazigh-primary" size={48} />
            <span>Settings</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your preferences and account settings
          </p>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            {theme === 'dark' ? (
              <Moon className="text-amazigh-primary" size={24} />
            ) : (
              <Sun className="text-amazigh-primary" size={24} />
            )}
            <h2 className="text-2xl font-bold text-amazigh-dark dark:text-white">Appearance</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={() => handleThemeChange('light')}
                className="text-amazigh-primary"
              />
              <div>
                <div className="font-semibold text-amazigh-dark dark:text-white">Light</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Use light theme</div>
              </div>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={() => handleThemeChange('dark')}
                className="text-amazigh-primary"
              />
              <div>
                <div className="font-semibold text-amazigh-dark dark:text-white">Dark</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Use dark theme</div>
              </div>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="system"
                checked={theme === 'system'}
                onChange={() => handleThemeChange('system')}
                className="text-amazigh-primary"
              />
              <div>
                <div className="font-semibold text-amazigh-dark dark:text-white">System</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Match system preference</div>
              </div>
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="text-amazigh-primary" size={24} />
            <h2 className="text-2xl font-bold text-amazigh-dark dark:text-white">Notifications</h2>
          </div>

          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <div className="font-semibold text-amazigh-dark dark:text-white">Enable Notifications</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Get notified about your learning progress
              </div>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-12 h-6 rounded-full bg-gray-300 appearance-none checked:bg-amazigh-primary transition-colors relative"
              style={{
                background: notifications ? '#2C5F2D' : '#d1d5db',
              }}
            />
          </label>
        </div>

        {/* Data Management */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-amazigh-dark dark:text-white mb-6">Data Management</h2>

          <div className="space-y-4">
            <a
              href="/export"
              className="flex items-center justify-between p-4 bg-amazigh-light dark:bg-gray-700 rounded-lg hover:bg-amazigh-secondary dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Download className="text-amazigh-primary" size={24} />
                <div>
                  <div className="font-semibold text-amazigh-dark dark:text-white">Export Progress</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Download your learning data
                  </div>
                </div>
              </div>
            </a>

            <button
              onClick={clearAllData}
              className="w-full flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-left"
            >
              <div className="flex items-center space-x-3">
                <Trash2 className="text-red-500" size={24} />
                <div>
                  <div className="font-semibold text-red-700 dark:text-red-400">Clear All Data</div>
                  <div className="text-sm text-red-600 dark:text-red-500">
                    Permanently delete all your progress
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About OpenAmazigh</h2>
          <div className="space-y-2 text-gray-200">
            <p>Version: 1.0.0</p>
            <p>License: MIT</p>
            <p>Open source platform for learning Tamazight</p>
          </div>
        </div>
      </div>
    </div>
  )
}

