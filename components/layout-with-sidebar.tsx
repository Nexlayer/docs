"use client"

import type React from "react"
import Sidebar from "@/components/sidebar"

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      
      {/* Content with left margin to account for fixed sidebar */}
      <div className="ml-14 sm:ml-56 md:ml-64 overflow-auto pt-16">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
