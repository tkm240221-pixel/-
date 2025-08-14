"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function GangdongPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-emerald-400">
                총알출장마사지
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                홈
              </Link>
              <Link href="/#services" className="text-slate-300 hover:text-emerald-400 transition-colors">
                서비스
              </Link>
              <a href="tel:010-2871-2457" className="text-slate-300 hover:text-emerald-400 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Regional Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-900 text-emerald-300">강동구 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              강동구 출장마사지
              <span className="text-emerald-400 block">편안한 힐링</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              강동구 전 지역 신속 서비스! 천호동, 성내동, 길동, 둔촌동, 암사동, 고덕동 등 강동구 어디든 전문
              테라피스트가 방문합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  즉시 전화상담
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카톡 상담
                </a>
              </Button>
            </div>

            {/* Service Areas */}
            <div className="bg-slate-800 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
                강동구 서비스 지역
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">천호동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">성내동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">길동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">둔촌동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">암사동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">고덕동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">상일동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">명일동</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">강동구 출장마사지 예약 문의</h2>
          <p className="text-emerald-100 text-lg mb-8">강동구 전 지역 30분 내 도착! 편안한 힐링을 경험하세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="tel:010-2871-2457">
                <Phone className="h-5 w-5 mr-2" />
                010-2871-2457
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카카오톡 상담
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">총알출장마사지</h3>
          <p className="text-slate-300 mb-4">강동구 전문 출장마사지 서비스</p>
          <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
