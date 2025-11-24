import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  color?: string
  delay?: string
}

export default function StatsCard({ icon: Icon, value, label, color = 'text-amazigh-primary', delay = '0s' }: StatsCardProps) {
  return (
    <div className="animate-fade-in text-center" style={{ animationDelay: delay }}>
      <div className={`${color} mb-4 flex justify-center`}>
        <Icon size={48} />
      </div>
      <div className={`text-5xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  )
}

