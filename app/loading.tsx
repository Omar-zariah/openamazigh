export default function Loading() {
  return (
    <div className="min-h-screen bg-amazigh-light flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-amazigh-primary border-t-transparent mb-4"></div>
        <p className="text-xl text-amazigh-dark font-semibold">Loading...</p>
      </div>
    </div>
  )
}

