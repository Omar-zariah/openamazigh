import { Download, FileText, BookOpen, Printer, Image } from 'lucide-react'
import Link from 'next/link'

interface Resource {
  title: string
  description: string
  type: 'PDF' | 'Image' | 'Text'
  icon: any
  download?: boolean
}

const resources: Resource[] = [
  {
    title: 'Tifinagh Alphabet Chart',
    description: 'Printable chart with all Tifinagh letters, pronunciations, and examples',
    type: 'PDF',
    icon: FileText,
    download: true,
  },
  {
    title: 'Common Phrases Cheat Sheet',
    description: 'Quick reference guide for common Tamazight phrases and greetings',
    type: 'PDF',
    icon: BookOpen,
    download: true,
  },
  {
    title: 'Numbers 1-100 Reference',
    description: 'Complete guide to numbers in Tamazight with Tifinagh script',
    type: 'PDF',
    icon: FileText,
    download: true,
  },
  {
    title: 'Amazigh Flag Printable',
    description: 'High-quality printable version of the Amazigh flag',
    type: 'Image',
    icon: Image,
    download: true,
  },
  {
    title: 'Vocabulary Flashcards (Printable)',
    description: 'Print and cut flashcards for offline vocabulary practice',
    type: 'PDF',
    icon: FileText,
    download: true,
  },
  {
    title: 'Grammar Reference Guide',
    description: 'Comprehensive grammar rules and examples for Tamazight',
    type: 'PDF',
    icon: BookOpen,
    download: true,
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Download className="text-amazigh-primary" size={48} />
            <span>Printable Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download and print learning materials for offline study
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-amazigh-primary w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-xs bg-amazigh-light text-amazigh-dark px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-amazigh-dark mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                {resource.download && (
                  <button className="w-full bg-amazigh-primary text-white py-2 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center justify-center space-x-2">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Printing Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-4">Printing Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2 flex items-center space-x-2">
                <Printer size={20} className="text-amazigh-primary" />
                <span>Best Practices</span>
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Use high-quality paper for better readability</li>
                <li>• Print in color to see Tifinagh script clearly</li>
                <li>• Consider laminating flashcards for durability</li>
                <li>• Use A4 or Letter size paper for best results</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2">Study Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Keep printed resources in a dedicated folder</li>
                <li>• Review printed materials regularly</li>
                <li>• Use flashcards for spaced repetition</li>
                <li>• Combine digital and printed resources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-amazigh-primary text-white rounded-lg p-6 text-center">
          <p className="text-gray-200">
            <strong>Note:</strong> These resources are provided for educational purposes. 
            Feel free to share and use them for learning Tamazight!
          </p>
        </div>
      </div>
    </div>
  )
}

