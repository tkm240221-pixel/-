'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Send } from 'lucide-react'

export function FloatingContact() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // 초기 위치 설정 (우측 하단)
    setPosition({
      x: window.innerWidth - 120,
      y: window.innerHeight - 380, // 변경된 초기 위치
    })
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart])

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    })
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      const touch = e.touches[0]
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleTouchEnd)
      return () => {
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging, dragStart])

  if (!mounted) return null

  return (
    <div
      className="fixed z-50 flex flex-col gap-3"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <a
        href="https://t.me/cnfcnf1531"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-24 h-24 bg-[#0088CC] rounded-2xl shadow-lg hover:scale-105 transition-transform"
        onClick={(e) => {
          if (isDragging) e.preventDefault()
        }}
      >
        <Send className="w-8 h-8 mb-1 text-white" />
        <span className="text-xs font-bold text-white">텔레상담</span>
      </a>

      {/* 카카오톡 상담 버튼 */}
      <a
        href="https://open.kakao.com/o/sd4IUeEh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-24 h-24 bg-[#FEE500] rounded-2xl shadow-lg hover:scale-105 transition-transform"
        onClick={(e) => {
          if (isDragging) e.preventDefault()
        }}
      >
        <MessageCircle className="w-8 h-8 mb-1 text-black" fill="black" />
        <span className="text-xs font-bold text-black">카톡상담</span>
      </a>

      {/* 전화 상담 버튼 */}
      <a
        href="tel:010-2871-2457"
        className="flex flex-col items-center justify-center w-24 h-24 bg-[#22C55E] rounded-2xl shadow-lg hover:scale-105 transition-transform"
        onClick={(e) => {
          if (isDragging) e.preventDefault()
        }}
      >
        <Phone className="w-8 h-8 mb-1 text-white" />
        <span className="text-xs font-bold text-white">상담전화</span>
      </a>
    </div>
  )
}
