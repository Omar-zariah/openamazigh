'use client'

import { useState, useEffect } from 'react'
import { Bookmark, Plus, Trash2, Search, Heart } from 'lucide-react'
import { storage, STORAGE_KEYS } from '@/lib/storage'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

interface WordCollection {
  id: string
  name: string
  words: string[]
  createdAt: string
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<WordCollection[]>([])
  const [newCollectionName, setNewCollectionName] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    const saved = storage.get<WordCollection[]>(STORAGE_KEYS.USER_PROGRESS + '_collections', [])
    setCollections(saved)
  }, [])

  const createCollection = () => {
    if (!newCollectionName.trim()) return

    const newCollection: WordCollection = {
      id: Math.random().toString(36).substring(7),
      name: newCollectionName,
      words: [],
      createdAt: new Date().toISOString(),
    }

    const updated = [...collections, newCollection]
    setCollections(updated)
    storage.set(STORAGE_KEYS.USER_PROGRESS + '_collections', updated)
    setNewCollectionName('')
    setShowCreateForm(false)
  }

  const deleteCollection = (id: string) => {
    if (confirm('Are you sure you want to delete this collection?')) {
      const updated = collections.filter(c => c.id !== id)
      setCollections(updated)
      storage.set(STORAGE_KEYS.USER_PROGRESS + '_collections', updated)
    }
  }

  const favorites = storage.get<number[]>(STORAGE_KEYS.USER_PROGRESS + '_favorites', [])

  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Collections', href: '/collections' }]} />

        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark flex items-center space-x-3">
              <Bookmark className="text-amazigh-primary" size={48} />
              <span>Word Collections</span>
            </h1>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>New Collection</span>
            </button>
          </div>
          <p className="text-xl text-gray-600">
            Organize your favorite words into custom collections
          </p>
        </div>

        {/* Create Collection Form */}
        {showCreateForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
            <h2 className="text-xl font-bold text-amazigh-dark mb-4">Create New Collection</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                placeholder="Collection name..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && createCollection()}
              />
              <button
                onClick={createCollection}
                className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowCreateForm(false)
                  setNewCollectionName('')
                }}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Favorites Collection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Heart className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold text-amazigh-dark">Favorites</h2>
            </div>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              {favorites.length} words
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Your favorite words from the dictionary
          </p>
          <Link
            href="/dictionary"
            className="text-amazigh-primary hover:underline font-semibold"
          >
            View Favorites →
          </Link>
        </div>

        {/* Custom Collections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-6">Your Collections</h2>
          {collections.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <Bookmark className="text-gray-400 mx-auto mb-4" size={48} />
              <p className="text-gray-600 mb-4">You haven't created any collections yet.</p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-amazigh-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors"
              >
                Create Your First Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amazigh-dark mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {collection.words.length} word{collection.words.length !== 1 ? 's' : ''}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Created {new Date(collection.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteCollection(collection.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete collection"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <button className="w-full bg-amazigh-light text-amazigh-dark py-2 rounded-lg font-semibold hover:bg-amazigh-secondary hover:text-white transition-colors">
                    View Collection
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Collection Tips</h2>
          <ul className="space-y-2 text-gray-200">
            <li>• Create collections for specific topics (e.g., "Greetings", "Food", "Family")</li>
            <li>• Organize words by difficulty level or learning goals</li>
            <li>• Use collections to focus your study sessions</li>
            <li>• Share your collections with other learners</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

