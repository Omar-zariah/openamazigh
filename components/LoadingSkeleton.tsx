interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'circle' | 'table'
  count?: number
  className?: string
}

export default function LoadingSkeleton({ type = 'card', count = 1, className = '' }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        )
      case 'text':
        return (
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        )
      case 'circle':
        return (
          <div className="animate-pulse">
            <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
          </div>
        )
      case 'table':
        return (
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  )
}

