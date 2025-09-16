"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Clock, Shield, Users, CreditCard, MapPin } from "lucide-react"
import Link from "next/link"
import { RegionalLinks } from "@/components/regional-links"
import { RegionalStructuredData } from "@/components/regional-structured-data"

export default function DongGuClientPage() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "인천 동구 출장마사지 예약 문의"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const serviceAreas = [
    "송현1동",
    "송현2동",
    "송현3동",
    "송림1동",
    "송림2동",
    "송림3동",
    "송림4동",
    "송림5동",
    "송림6동",
    "화수1동",
    "화수2동",
    "화평동",
    "만석동",
    "금창동",
    "금곡동",
  ]

  return (
    <>
      <RegionalStructuredData region="인천 동구" serviceAreas={serviceAreas} />

      <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">총알출장마사지</h1>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  홈
                </Link>
                <a href="tel:010-2871-2457" className="text-white/80 hover:text-white transition-colors">
                  문의
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">인천 동구 전문 서비스</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                인천 동구 출장마사지
                <span className="text-yellow-300 block">프리미엄 홈케어</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                인천 동구 전 지역 30분 내 방문! 숙련된 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto mb-8">
                <div className="text-white/80 text-sm mb-2">실시간 예약 문의</div>
                <div className="text-white text-xl font-mono h-8">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 text-lg px-8 py-6" asChild>
                  <a href="tel:010-2871-2457">
                    <Phone className="h-5 w-5 mr-2" />
                    전화상담
                  </a>
                </Button>
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6" asChild>
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    카톡상담
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">마사지 코스 & 요금</h2>
              <p className="text-white/80 text-lg">투명한 가격, 합리적인 비용으로 최고의 서비스를 경험하세요</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 타이 마사지 */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">타이 마사지</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">60분</span>
                      <span className="text-xl font-bold text-yellow-300">80,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">90분</span>
                      <span className="text-xl font-bold text-yellow-300">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">120분</span>
                      <span className="text-xl font-bold text-yellow-300">120,000원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 힐링스웨디시 */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">힐링스웨디시</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">60분</span>
                      <span className="text-xl font-bold text-yellow-300">90,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">90분</span>
                      <span className="text-xl font-bold text-yellow-300">110,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold">120분</span>
                      <span className="text-xl font-bold text-yellow-300">130,000원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* VIP 코스 */}
              <Card className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-md border-yellow-400/30 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                  PREMIUM
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center text-yellow-300">VIP 코스</h3>
                  <p className="text-center text-sm mb-4 text-yellow-200">타이 + 힐링 + 풋케어</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                      <span className="font-semibold">60분</span>
                      <span className="text-xl font-bold text-yellow-300">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                      <span className="font-semibold">90분</span>
                      <span className="text-xl font-bold text-yellow-300">130,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                      <span className="font-semibold">120분</span>
                      <span className="text-xl font-bold text-yellow-300">160,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                      <span className="font-semibold">150분</span>
                      <span className="text-xl font-bold text-yellow-300">200,000원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">서비스 특징</h2>
              <p className="text-white/80 text-lg">고객 만족을 위한 차별화된 서비스</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24시간 운영</h3>
                <p className="text-white/80">언제든지 편리한 시간에 예약 가능</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">안전한 서비스</h3>
                <p className="text-white/80">철저한 위생관리와 안전한 서비스</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">전문 기술</h3>
                <p className="text-white/80">숙련된 전문 테라피스트의 맞춤 케어</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">맞춤 서비스</h3>
                <p className="text-white/80">고객 개인별 맞춤형 마사지 서비스</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">인천 동구 서비스 지역</h2>
              <p className="text-white/80 text-lg">동구 전 지역 30분 내 신속 방문</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20"
                >
                  <MapPin className="h-5 w-5 text-yellow-300 mx-auto mb-2" />
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">고객 후기</h2>
              <p className="text-white/80 text-lg">실제 이용 고객들의 생생한 후기</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                  <p className="text-white/90 mb-4">
                    "동구에서 이용했는데 정말 만족스러웠어요. 테라피스트분이 너무 친절하시고 실력도 좋으셨습니다."
                  </p>
                  <p className="text-white/70 text-sm">- 송현동 이○○님</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                  <p className="text-white/90 mb-4">
                    "24시간 서비스라서 늦은 시간에도 이용할 수 있어서 좋았어요. 다음에도 꼭 이용하겠습니다."
                  </p>
                  <p className="text-white/70 text-sm">- 송림동 박○○님</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                  <p className="text-white/90 mb-4">
                    "VIP 코스 정말 추천합니다. 피로가 완전히 풀렸어요. 가격도 합리적이고 서비스도 최고!"
                  </p>
                  <p className="text-white/70 text-sm">- 화수동 김○○님</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">지금 바로 예약하세요</h2>
            <p className="text-xl text-white/90 mb-8">인천 동구 최고의 출장마사지 서비스를 경험해보세요</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 text-lg px-8 py-6" asChild>
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  010-2871-2457
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카카오톡 상담
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Regional Links */}
        <RegionalLinks currentRegion="인천 동구" />

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-md py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">총알출장마사지</h3>
              <p className="text-white/80 mb-6">인천 동구 전문 출장마사지 서비스</p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="tel:010-2871-2457" className="text-white/80 hover:text-white transition-colors">
                  전화: 010-2871-2457
                </a>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/60 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
