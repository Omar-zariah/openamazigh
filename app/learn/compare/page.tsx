'use client'

import { useState } from 'react'
import { Languages, ArrowRight } from 'lucide-react'

interface Comparison {
  english: string
  tamazight: string
  tifinagh: string
  pronunciation: string
  category: string
}

const comparisons: Comparison[] = [
  {
    english: 'Hello',
    tamazight: 'Azul',
    tifinagh: 'ⴰⵣⵓⵍ',
    pronunciation: 'ah-ZOOL',
    category: 'Greetings',
  },
  {
    english: 'Thank you',
    tamazight: 'Tanemmirt',
    tifinagh: 'ⵎⵙⵙⵏⵉⵙ',
    pronunciation: 'tah-NEM-meert',
    category: 'Greetings',
  },
  {
    english: 'Water',
    tamazight: 'Amane',
    tifinagh: 'ⵉⵎⵣⵉⵏ',
    pronunciation: 'ah-MAH-neh',
    category: 'Nature',
  },
  {
    english: 'Mother',
    tamazight: 'Yemma',
    tifinagh: 'ⵉⵎⵎⴰ',
    pronunciation: 'YEM-mah',
    category: 'Family',
  },
  {
    english: 'Father',
    tamazight: 'Baba',
    tifinagh: 'ⴱⴰⴱⴰ',
    pronunciation: 'BAH-bah',
    category: 'Family',
  },
  {
    english: 'House',
    tamazight: 'Tigemmi',
    tifinagh: 'ⵉⵎⵣⵉⵏ',
    pronunciation: 'tee-GEM-mee',
    category: 'Home',
  },
  {
    english: 'One',
    tamazight: 'Yan',
    tifinagh: 'ⵢⴰⵏ',
    pronunciation: 'YAHN',
    category: 'Numbers',
  },
  {
    english: 'Two',
    tamazight: 'Sin',
    tifinagh: 'ⵙⵉⵏ',
    pronunciation: 'SEEN',
    category: 'Numbers',
  },
]

export default function ComparePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...Array.from(new Set(comparisons.map(c => c.category)))]

  const filteredComparisons = selectedCategory === 'All'
    ? comparisons
    : comparisons.filter(c => c.category === selectedCategory)

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Languages className="text-amazigh-primary" size={48} />
            <span>Language Comparison</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare English words with their Tamazight equivalents in both Latin and Tifinagh scripts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-amazigh-primary text-white'
                  : 'bg-white text-amazigh-dark hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amazigh-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">English</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <ArrowRight size={20} className="inline mx-2" />
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Tamazight (Latin)</th>
                  <th className="px-6 py-4 text-left font-semibold">Tifinagh</th>
                  <th className="px-6 py-4 text-left font-semibold">Pronunciation</th>
                </tr>
              </thead>
              <tbody>
                {filteredComparisons.map((comparison, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-amazigh-light transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-amazigh-dark">
                      {comparison.english}
                    </td>
                    <td className="px-6 py-4 text-center text-amazigh-primary">
                      <ArrowRight size={20} />
                    </td>
                    <td className="px-6 py-4 text-amazigh-dark">
                      {comparison.tamazight}
                    </td>
                    <td className="px-6 py-4 text-2xl font-bold text-amazigh-primary">
                      {comparison.tifinagh}
                    </td>
                    <td className="px-6 py-4 text-gray-600 italic">
                      [{comparison.pronunciation}]
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Learning Tip */}
        <div className="mt-8 bg-amazigh-secondary text-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Learning Tip</h2>
          <p className="text-gray-200">
            Comparing words across languages helps you understand the structure and patterns of Tamazight. 
            Notice how some sounds are similar to English, while others are unique to Tamazight. 
            Practice saying each word out loud to improve your pronunciation!
          </p>
        </div>
      </div>
    </div>
  )
}

