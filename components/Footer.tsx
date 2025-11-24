import Link from 'next/link'
import { Github, Heart, Mail, Twitter, Facebook, Youtube, BookOpen, GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-amazigh-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span className="text-amazigh-accent">ⵣ</span>
              <span>OpenAmazigh</span>
            </h3>
            <p className="text-gray-300 mb-4">
              An open source platform dedicated to preserving and promoting 
              Amazigh and Tamazight language, culture, and heritage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername/openamazigh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amazigh-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amazigh-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amazigh-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amazigh-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/learn" className="hover:text-amazigh-secondary transition-colors flex items-center space-x-2">
                  <GraduationCap size={16} />
                  <span>Lessons</span>
                </Link>
              </li>
              <li>
                <Link href="/learn/quiz" className="hover:text-amazigh-secondary transition-colors">
                  Quiz & Practice
                </Link>
              </li>
              <li>
                <Link href="/learn/flashcards" className="hover:text-amazigh-secondary transition-colors">
                  Flashcards
                </Link>
              </li>
              <li>
                <Link href="/learn/typing" className="hover:text-amazigh-secondary transition-colors">
                  Typing Practice
                </Link>
              </li>
              <li>
                <Link href="/learn/alphabet" className="hover:text-amazigh-secondary transition-colors">
                  Alphabet
                </Link>
              </li>
              <li>
                <Link href="/learn/compare" className="hover:text-amazigh-secondary transition-colors">
                  Language Comparison
                </Link>
              </li>
              <li>
                <Link href="/pronunciation" className="hover:text-amazigh-secondary transition-colors">
                  Pronunciation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/culture" className="hover:text-amazigh-secondary transition-colors">
                  Culture & Heritage
                </Link>
              </li>
              <li>
                <Link href="/settings" className="hover:text-amazigh-secondary transition-colors">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amazigh-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/openamazigh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amazigh-secondary transition-colors"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href="/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amazigh-secondary transition-colors"
                >
                  How to Contribute
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:contact@openamazigh.org"
                  className="flex items-center space-x-2 hover:text-amazigh-secondary transition-colors"
                >
                  <Mail size={18} />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/openamazigh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amazigh-secondary transition-colors"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/openamazigh/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amazigh-secondary transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <Link href="/help" className="hover:text-amazigh-secondary transition-colors">
                  Help & Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amazigh-secondary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/export" className="hover:text-amazigh-secondary transition-colors">
                  Export Progress
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="hover:text-amazigh-secondary transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-amazigh-secondary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-amazigh-secondary transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>for the Amazigh community</span>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} OpenAmazigh. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}

