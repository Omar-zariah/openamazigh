import { Heart, Code, Users, Globe, Github, Mail } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-amazigh-light py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-4">
              About OpenAmazigh
            </h1>
            <p className="text-xl text-gray-600">
              Preserving and promoting Amazigh culture through open source collaboration
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-amazigh-dark mb-4 flex items-center space-x-2">
              <Heart className="text-red-500 fill-red-500" size={32} />
              <span>Our Mission</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OpenAmazigh is an open source platform dedicated to preserving, promoting, 
              and celebrating Amazigh and Tamazight language, culture, and heritage. 
              We believe that language and culture are fundamental to identity and 
              should be accessible to everyone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to create a comprehensive, community-driven resource that 
              helps people learn Tamazight, explore Amazigh culture, and connect with 
              the global Amazigh community. We are committed to making all resources 
              free, open, and accessible to everyone.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Code className="text-amazigh-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-amazigh-dark mb-2">Open Source</h3>
              <p className="text-gray-600">
                All code and content are open source and freely available for 
                anyone to use, modify, and contribute to.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="text-amazigh-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-amazigh-dark mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Built by and for the Amazigh community. Everyone is welcome 
                to contribute translations, lessons, and cultural content.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Globe className="text-amazigh-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-amazigh-dark mb-2">Accessible</h3>
              <p className="text-gray-600">
                Free and accessible to everyone, regardless of location, 
                background, or technical expertise.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-amazigh-dark mb-6">What We Offer</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-amazigh-primary mr-3 font-bold">•</span>
                <span>
                  <strong>Comprehensive Dictionary:</strong> Searchable Tamazight dictionary 
                  with translations, pronunciations, and example sentences
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amazigh-primary mr-3 font-bold">•</span>
                <span>
                  <strong>Interactive Lessons:</strong> Structured learning paths for 
                  beginners to advanced learners
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amazigh-primary mr-3 font-bold">•</span>
                <span>
                  <strong>Cultural Resources:</strong> Explore Amazigh history, music, 
                  art, traditions, and festivals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amazigh-primary mr-3 font-bold">•</span>
                <span>
                  <strong>Community Platform:</strong> Connect with other learners and 
                  speakers of Tamazight
                </span>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="bg-amazigh-primary text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              OpenAmazigh is a community project, and we welcome contributions from 
              everyone! Whether you're a developer, linguist, educator, or simply 
              passionate about preserving Amazigh culture, there's a place for you here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://github.com/yourusername/openamazigh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amazigh-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Github size={20} />
                <span>Contribute on GitHub</span>
              </a>
              <a
                href="mailto:contact@openamazigh.org"
                className="bg-amazigh-accent text-amazigh-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Technology */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-amazigh-dark mb-4">Technology</h2>
            <p className="text-gray-700 mb-4">
              OpenAmazigh is built with modern web technologies:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <Code size={20} className="text-amazigh-primary" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code size={20} className="text-amazigh-primary" />
                <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code size={20} className="text-amazigh-primary" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code size={20} className="text-amazigh-primary" />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

