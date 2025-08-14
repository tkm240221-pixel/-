"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function GwacheonPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-400">총알출장마사지</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                홈
              </Link>
              <a href="tel:010-2871-2457" className="text-slate-300 hover:text-emerald-400 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-900 text-blue-300">과천시 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              과천시 출장마사지
              <span className="text-blue-400 block">프리미엄 홈케어</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              과천시 전 지역 30분 내 방문! 숙련된 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">과천시 서비스 지역</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">주요 지역</h3>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• 중앙동, 갈현동</li>
                    <li>• 별양동, 과천동</li>
                    <li>• 주암동, 문원동</li>
                    <li>• 막계동</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">특별 서비스</h3>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• 24시간 운영</li>
                    <li>• 30분 내 도착</li>
                    <li>• 카드결제 가능</li>
                    <li>• 위생 철저 관리</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white flex-1" asChild>
                  <a href="tel:010-2871-2457">
                    <Phone className="h-5 w-5 mr-2" />
                    전화상담
                  </a>
                </Button>
                <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 flex-1" asChild>
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    카톡상담
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">마사지 코스 & 요금</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">타이 마사지</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-blue-400 font-bold">80,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-blue-400 font-bold">100,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-blue-400 font-bold">120,000원</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">힐링스웨디시</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-blue-400 font-bold">90,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-blue-400 font-bold">110,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-blue-400 font-bold">130,000원</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">VIP (타이 + 힐링 + 풋)</h4>
                  <Badge className="mb-3 bg-yellow-900 text-yellow-300 text-xs">프리미엄 패키지</Badge>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-yellow-400 font-bold">100,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-yellow-400 font-bold">130,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-yellow-400 font-bold">160,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">150분</div>
                      <div className="text-yellow-400 font-bold">200,000원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">총알출장마사지</h3>
            <p className="text-slate-300 mb-6">과천시 전문 출장마사지 서비스</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:010-2871-2457" className="text-slate-300 hover:text-blue-400 transition-colors">
                전화: 010-2871-2457
              </a>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8">
              <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
