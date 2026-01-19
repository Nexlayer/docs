"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { usePathname } from "next/navigation"

export default function LayoutWithNavbar({
  children,
}: {
  children: React.ReactNode
}) {
  // We use usePathname to track active routes for navbar highlighting
  const pathname = usePathname()

  // Determine if we should show the sidebar
  const shouldShowSidebar = pathname.includes("/learn") || 
                           pathname.includes("/deploy") || 
                           pathname.includes("/playground") ||
                           pathname.includes("/launchfile") ||
                           pathname.includes("/faq") ||
                           pathname === "/"

  return (
    <>
      <Navbar />
      {shouldShowSidebar ? (
        <div className="min-h-screen grid-background">
          <Sidebar />
          {/* Content with left margin to account for fixed sidebar */}
          <div className="ml-14 sm:ml-56 md:ml-64 overflow-auto">
            <main className="flex-grow">{children}</main>
          </div>
        </div>
      ) : (
        <main className="flex-grow grid-background">{children}</main>
      )}
      {/* Footer is now added in the root layout */}
    </>
  )
}
