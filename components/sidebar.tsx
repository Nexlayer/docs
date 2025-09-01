'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
  Play,
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  children?: SidebarItem[];
}

interface SidebarProps {
  setSidebarOpen?: (open: boolean) => void;
}

export default function Sidebar({ setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (pathname.includes('/api-reference')) {
      setCurrentPage('api');
    } else if (
      pathname.includes('/learn') ||
      pathname.includes('/launchfile')
    ) {
      setCurrentPage('learn');
    } else if (pathname.includes('/faq')) {
      setCurrentPage('home');
    } else {
      setCurrentPage('home');
    }
  }, [pathname]);

  // Static items that never change
  const staticItems: SidebarItem[] = [
    {
      name: 'Announcements',
      path: 'https://nexlayer.com/blog',
      icon: Megaphone,
      external: true,
    },
    {
      name: 'Feature requests',
      path: 'https://discord.gg/EBW93bQZ',
      icon: Rocket,
      external: true,
    },
  ];

  // Dynamic items that change based on current page
  const getDynamicItems = (): SidebarItem[] => {
    switch (currentPage) {
      case 'api':
        return [
          {
            name: 'Welcome',
            path: '/api-reference',
            icon: BookOpen,
          },
          {
            name: 'Schema',
            path: '/api-reference/schema',
            icon: Database,
          },
        ];
      case 'learn':
        return [
          {
            name: 'Welcome',
            path: '/learn/welcome',
            icon: BookOpen,
          },

          {
            name: 'MCP Quickstart',
            path: '/learn/mcp-quickstart',
            icon: Bot,
          },

          {
            name: 'YAML Guide',
            path: '/launchfile',
            icon: Code,
          },
          {
            name: 'Templates',
            path: '/learn/templates',
            icon: FileText,
            children: [
              {
                name: 'Hello World NextJS',
                path: '/learn/templates/nextjs-hello-world',
                icon: Code,
              },

              {
                name: 'Custom Fullstack',
                path: '/learn/templates/custom-fullstack',
                icon: Settings,
              },
              {
                name: 'PERN App',
                path: '/learn/templates/pern-app',
                icon: Code,
              },
            ],
          },
        ];
      default: // home
        return [
          {
            name: 'Getting started',
            path: '/learn/mcp-quickstart',
            icon: Play,
          },
          {
            name: 'FAQ',
            path: '/faq',
            icon: HelpCircle,
            external: false,
          },
        ];
    }
  };

  const dynamicItems = getDynamicItems();

  const renderSidebarItem = (
    item: SidebarItem,
    isActive: boolean = false,
    level: number = 0,
    onlyIcons: boolean = false
  ) => {
    const IconComponent = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded =
      hasChildren && (isActive || pathname.startsWith(item.path));

    return (
      <div key={item.name}>
        <Link
          href={item.path}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className={`flex items-center justify-start gap-2 md:gap-3 px-2 md:px-3 py-2 text-sm transition-colors ${
            isActive ? 'text-[#22B4C8]' : 'text-gray-300 hover:text-[#22B4C8]'
          } ${level > 0 ? 'pl-3 md:pl-6' : ''} ${onlyIcons ? 'w-10 h-10 rounded-md bg-[#222] mb-1' : ''}`}
          onClick={() => {
            if (setSidebarOpen && window.innerWidth < 768)
              setSidebarOpen(false);
            if (isMobile && !mobileOpen) setMobileOpen(true);
          }}
        >
          <IconComponent
            className={`h-5 w-5 ${isActive ? 'text-[#22B4C8]' : 'text-gray-400'}`}
          />
          {(!onlyIcons || !isMobile) && <span className=''>{item.name}</span>}
        </Link>

        {/* Render children if expanded */}
        {hasChildren && isExpanded && (!onlyIcons || !isMobile) && (
          <div className='ml-4 border-l border-[#333333]'>
            {item.children!.map(child => {
              const isChildActive = pathname === child.path;
              return renderSidebarItem(child, isChildActive, level + 1);
            })}
          </div>
        )}
      </div>
    );
  };

  // Responsive sidebar logic
  // sm:hidden = below 640px
  // Show only icons if mobileOpen is false
  return (
    <>
      {/* Overlay for mobile sidebar */}
      {isMobile && mobileOpen && (
        <div
          className='fixed left-0 right-0 top-16 bottom-0 bg-black bg-opacity-40 z-40'
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`bg-[#191919] h-screen transition-all duration-300 border-r border-[#333333] ${
          isMobile
            ? mobileOpen
              ? 'fixed top-16 left-0 w-56 z-50 shadow-lg'
              : 'sticky top-16 w-14'
            : 'sticky top-16 w-56 md:w-64'
        } sm:w-56 overflow-y-hidden`}
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexlayer-background-grid-K7zVWFIHgHj17Jb8BwSJP3hjcgqRrz.svg")',
        }}
      >
        {/* Chevron for mobile expand/collapse */}
        {isMobile && (
          <div className='flex items-center justify-end pt-2 pr-2'>
            {!mobileOpen ? (
              <button
                aria-label='Open sidebar'
                className='w-8 h-8 flex items-center justify-center rounded-md bg-[#222] hover:bg-[#333] text-gray-400'
                onClick={e => {
                  e.stopPropagation();
                  setMobileOpen(true);
                }}
              >
                <svg
                  width='20'
                  height='20'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M9 6l6 6-6 6' />
                </svg>
              </button>
            ) : (
              <button
                aria-label='Close sidebar'
                className='w-8 h-8 flex items-center justify-center rounded-md bg-[#222] hover:bg-[#333] text-gray-400'
                onClick={e => {
                  e.stopPropagation();
                  setMobileOpen(false);
                }}
              >
                <svg
                  width='20'
                  height='20'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M15 6l-6 6 6 6' />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={`${isMobile ? 'p-2' : 'p-4'}`}>
          {/* Static Section */}
          <div className={`${isMobile ? 'mb-2' : 'mb-6'}`}>
            {staticItems.map(item =>
              renderSidebarItem(item, false, 0, isMobile && !mobileOpen)
            )}
          </div>

          {/* Divider */}
          <div
            className={`border-t border-[#333333] ${isMobile ? 'mb-2' : 'mb-6'}`}
          ></div>

          {/* Dynamic Section */}
          <div>
            {dynamicItems.map(item => {
              const isActive = pathname === item.path;
              return renderSidebarItem(
                item,
                isActive,
                0,
                isMobile && !mobileOpen
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
