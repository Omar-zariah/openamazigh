interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  label?: string
}

export default function ProgressRing({ progress, size = 120, strokeWidth = 8, label }: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-amazigh-primary transition-all duration-500"
        />
      </svg>
      {label && (
        <div className="mt-4 text-center">
          <div className="text-2xl font-bold text-amazigh-primary">{Math.round(progress)}%</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      )}
    </div>
  )
}

