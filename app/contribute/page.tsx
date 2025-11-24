'use client'

import { useState } from 'react'
import { Plus, BookOpen, Mic, Code, Image, FileText, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useToast } from '@/components/ToastContainer'

interface ContributionForm {
  type: 'dictionary' | 'lesson' | 'audio' | 'cultural' | 'other'
  title: string
  content: string
  email: string
  notes?: string
}

export default function ContributePage() {
  const [formData, setFormData] = useState<ContributionForm>({
    type: 'dictionary',
    title: '',
    content: '',
    email: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { showToast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    console.log('Contribution submitted:', formData)
    setSubmitted(true)
    showToast('Thank you for your contribution! We will review it soon.', 'success')
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        type: 'dictionary',
        title: '',
        content: '',
        email: '',
        notes: '',
      })
    }, 3000)
  }

  const contributionTypes = [
    {
      id: 'dictionary',
      icon: BookOpen,
      title: 'Dictionary Entry',
      description: 'Add new words, translations, or improve existing entries',
    },
    {
      id: 'lesson',
      icon: FileText,
      title: 'Learning Lesson',
      description: 'Create new lessons or improve existing ones',
    },
    {
      id: 'audio',
      icon: Mic,
      title: 'Audio Pronunciation',
      description: 'Record pronunciations for words or phrases',
    },
    {
      id: 'cultural',
      icon: Image,
      title: 'Cultural Content',
      description: 'Share stories, traditions, art, or historical information',
    },
    {
      id: 'other',
      icon: Code,
      title: 'Other Contribution',
      description: 'Suggest features, report bugs, or contribute code',
    },
  ]

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Contribute', href: '/contribute' }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Plus className="text-amazigh-primary" size={48} />
            <span>Contribute to OpenAmazigh</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us grow! Contribute content, audio, lessons, or code to make OpenAmazigh better for everyone.
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contributionTypes.map((type) => {
            const Icon = type.icon
            return (
              <div
                key={type.id}
                onClick={() => setFormData({ ...formData, type: type.id as any })}
                className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 card-hover ${
                  formData.type === type.id ? 'ring-2 ring-amazigh-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-amazigh-primary/10 p-3 rounded-lg">
                    <Icon className="text-amazigh-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-amazigh-dark">{type.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            )
          })}
        </div>

        {/* Contribution Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Submit Your Contribution</h2>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-amazigh-dark mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your contribution has been submitted. We'll review it and add it to the platform soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-amazigh-dark mb-2">
                  Contribution Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                >
                  {contributionTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-amazigh-dark mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter a title for your contribution"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amazigh-dark mb-2">
                  Content *
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Describe your contribution in detail..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amazigh-dark mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll use this to contact you about your contribution
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-amazigh-dark mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any additional information or context..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amazigh-primary text-white py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Submit Contribution
              </button>
            </form>
          )}
        </div>

        {/* How to Contribute */}
        <div className="mt-12 bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">How to Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Content Contributions</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Add new dictionary entries with Tifinagh script</li>
                <li>• Create or improve learning lessons</li>
                <li>• Share cultural stories and traditions</li>
                <li>• Record audio pronunciations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Technical Contributions</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Improve code and add features</li>
                <li>• Fix bugs and optimize performance</li>
                <li>• Create API endpoints</li>
                <li>• Write documentation</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <a
              href="https://github.com/yourusername/openamazigh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amazigh-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

