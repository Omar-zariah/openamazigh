import { Music, Image, Book, Calendar, MapPin, Users, Sparkles, Clock } from 'lucide-react'
import Link from 'next/link'

interface CulturalItem {
  id: number
  title: string
  description: string
  category: 'History' | 'Music' | 'Art' | 'Traditions' | 'Festivals'
  icon: any
  color: string
  href?: string
}

const culturalItems: CulturalItem[] = [
  {
    id: 1,
    title: 'Amazigh History',
    description: 'Explore the rich history of the Amazigh people, from ancient times to the present day',
    category: 'History',
    icon: Book,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Traditional Music',
    description: 'Discover Amazigh music, instruments, and traditional songs that have been passed down through generations',
    category: 'Music',
    icon: Music,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Amazigh Art & Crafts',
    description: 'Learn about traditional Amazigh art, pottery, weaving, and other crafts',
    category: 'Art',
    icon: Image,
    color: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Cultural Traditions',
    description: 'Understand Amazigh customs, ceremonies, and way of life',
    category: 'Traditions',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Festivals & Celebrations',
    description: 'Learn about important Amazigh festivals and cultural celebrations throughout the year',
    category: 'Festivals',
    icon: Calendar,
    color: 'bg-red-500',
  },
  {
    id: 6,
    title: 'Geographic Regions',
    description: 'Explore different Amazigh communities across North Africa and their unique characteristics',
    category: 'History',
    icon: MapPin,
    color: 'bg-teal-500',
  },
  {
    id: 7,
    title: 'Historical Timeline',
    description: 'Discover the rich history and key milestones of the Amazigh people throughout the ages',
    category: 'History',
    icon: Clock,
    color: 'bg-indigo-500',
    href: '/culture/timeline',
  },
]

export default function Culture() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4">
            Amazigh Culture & Heritage
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the rich cultural heritage, traditions, and history of the Amazigh people
          </p>
        </div>

        {/* Cultural Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {culturalItems.map((item, index) => {
            const Icon = item.icon
            const content = (
              <div
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>
                <span className="text-sm text-gray-500 mb-2 block">{item.category}</span>
                <h3 className="text-xl font-bold text-amazigh-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            )

            if (item.href) {
              return (
                <Link key={item.id} href={item.href}>
                  {content}
                </Link>
              )
            }

            return <div key={item.id}>{content}</div>
          })}
        </div>

        {/* Featured Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amazigh-dark mb-6">Featured: The Amazigh Flag</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">ⵣ</span>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Amazigh flag (ⴰⵏⴰⵢ ⴰⵎⴰⵣⵉⵖ) is a symbol of Amazigh identity and unity. 
                The flag features three horizontal bands:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-500 rounded mr-3 flex-shrink-0"></span>
                  <span><strong>Blue</strong> represents the Mediterranean Sea and the sky</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-yellow-500 rounded mr-3 flex-shrink-0"></span>
                  <span><strong>Yellow</strong> represents the desert and the land</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-red-500 rounded mr-3 flex-shrink-0"></span>
                  <span><strong>Red</strong> represents the blood of martyrs and freedom</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                The letter <strong>ⵣ</strong> (yaz) in the center represents the free person, 
                a core concept in Amazigh identity.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-amazigh-primary text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
            <p className="text-gray-200 leading-relaxed">
              The Amazigh people have inhabited North Africa for thousands of years, 
              with evidence of their presence dating back to prehistoric times. 
              The term "Berber" is actually an exonym; Amazigh people prefer to call 
              themselves "Imazighen" (free people).
            </p>
          </div>
          <div className="bg-amazigh-secondary text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Language Diversity</h3>
            <p className="text-gray-200 leading-relaxed">
              Tamazight is not a single language but a family of closely related 
              languages and dialects spoken across North Africa, including Tarifit, 
              Tamazight, Tashelhit, Kabyle, and others. Each region has its own 
              unique dialect while sharing common roots.
            </p>
          </div>
        </div>

        {/* Tifinagh Script Section */}
        <div className="bg-gradient-to-br from-amazigh-primary to-amazigh-dark text-white rounded-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="text-amazigh-accent" size={32} />
            <h2 className="text-3xl font-bold">Tifinagh Script</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) is the traditional script used to write Tamazight. 
                It is one of the oldest scripts still in use today, with origins dating 
                back thousands of years.
              </p>
              <p className="text-gray-200 leading-relaxed">
                The script has been modernized and standardized, and is now used across 
                North Africa to write various Tamazight dialects. Learning Tifinagh is 
                an important part of preserving Amazigh identity and culture.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sample Tifinagh Text</h3>
              <div className="text-4xl font-bold text-center mb-4">
                ⵉⵎⴰⵣⵉⵖⵏ ⵏⵏⵉⵏⵏⵉⵏ
              </div>
              <p className="text-center text-gray-200 italic">
                "Imazighen nnnin" - We are all Amazigh
              </p>
            </div>
          </div>
        </div>

        {/* Contribute Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-amazigh-dark mb-4">
            Share Your Culture
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This platform is community-driven. Share stories, traditions, music, 
            art, or any aspect of Amazigh culture to help preserve and celebrate 
            our heritage for future generations.
          </p>
          <a
            href="https://github.com/yourusername/openamazigh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amazigh-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amazigh-dark transition-colors inline-block"
          >
            Contribute Content
          </a>
        </div>
      </div>
    </div>
  )
}

