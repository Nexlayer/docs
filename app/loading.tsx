export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191919] text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22B4C8] mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  )
}
