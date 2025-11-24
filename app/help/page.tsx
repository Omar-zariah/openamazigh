import { HelpCircle, Keyboard, Search, BookOpen, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <HelpCircle className="text-amazigh-primary" size={48} />
            <span>Help & Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about using OpenAmazigh
          </p>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Keyboard className="text-amazigh-primary" size={32} />
            <h2 className="text-2xl font-bold text-amazigh-dark">Keyboard Shortcuts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-amazigh-light rounded-lg">
              <span className="text-gray-700">Open Search</span>
              <kbd className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-mono">
                Ctrl + K
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-amazigh-light rounded-lg">
              <span className="text-gray-700">Go to Home</span>
              <kbd className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-mono">
                1
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-amazigh-light rounded-lg">
              <span className="text-gray-700">Go to Dictionary</span>
              <kbd className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-mono">
                2
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-amazigh-light rounded-lg">
              <span className="text-gray-700">Go to Learn</span>
              <kbd className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-mono">
                3
              </kbd>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Getting Started</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-amazigh-dark mb-3 flex items-center space-x-2">
                <BookOpen className="text-amazigh-primary" size={24} />
                <span>1. Explore the Dictionary</span>
              </h3>
              <p className="text-gray-700 mb-2">
                Start by browsing our comprehensive dictionary. Search for words, learn pronunciations, 
                and see examples in context.
              </p>
              <Link href="/dictionary" className="text-amazigh-primary hover:underline">
                Visit Dictionary →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amazigh-dark mb-3 flex items-center space-x-2">
                <GraduationCap className="text-amazigh-primary" size={24} />
                <span>2. Start Learning</span>
              </h3>
              <p className="text-gray-700 mb-2">
                Follow our structured lessons to learn Tamazight step by step. Each lesson includes 
                exercises and practice materials.
              </p>
              <Link href="/learn" className="text-amazigh-primary hover:underline">
                Start Learning →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amazigh-dark mb-3 flex items-center space-x-2">
                <Search className="text-amazigh-primary" size={24} />
                <span>3. Use Search</span>
              </h3>
              <p className="text-gray-700 mb-2">
                Use the search bar (Ctrl+K) to quickly find words, lessons, or any content on the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Features Guide */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Features Guide</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-amazigh-primary pl-4">
              <h3 className="font-semibold text-amazigh-dark mb-2">Progress Tracking</h3>
              <p className="text-gray-700">
                Your progress is automatically saved. Completed lessons, favorite words, and quiz scores 
                are stored locally in your browser.
              </p>
            </div>
            <div className="border-l-4 border-amazigh-secondary pl-4">
              <h3 className="font-semibold text-amazigh-dark mb-2">Interactive Learning</h3>
              <p className="text-gray-700">
                Use flashcards, quizzes, and typing practice to reinforce your learning. All tools are 
                designed to make learning engaging and effective.
              </p>
            </div>
            <div className="border-l-4 border-amazigh-accent pl-4">
              <h3 className="font-semibold text-amazigh-dark mb-2">Cultural Content</h3>
              <p className="text-gray-700">
                Explore Amazigh culture, history, traditions, and heritage. Learn about the Tifinagh 
                script and its significance.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2">Is OpenAmazigh free?</h3>
              <p className="text-gray-700">
                Yes! OpenAmazigh is completely free and open source. All resources are available 
                to everyone at no cost.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2">How do I save my progress?</h3>
              <p className="text-gray-700">
                Your progress is automatically saved in your browser's local storage. No account 
                needed! Just make sure cookies and local storage are enabled.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2">Can I contribute content?</h3>
              <p className="text-gray-700">
                Absolutely! OpenAmazigh is open source and community-driven. Visit our GitHub 
                repository to contribute translations, lessons, or improvements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amazigh-dark mb-2">Which Tamazight dialect is taught?</h3>
              <p className="text-gray-700">
                The platform focuses on Standard Tamazight, but includes variations from different 
                regions. We're working to expand dialect coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

