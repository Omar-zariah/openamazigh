'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen, GraduationCap, Globe, Info, BarChart3 } from 'lucide-react'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', icon: Globe },
    { href: '/dictionary', label: 'Dictionary', icon: BookOpen },
    { href: '/learn', label: 'Learn', icon: GraduationCap },
    { href: '/culture', label: 'Culture', icon: Globe },
    { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/contribute', label: 'Contribute', icon: Info },
    { href: '/settings', label: 'Settings', icon: Info },
    { href: '/about', label: 'About', icon: Info },
  ]

  return (
    <header className="bg-amazigh-primary text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-amazigh-secondary transition-colors">
            <span className="text-amazigh-accent">ⵣ</span>
            <span>OpenAmazigh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 hover:text-amazigh-secondary transition-colors"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <SearchBar />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 p-2 hover:bg-amazigh-dark rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}

