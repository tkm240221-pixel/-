"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-violet-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">서버 오류가 발생했습니다</h2>
        <p className="text-gray-600 mb-8">일시적인 오류입니다. 잠시 후 다시 시도해주세요.</p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  )
}
