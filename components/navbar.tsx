"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Rocket } from "lucide-react"
import Image from "next/image"
import Logo from "@/components/assets/svgs/LogoIcon.svg"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Start", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Launchfile", path: "/launchfile" },
    { name: "API Reference", path: "/api-reference" },
  ]

  return (
    <nav className="border-b border-[#333333] bg-[#191919]/80 backdrop-blur-md sticky top-0 z-[60]" style={{
      backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexlayer-background-grid-K7zVWFIHgHj17Jb8BwSJP3hjcgqRrz.svg")'
    }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative size-7 mr-2 bg-transparent">
                  <Image
                    src={Logo}
                    alt="Nexlayer Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
                <span className="font-bold text-xl text-white">Docs</span>
                <div className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-[#22B4C8] bg-[#22B4C8]/10 text-[#22B4C8]">
                  <Rocket className="h-3 w-3 mr-1" />
                  Beta
                </div>
              </Link>
            </div>
            <div className="hidden ml-2 md:ml-6 sm:flex space-x-2 md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.path
                      ? "border-[#22B4C8] text-[#22B4C8]"
                      : "border-transparent text-gray-300 hover:border-gray-600 hover:text-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://app.nexlayer.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-[#22B4C8] hover:bg-[#1DA3B6] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#222]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden absolute left-0 right-0 top-16 z-[60] bg-[#191919]/95 border-b border-[#333] shadow-lg"
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  pathname === item.path
                    ? "bg-[#222] border-l-4 border-[#22B4C8] text-[#22B4C8]"
                    : "text-gray-300 hover:bg-[#222] hover:text-[#22B4C8]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <a
                href="https://app.nexlayer.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-[#22B4C8] hover:bg-[#1DA3B6] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}