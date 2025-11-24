import { LucideIcon } from 'lucide-react'

interface AchievementBadgeProps {
  icon: LucideIcon
  title: string
  description: string
  unlocked: boolean
  progress?: number
  color?: string
}

export default function AchievementBadge({
  icon: Icon,
  title,
  description,
  unlocked,
  progress = 0,
  color = 'amazigh-primary',
}: AchievementBadgeProps) {
  return (
    <div
      className={`relative p-6 rounded-lg border-2 transition-all duration-300 ${
        unlocked
          ? `border-${color} bg-${color}/10 shadow-lg`
          : 'border-gray-200 bg-gray-50 opacity-60'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`p-4 rounded-lg ${
            unlocked ? `bg-${color} text-white` : 'bg-gray-300 text-gray-500'
          }`}
        >
          <Icon size={32} />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg font-bold mb-1 ${
              unlocked ? 'text-amazigh-dark' : 'text-gray-500'
            }`}
          >
            {title}
          </h3>
          <p className={`text-sm ${unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
            {description}
          </p>
          {!unlocked && progress > 0 && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amazigh-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{progress}% complete</p>
            </div>
          )}
        </div>
        {unlocked && (
          <div className="absolute top-2 right-2">
            <span className="text-2xl">🏆</span>
          </div>
        )}
      </div>
    </div>
  )
}

