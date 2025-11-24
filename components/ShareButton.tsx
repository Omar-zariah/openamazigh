'use client'

import { useState, useRef, useEffect } from 'react'
import { Share2, Check, Copy, Twitter, Facebook } from 'lucide-react'

interface ShareButtonProps {
  title: string
  text: string
  url?: string
  className?: string
}

export default function ShareButton({ title, text, url, className = '' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        })
        setShowMenu(false)
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: show menu
      setShowMenu(!showMenu)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    setShowMenu(false)
  }

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
    setShowMenu(false)
  }

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(facebookUrl, '_blank', 'width=550,height=420')
    setShowMenu(false)
  }

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2 bg-amazigh-primary text-white rounded-lg hover:bg-amazigh-dark transition-colors"
        aria-label="Share"
      >
        <Share2 size={18} />
        <span className="hidden sm:inline">Share</span>
      </button>

      {/* Share Options Dropdown */}
      {showMenu && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 min-w-[200px] z-50 animate-fade-in border border-gray-200 dark:border-gray-700">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-amazigh-light dark:hover:bg-gray-700 rounded transition-colors text-left"
          >
            {copied ? (
              <>
                <Check size={18} className="text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} className="text-amazigh-primary" />
                <span className="text-gray-700 dark:text-gray-300">Copy Link</span>
              </>
            )}
          </button>
          <button
            onClick={shareToTwitter}
            className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-amazigh-light dark:hover:bg-gray-700 rounded transition-colors text-left"
          >
            <Twitter size={18} className="text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">Share on Twitter</span>
          </button>
          <button
            onClick={shareToFacebook}
            className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-amazigh-light dark:hover:bg-gray-700 rounded transition-colors text-left"
          >
            <Facebook size={18} className="text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">Share on Facebook</span>
          </button>
        </div>
      )}
    </div>
  )
}

