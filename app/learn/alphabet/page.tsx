'use client'

import { useState } from 'react'
import { BookOpen, Volume2 } from 'lucide-react'

interface Letter {
  tifinagh: string
  latin: string
  name: string
  pronunciation: string
  example?: string
}

const alphabet: Letter[] = [
  { tifinagh: 'ⴰ', latin: 'A', name: 'Ya', pronunciation: 'a', example: 'ⴰⵣⵓⵍ (azul)' },
  { tifinagh: 'ⴱ', latin: 'B', name: 'Yab', pronunciation: 'b', example: 'ⴱⴰⴱⴰ (baba)' },
  { tifinagh: 'ⴳ', latin: 'G', name: 'Yag', pronunciation: 'g', example: 'ⴰⴳⵍⵎⵎⴰⵏ (agurram)' },
  { tifinagh: 'ⴷ', latin: 'D', name: 'Yad', pronunciation: 'd', example: 'ⴰⵎⴰⵣⵉⵖ (amazigh)' },
  { tifinagh: 'ⵄ', latin: 'E', name: 'Ya', pronunciation: 'e' },
  { tifinagh: 'ⴼ', latin: 'F', name: 'Yaf', pronunciation: 'f' },
  { tifinagh: 'ⴽ', latin: 'K', name: 'Yak', pronunciation: 'k', example: 'ⴽⵕⴰⴹ (krad)' },
  { tifinagh: 'ⵃ', latin: 'H', name: 'Yah', pronunciation: 'h' },
  { tifinagh: 'ⵀ', latin: 'H', name: 'Yah', pronunciation: 'h' },
  { tifinagh: 'ⵉ', latin: 'I', name: 'Yi', pronunciation: 'i', example: 'ⵉⵎⵣⵉⵏ (amane)' },
  { tifinagh: 'ⵊ', latin: 'J', name: 'Yaj', pronunciation: 'j' },
  { tifinagh: 'ⵍ', latin: 'L', name: 'Yal', pronunciation: 'l', example: 'ⵍⵎⵣⵉⵏ (tigemmi)' },
  { tifinagh: 'ⵎ', latin: 'M', name: 'Yam', pronunciation: 'm', example: 'ⵎⵙⵙⵏⵉⵙ (tanemmirt)' },
  { tifinagh: 'ⵏ', latin: 'N', name: 'Yan', pronunciation: 'n', example: 'ⵏⴽⴽⵉⵏⵉ (nkkini)' },
  { tifinagh: 'ⵓ', latin: 'U', name: 'Yaw', pronunciation: 'u', example: 'ⵓⵙⵙⵉⵏ (tifawt)' },
  { tifinagh: 'ⵔ', latin: 'R', name: 'Yar', pronunciation: 'r' },
  { tifinagh: 'ⵕ', latin: 'R', name: 'Yar', pronunciation: 'r' },
  { tifinagh: 'ⵙ', latin: 'S', name: 'Yas', pronunciation: 's', example: 'ⵙⵉⵏ (sin)' },
  { tifinagh: 'ⵚ', latin: 'S', name: 'Yas', pronunciation: 's' },
  { tifinagh: 'ⵛ', latin: 'C', name: 'Yac', pronunciation: 'c' },
  { tifinagh: 'ⵜ', latin: 'C', name: 'Yac', pronunciation: 'c' },
  { tifinagh: 'ⵜ', latin: 'T', name: 'Yat', pronunciation: 't', example: 'ⵜⴰⵎⵣⵉⵖⵜ (tamazight)' },
  { tifinagh: 'ⵟ', latin: 'T', name: 'Yat', pronunciation: 't' },
  { tifinagh: 'ⵡ', latin: 'W', name: 'Yaw', pronunciation: 'w' },
  { tifinagh: 'ⵢ', latin: 'Y', name: 'Yay', pronunciation: 'y', example: 'ⵢⴰⵏ (yan)' },
  { tifinagh: 'ⵣ', latin: 'Z', name: 'Yaz', pronunciation: 'z', example: 'ⵣ (yaz - free person)' },
  { tifinagh: 'ⵥ', latin: 'Z', name: 'Yaz', pronunciation: 'z' },
]

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAlphabet = alphabet.filter(letter =>
    letter.tifinagh.toLowerCase().includes(searchTerm.toLowerCase()) ||
    letter.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    letter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    letter.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <BookOpen className="text-amazigh-primary" size={48} />
            <span>Tifinagh Alphabet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn the Tifinagh script, one of the oldest writing systems still in use today
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search letters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
          />
        </div>

        {/* Alphabet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {filteredAlphabet.map((letter, index) => (
            <button
              key={index}
              onClick={() => setSelectedLetter(letter)}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
            >
              <div className="text-5xl font-bold text-amazigh-primary mb-2 group-hover:scale-110 transition-transform">
                {letter.tifinagh}
              </div>
              <div className="text-lg font-semibold text-amazigh-dark mb-1">{letter.latin}</div>
              <div className="text-sm text-gray-600">{letter.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Letter Detail */}
        {selectedLetter && (
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-8xl font-bold text-amazigh-primary mb-4">
                  {selectedLetter.tifinagh}
                </div>
                <h2 className="text-3xl font-bold text-amazigh-dark mb-2">
                  {selectedLetter.name} ({selectedLetter.latin})
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  Pronunciation: <span className="font-semibold">[{selectedLetter.pronunciation}]</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedLetter(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {selectedLetter.example && (
              <div className="bg-amazigh-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amazigh-dark mb-3">Example:</h3>
                <div className="text-3xl font-bold text-amazigh-primary mb-2">
                  {selectedLetter.example.split(' ')[0]}
                </div>
                <p className="text-gray-700">
                  {selectedLetter.example.split(' ').slice(1).join(' ')}
                </p>
              </div>
            )}

            <div className="mt-6 flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-amazigh-primary text-white px-6 py-3 rounded-lg hover:bg-amazigh-dark transition-colors">
                <Volume2 size={20} />
                <span>Listen to Pronunciation</span>
              </button>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-amazigh-primary text-white rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">About Tifinagh</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) is the traditional script used to write Tamazight and other Berber languages.
              It is one of the oldest scripts still in use today, with origins dating back thousands of years.
            </p>
            <p>
              The modern Tifinagh alphabet has been standardized and is now used across North Africa to write
              various Tamazight dialects. Learning Tifinagh is an important part of preserving Amazigh identity.
            </p>
            <p>
              The script is written from left to right and includes both consonants and vowels. Each letter
              represents a specific sound in the Tamazight language.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

