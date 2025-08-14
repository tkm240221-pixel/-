"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Shield, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function GimpoPage() {
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
            <Badge className="mb-4 bg-blue-900 text-blue-300">김포시 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              김포시 출장마사지
              <span className="text-blue-400 block">24시간 언제든지</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              김포시 전 지역 30분 내 도착! 김포1동, 김포2동, 사우동, 풍무동, 장기동, 구래동 등 김포시 어디든 전문
              테라피스트가 직접 방문합니다.
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
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                김포시 서비스 지역
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">김포1동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">김포2동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">사우동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">풍무동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">장기동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">구래동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">마산동</div>
                <div className="bg-slate-700 rounded p-3 text-center text-slate-300">고촌읍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">김포시 출장마사지 특별 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">빠른 도착</h3>
                <p className="text-slate-300">김포시 전 지역 30분 내 도착 보장</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">전문 테라피스트</h3>
                <p className="text-slate-300">김포 지역 전담 숙련된 전문가</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">안전한 서비스</h3>
                <p className="text-slate-300">철저한 위생 관리와 안전 보장</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">김포시 출장마사지 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">타이 마사지</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">60분</span>
                    <span className="text-blue-400 font-bold">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">90분</span>
                    <span className="text-blue-400 font-bold">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">120분</span>
                    <span className="text-blue-400 font-bold">120,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healing Swedish */}
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">힐링스웨디시</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">60분</span>
                    <span className="text-blue-400 font-bold">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">90분</span>
                    <span className="text-blue-400 font-bold">110,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-white">120분</span>
                    <span className="text-blue-400 font-bold">130,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 text-center">VIP 패키지</h3>
                <Badge className="w-full justify-center mb-4 bg-yellow-800 text-yellow-300">타이 + 힐링 + 풋</Badge>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-yellow-800 rounded">
                    <span className="text-white">60분</span>
                    <span className="text-yellow-400 font-bold">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-800 rounded">
                    <span className="text-white">90분</span>
                    <span className="text-yellow-400 font-bold">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-800 rounded">
                    <span className="text-white">120분</span>
                    <span className="text-yellow-400 font-bold">160,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-800 rounded">
                    <span className="text-white">150분</span>
                    <span className="text-yellow-400 font-bold">200,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">김포시 출장마사지 예약 문의</h2>
          <p className="text-blue-100 text-lg mb-8">김포시 어디든 30분 내 도착! 지금 바로 예약하세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
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
          <p className="text-slate-300 mb-4">김포시 전문 출장마사지 서비스</p>
          <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
