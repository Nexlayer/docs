import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919] text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-6">Could not find the requested resource.</p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#22B4C8] text-black rounded-md hover:bg-[#1DA3B6] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
