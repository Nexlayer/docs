'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919] text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-300 mb-6">An error occurred while loading this page.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-[#22B4C8] text-black rounded-md hover:bg-[#1DA3B6] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
