'use client'

import { X, Keyboard } from 'lucide-react'

interface KeyboardShortcutsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  if (!isOpen) return null

  const shortcuts = [
    { key: 'Ctrl + K', description: 'Open search' },
    { key: '1', description: 'Go to Home' },
    { key: '2', description: 'Go to Dictionary' },
    { key: '3', description: 'Go to Learn' },
    { key: '4', description: 'Go to Culture' },
    { key: '5', description: 'Go to Dashboard' },
    { key: '6', description: 'Go to About' },
    { key: 'Esc', description: 'Close modals/dialogs' },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <Keyboard className="text-amazigh-primary" size={24} />
            <h2 className="text-2xl font-bold text-amazigh-dark dark:text-white">Keyboard Shortcuts</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-amazigh-light dark:bg-gray-700 rounded-lg"
              >
                <span className="text-gray-700 dark:text-gray-300">{shortcut.description}</span>
                <kbd className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm font-mono text-amazigh-dark dark:text-white">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> Keyboard shortcuts work when you're not typing in an input field.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full bg-amazigh-primary text-white py-2 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

