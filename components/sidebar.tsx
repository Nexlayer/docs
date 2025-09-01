"use client"

import React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { 
  Megaphone, 
  Rocket, 
  BookOpen, 
  HelpCircle, 
  FileText,
  Code,
  Settings,
  Database,
  Bot,
  Play
} from "lucide-react"

interface SidebarItem {
  name: string
  path: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
  children?: SidebarItem[]
}



export default function Sidebar() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<string>("")

  useEffect(() => {
    // Determine current page based on pathname
    if (pathname.includes("/api-reference")) {
      setCurrentPage("api")
    } else if (pathname.includes("/learn") || pathname.includes("/launchfile")) {
      setCurrentPage("learn")
    } else if (pathname.includes("/faq")) {
      setCurrentPage("home")
    } else {
      setCurrentPage("home")
    }
  }, [pathname])

  // Static items that never change
  const staticItems: SidebarItem[] = [
    {
      name: "Announcements",
      path: "https://nexlayer.com/blog",
      icon: Megaphone,
      external: true
    },
    {
      name: "Feature requests",
      path: "https://discord.gg/EBW93bQZ",
      icon: Rocket,
      external: true
    }
  ]

  // Dynamic items that change based on current page
  const getDynamicItems = (): SidebarItem[] => {
    switch (currentPage) {
      case "api":
        return [
          {
            name: "Welcome",
            path: "/api-reference",
            icon: BookOpen
          },
          {
            name: "Schema",
            path: "/api-reference/schema",
            icon: Database
          }
        ]
      case "learn":
        return [
          {
            name: "Welcome",
            path: "/learn/welcome",
            icon: BookOpen
          },

          {
            name: "MCP Quickstart",
            path: "/learn/mcp-quickstart",
            icon: Bot
          },

          {
            name: "YAML Guide",
            path: "/launchfile",
            icon: Code
          },
          {
            name: "Templates",
            path: "/learn/templates",
            icon: FileText,
            children: [
                        {
            name: "Hello World NextJS",
            path: "/learn/templates/nextjs-hello-world",
            icon: Code
          },

              {
                name: "Custom Fullstack",
                path: "/learn/templates/custom-fullstack",
                icon: Settings
              },
              {
                name: "PERN App",
                path: "/learn/templates/pern-app",
                icon: Code
              }
            ]
          },


        ]
      default: // home
        return [
          {
            name: "Getting started",
            path: "/learn/mcp-quickstart",
            icon: Play
          },
          {
            name: "FAQ",
            path: "/faq",
            icon: HelpCircle,
            external: false
          }
        ]
    }
  }

  const dynamicItems = getDynamicItems()

  const renderSidebarItem = (item: SidebarItem, isActive: boolean = false, level: number = 0) => {
    const IconComponent = item.icon
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = hasChildren && (isActive || pathname.startsWith(item.path))
    
    return (
      <div key={item.name}>
        <Link
          href={item.path}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
            isActive
              ? "text-[#22B4C8]"
              : "text-gray-300 hover:text-[#22B4C8]"
          } ${level > 0 ? "pl-6" : ""}`}
        >
          <IconComponent className={`h-4 w-4 ${isActive ? "text-[#22B4C8]" : "text-gray-400"}`} />
          <span>{item.name}</span>
        </Link>
        
        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div className="ml-4 border-l border-[#333333]">
            {item.children!.map((child) => {
              const isChildActive = pathname === child.path
              return renderSidebarItem(child, isChildActive, level + 1)
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-64 bg-[#191919] h-screen sticky top-0 overflow-y-auto border-r border-[#333333]" style={{
      backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexlayer-background-grid-K7zVWFIHgHj17Jb8BwSJP3hjcgqRrz.svg")'
    }}>
      <div className="p-4">
        {/* Static Section */}
        <div className="mb-6">
          {staticItems.map((item) => renderSidebarItem(item))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] mb-6"></div>

        {/* Dynamic Section */}
        <div>
          {dynamicItems.map((item) => {
            const isActive = pathname === item.path
            return renderSidebarItem(item, isActive)
          })}
        </div>
      </div>
    </div>
  )
}
