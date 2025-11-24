import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  color: string
  delay?: string
}

export default function FeatureCard({ icon: Icon, title, description, href, color, delay = '0s' }: FeatureCardProps) {
  const content = (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group card-hover animate-fade-in" style={{ animationDelay: delay }}>
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-amazigh-dark">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

