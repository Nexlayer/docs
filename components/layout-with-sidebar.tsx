"use client"

import type React from "react"
import Sidebar from "@/components/sidebar"

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
