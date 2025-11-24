'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import KeyboardShortcutsModal from './KeyboardShortcutsModal'

export default function KeyboardShortcuts() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if not typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return
      }

      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const searchButton = document.querySelector('[aria-label="Search"]') as HTMLElement
        if (searchButton) {
          searchButton.click()
        }
      }

      // ? for keyboard shortcuts help
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        setShowModal(true)
      }

      // Esc to close modals
      if (e.key === 'Escape') {
        setShowModal(false)
      }

      // Number keys for quick navigation (when not in input)
      if (e.key >= '1' && e.key <= '6' && !e.ctrlKey && !e.metaKey) {
        const shortcuts: Record<string, string> = {
          '1': '/',
          '2': '/dictionary',
          '3': '/learn',
          '4': '/culture',
          '5': '/dashboard',
          '6': '/about',
        }
        const path = shortcuts[e.key]
        if (path) {
          router.push(path)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [router])

  return (
    <>
      <KeyboardShortcutsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

