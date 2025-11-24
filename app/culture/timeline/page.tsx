'use client'

import { Calendar, MapPin, Book, Users } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: any
  color: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 'Ancient Times',
    title: 'Origins of Amazigh People',
    description: 'The Amazigh people have inhabited North Africa for thousands of years, with evidence of their presence dating back to prehistoric times. They are considered the indigenous people of the region.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    year: '3000 BCE',
    title: 'Development of Tifinagh Script',
    description: 'The Tifinagh script, one of the oldest writing systems still in use, began to develop. This script would become a symbol of Amazigh identity and culture.',
    icon: Book,
    color: 'bg-green-500',
  },
  {
    year: '7th Century CE',
    title: 'Arab Conquest',
    description: 'The Arab conquest of North Africa brought significant changes to the region. Many Amazigh people adopted Islam while maintaining their language and cultural identity.',
    icon: MapPin,
    color: 'bg-purple-500',
  },
  {
    year: '20th Century',
    title: 'Amazigh Cultural Revival',
    description: 'The 20th century saw a renewed interest in Amazigh culture and language. Activists worked to preserve and promote Tamazight language and Tifinagh script.',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    year: '2001',
    title: 'Royal Institute of Amazigh Culture',
    description: 'Morocco established the Royal Institute of Amazigh Culture (IRCAM), officially recognizing Tamazight and promoting its use in education and media.',
    icon: Book,
    color: 'bg-red-500',
  },
  {
    year: '2011',
    title: 'Constitutional Recognition',
    description: 'Tamazight was recognized as an official language in Morocco\'s constitution, marking a significant milestone for Amazigh rights and cultural preservation.',
    icon: Calendar,
    color: 'bg-teal-500',
  },
  {
    year: 'Present',
    title: 'Digital Age & Preservation',
    description: 'In the digital age, efforts continue to preserve and promote Amazigh culture through technology, education, and open source initiatives like OpenAmazigh.',
    icon: Users,
    color: 'bg-amazigh-primary',
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4 flex items-center justify-center space-x-2">
            <Calendar className="text-amazigh-primary" size={48} />
            <span>Amazigh History Timeline</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the rich history and milestones of the Amazigh people
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-amazigh-primary transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`${event.color} w-6 h-6 rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                      <Icon className="text-white" size={12} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ml-16 md:ml-0`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`${event.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <span className="text-sm font-semibold text-gray-500">{event.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-amazigh-dark mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-amazigh-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Preserving History</h2>
          <p className="text-gray-200 leading-relaxed">
            The Amazigh people have a rich and complex history spanning thousands of years. 
            Despite facing challenges and periods of marginalization, Amazigh culture, language, 
            and identity have persisted and continue to thrive today. This timeline represents 
            just a few key moments in the long and ongoing story of the Amazigh people.
          </p>
        </div>
      </div>
    </div>
  )
}

