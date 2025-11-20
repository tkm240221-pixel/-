'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: '쇼타임 출장', id: 'home' },
    { label: '게시판', id: 'board', hasSubmenu: true },
    { label: '서울', id: 'region1' },
    { label: '경기', id: 'region2' },
    { label: '인천', id: 'region3' },
    { label: '경상도', id: 'region4' },
    { label: '전라도', id: 'region5' },
  ]

  const boardSubmenu = [
    { label: '블로그', id: 'blog' },
    { label: '코스표', id: 'course' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b border-gray-800">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => onTabChange(item.id)}
                className={`px-8 py-6 text-white font-medium text-lg transition-all border-r border-gray-800 last:border-r-0 hover:bg-gray-900 ${
                  activeTab === item.id || (item.hasSubmenu && ['blog', 'course'].includes(activeTab)) 
                    ? 'bg-gray-900 shadow-inner' 
                    : ''
                }`}
              >
                {item.label}
              </button>
              
              {item.hasSubmenu && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-gray-800 shadow-xl min-w-[160px]">
                  {boardSubmenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => onTabChange(subItem.id)}
                      className={`w-full text-left px-6 py-4 text-white hover:bg-gray-900 transition-colors border-b border-gray-800 last:border-b-0 ${
                        activeTab === subItem.id ? 'bg-gray-900' : ''
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-4">
          <span className="text-white font-bold text-xl">쇼타임 출장</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-800">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (!item.hasSubmenu) {
                      onTabChange(item.id)
                      setIsMenuOpen(false)
                    } else {
                      onTabChange(item.id)
                    }
                  }}
                  className={`w-full text-left px-4 py-4 text-white transition-colors border-b border-gray-800 ${
                    activeTab === item.id ? 'bg-gray-900' : 'hover:bg-gray-900'
                  }`}
                >
                  {item.label}
                </button>
                
                {item.hasSubmenu && (activeTab === 'board' || activeTab === 'blog' || activeTab === 'course') && (
                  <div className="bg-gray-950">
                    {boardSubmenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          onTabChange(subItem.id)
                          setIsMenuOpen(false)
                        }}
                        className={`w-full text-left px-8 py-3 text-white text-sm transition-colors border-b border-gray-800 ${
                          activeTab === subItem.id ? 'bg-gray-900' : 'hover:bg-gray-900'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
