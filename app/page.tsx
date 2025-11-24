import Link from 'next/link'
import { BookOpen, GraduationCap, Globe, Users, Search, Heart, Star, Quote } from 'lucide-react'
import WordOfTheDay from '@/components/WordOfTheDay'
import AnimatedCounter from '@/components/AnimatedCounter'
import QuickStats from '@/components/QuickStats'
import StreakTracker from '@/components/StreakTracker'

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Dictionary',
      description: 'Comprehensive Tamazight dictionary with translations, pronunciations, and examples',
      href: '/dictionary',
      color: 'bg-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'Learn Tamazight',
      description: 'Interactive lessons, exercises, and resources to learn Tamazight at your own pace',
      href: '/learn',
      color: 'bg-green-500',
    },
    {
      icon: Globe,
      title: 'Culture & Heritage',
      description: 'Explore Amazigh history, traditions, art, music, and cultural practices',
      href: '/culture',
      color: 'bg-purple-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other learners and speakers of Tamazight',
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amazigh-primary to-amazigh-dark text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-pulse">ⵣ</div>
          <div className="absolute top-40 right-20 text-7xl animate-pulse" style={{ animationDelay: '1s' }}>ⵣ</div>
          <div className="absolute bottom-20 left-1/4 text-6xl animate-pulse" style={{ animationDelay: '2s' }}>ⵣ</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-amazigh-accent inline-block animate-bounce">ⵣ</span>{' '}
              Welcome to OpenAmazigh
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Preserving and promoting Amazigh and Tamazight language, culture, and heritage
              through open source collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dictionary"
                className="bg-amazigh-accent text-amazigh-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
              >
                <Search size={20} />
                <span>Explore Dictionary</span>
              </Link>
              <Link
                href="/learn"
                className="bg-white text-amazigh-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
              >
                <GraduationCap size={20} />
                <span>Start Learning</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amazigh-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amazigh-dark">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.href || '#'}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-amazigh-dark">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Word of the Day Section */}
      <section className="py-20 bg-amazigh-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <WordOfTheDay />
            </div>
            <div className="space-y-6">
              <QuickStats />
              <StreakTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <AnimatedCounter 
                value={25} 
                suffix="+"
                className="text-5xl font-bold text-amazigh-primary mb-2"
              />
              <div className="text-gray-600 text-lg">Dictionary Entries</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AnimatedCounter 
                value={6} 
                suffix="+"
                className="text-5xl font-bold text-amazigh-primary mb-2"
              />
              <div className="text-gray-600 text-lg">Learning Lessons</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <AnimatedCounter 
                value={100} 
                suffix="%"
                className="text-5xl font-bold text-amazigh-primary mb-2"
              />
              <div className="text-gray-600 text-lg">Open Source & Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amazigh-dark">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aicha T.',
                role: 'Language Learner',
                content: 'This platform has been incredible for learning Tamazight. The dictionary and lessons are so well organized!',
                rating: 5,
              },
              {
                name: 'Mohamed B.',
                role: 'Cultural Enthusiast',
                content: 'Finally, a place where I can explore my Amazigh heritage and learn about our beautiful culture.',
                rating: 5,
              },
              {
                name: 'Sarah L.',
                role: 'Educator',
                content: 'As a teacher, I love using OpenAmazigh to help my students connect with their roots. Amazing resource!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-amazigh-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="text-amazigh-primary mb-4" size={32} />
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-amazigh-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-amazigh-accent fill-amazigh-accent" size={16} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amazigh-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us preserve and promote Amazigh culture. Contribute translations, 
            lessons, or cultural content. Every contribution matters!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/yourusername/openamazigh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amazigh-dark px-8 py-3 rounded-lg font-semibold hover:bg-amazigh-primary transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <Heart size={20} />
              <span>Contribute on GitHub</span>
            </a>
            <Link
              href="/about"
              className="bg-white text-amazigh-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

