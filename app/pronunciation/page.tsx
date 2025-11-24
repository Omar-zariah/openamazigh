'use client'

import { useState } from 'react'
import { Volume2 } from 'lucide-react'
import AudioPlayer from '@/components/AudioPlayer'

interface PronunciationGuide {
  word: string
  tifinagh: string
  pronunciation: string
  audio?: string
  example: string
  category: string
}

const pronunciationGuides: PronunciationGuide[] = [
  {
    word: 'Hello',
    tifinagh: 'ⴰⵣⵓⵍ',
    pronunciation: 'ah-ZOOL',
    example: 'ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ - Hello everyone',
    category: 'Greetings',
  },
  {
    word: 'Water',
    tifinagh: 'ⵉⵎⵣⵉⵏ',
    pronunciation: 'ah-MAH-neh',
    example: 'ⵙⵙⵉⵏⵙⵉⵏ ⵉⵎⵣⵉⵏ - We drink water',
    category: 'Nature',
  },
  {
    word: 'Mother',
    tifinagh: 'ⵉⵎⵎⴰ',
    pronunciation: 'YEM-mah',
    example: 'ⵉⵎⵎⴰ ⵏⵏⵉⵏⵏⵉⵏ - Our mother',
    category: 'Family',
  },
  {
    word: 'House',
    tifinagh: 'ⵉⵎⵣⵉⵏ',
    pronunciation: 'tee-GEM-mee',
    example: 'ⵏⵙⵙⵉⵏⵙⵉⵏ ⵙ ⵉⵎⵣⵉⵏ - We are at home',
    category: 'Home',
  },
  {
    word: 'Sun',
    tifinagh: 'ⴰⵙⵙⵉⵏ',
    pronunciation: 'tee-FAWT',
    example: 'ⵢⵏⵏⵓⵙⵙⵉⵏ - The sun rises',
    category: 'Nature',
  },
  {
    word: 'One',
    tifinagh: 'ⵢⴰⵏ',
    pronunciation: 'YAHN',
    example: 'ⵢⴰⵏ ⵏⵏⵉⵏⵏⵉⵏ - One person',
    category: 'Numbers',
  },
  {
    word: 'Two',
    tifinagh: 'ⵙⵉⵏ',
    pronunciation: 'SEEN',
    example: 'ⵙⵉⵏ ⵏⵏⵉⵏⵏⵉⵏ - Two people',
    category: 'Numbers',
  },
  {
    word: 'Thank you',
    tifinagh: 'ⵎⵙⵙⵏⵉⵙ',
    pronunciation: 'tah-NEM-meert',
    example: 'ⵎⵙⵙⵏⵉⵙ ⵏⵏⴰⵏⵏⵉⵏ - Thank you very much',
    category: 'Greetings',
  },
]

export default function PronunciationPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null)
    } else {
      setPlayingIndex(index)
      // In a real app, this would play audio
      setTimeout(() => setPlayingIndex(null), 2000)
    }
  }

  const handleRecord = () => {
    // Handle audio recording
    console.log('Recording audio...')
  }

  const categories = ['All', ...Array.from(new Set(pronunciationGuides.map(g => g.category)))]

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Volume2 className="text-amazigh-primary" size={48} />
            <span>Pronunciation Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how to pronounce Tamazight words correctly with our interactive guide
          </p>
        </div>

        {/* Pronunciation Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pronunciationGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block bg-amazigh-secondary text-white text-xs px-2 py-1 rounded mb-2">
                    {guide.category}
                  </span>
                  <h3 className="text-4xl font-bold text-amazigh-primary mb-2">
                    {guide.tifinagh}
                  </h3>
                  <p className="text-xl font-semibold text-amazigh-dark mb-1">
                    {guide.word}
                  </p>
                  <p className="text-lg text-gray-600 italic mb-2">
                    [{guide.pronunciation}]
                  </p>
                </div>
                <AudioPlayer
                  word={guide.word}
                  pronunciation={guide.pronunciation}
                  onPlay={() => handlePlay(index)}
                  onRecord={handleRecord}
                />
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Example:</span> {guide.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Pronunciation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <h3 className="font-semibold mb-2 text-white">Vowel Sounds</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>A</strong> - pronounced like "ah" in "father"</li>
                <li>• <strong>I</strong> - pronounced like "ee" in "see"</li>
                <li>• <strong>U</strong> - pronounced like "oo" in "moon"</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">Consonant Sounds</h3>
              <ul className="space-y-2 text-sm">
                <li>• Most consonants are similar to English</li>
                <li>• <strong>ⵕ</strong> (R) - a rolled "r" sound</li>
                <li>• <strong>ⵚ</strong> (S) - an emphatic "s" sound</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

