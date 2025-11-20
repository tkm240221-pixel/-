'use client'

import { Card } from '@/components/ui/card'
import { MapPin, Phone, Clock, Star, Shield, CheckCircle2, Award } from 'lucide-react'

interface RegionDetailProps {
  regionName: string
  districtName: string
  areaName: string
}

export default function RegionDetail({ regionName, districtName, areaName }: RegionDetailProps) {
  const cleanAreaName = areaName.replace('출장마사지', '')
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {cleanAreaName}출장안마 {cleanAreaName}출장마사지 {cleanAreaName}출장 한국태국 20대 후불제
          </h1>
          <p className="text-gray-400 text-lg">
            {regionName} › {districtName}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 border-0 p-10 mb-12 text-center shadow-2xl shadow-yellow-500/20">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            지금 바로 예약하세요
          </h2>
          <div className="flex items-center justify-center gap-4 text-black mb-4">
            <Phone className="w-10 h-10" />
            <a href="tel:010-2871-2457" className="text-3xl md:text-5xl font-bold hover:scale-105 transition-transform">
              누르면 바로 연결됩니다!
            </a>
          </div>
          <p className="text-black/90 text-xl font-semibold">24시간 연중무휴 상담 가능</p>
        </Card>

        {/* 마사지 코스 안내 */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">마사지 코스 안내</h2>
            <p className="text-xl text-gray-300">20대 관리사 전원 대기 | 100% 후불제 | 내상제로</p>
          </div>

          {/* 감성힐링마사지 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">감성힐링마사지 (스웨디시)</h3>
              <p className="text-gray-300">고급 스파 스웨디시 프리미엄 오일을 사용해 지친 육신의 피로를 완벽하게 풀어드리며, 전신을 부드럽게 어루만지며 혈액순환을 위한 서혜부 림프절을 자극합니다.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gray-900 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">60분</div>
                  <div className="text-3xl font-bold text-white">90,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-yellow-500/50 hover:border-yellow-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">90분</div>
                  <div className="text-3xl font-bold text-white">110,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-yellow-500 hover:border-yellow-600 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">120분</div>
                  <div className="text-3xl font-bold text-white">140,000원</div>
                </div>
              </Card>
            </div>
          </div>

          {/* 건식(타이마사지) */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-lg p-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">타이마사지 (건식코스)</h3>
              <p className="text-gray-300">전통 타이 마사지 기법으로 스트레칭과 지압을 결합하여 근육의 깊은 곳까지 풀어드리며, 몸의 균형과 유연성을 회복시켜 드립니다.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gray-900 border-2 border-green-500/30 hover:border-green-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">60분</div>
                  <div className="text-3xl font-bold text-white">60,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-green-500/50 hover:border-green-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">90분</div>
                  <div className="text-3xl font-bold text-white">80,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-green-500 hover:border-green-600 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">120분</div>
                  <div className="text-3xl font-bold text-white">90,000원</div>
                </div>
              </Card>
            </div>
          </div>

          {/* 아로마마사지 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-600/20 rounded-lg p-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">아로마마사지 (습식코스)</h3>
              <p className="text-gray-300">손, 팔꿈치 등으로 압을 이용해 마사지하여 압의 강도를 조절할 수 있고 혈액순환을 돕습니다. 보다 부드럽게 마사지 하기 때문에 좀 더 깊은 느낌으로 긴장을 풀어주는 코스입니다.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gray-900 border-2 border-pink-500/30 hover:border-pink-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">60분</div>
                  <div className="text-3xl font-bold text-white">70,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-pink-500/50 hover:border-pink-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">90분</div>
                  <div className="text-3xl font-bold text-white">90,000원</div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-pink-500 hover:border-pink-600 transition-all p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">120분</div>
                  <div className="text-3xl font-bold text-white">100,000원</div>
                </div>
              </Card>
            </div>
          </div>

          {/* VIP 스페셜 믹스코스 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">VIP 마사지 스페셜 믹스코스</h3>
              <p className="text-gray-300">타이, 아로마, 감성힐링스웨디시를 원하시는 코스를 결합하여 이용하실 수 있습니다.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gray-900 border-2 border-purple-500/30 hover:border-purple-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-xl font-semibold text-purple-400 mb-2">타이+힐링아로마</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">60분</div>
                      <div className="text-xl font-bold text-white">90,000원</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">90분</div>
                      <div className="text-xl font-bold text-white">110,000원</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">120분</div>
                      <div className="text-xl font-bold text-white">140,000원</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-purple-500/50 hover:border-purple-500 transition-all p-6">
                <div className="text-center">
                  <div className="text-xl font-semibold text-purple-400 mb-2">힐링+풋케어</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">60분</div>
                      <div className="text-xl font-bold text-white">90,000원</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">90분</div>
                      <div className="text-xl font-bold text-white">110,000원</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">120분</div>
                      <div className="text-xl font-bold text-white">140,000원</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="bg-gray-900 border-2 border-purple-500 hover:border-purple-600 transition-all p-6 lg:col-span-2">
                <div className="text-center">
                  <div className="text-xl font-semibold text-purple-400 mb-2">타이 + 힐링 + 풋케어</div>
                  <div className="text-3xl font-bold text-yellow-500 mb-1">150분</div>
                  <div className="text-2xl font-bold text-white">180,000원</div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-800/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-yellow-400" />
            {cleanAreaName} 프리미엄 출장마사지 소개
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p className="text-white font-semibold text-xl mb-4">
              {cleanAreaName} 지역 최고의 프리미엄 출장마사지 서비스를 경험해보세요
            </p>
            
            <p>
              저희 {cleanAreaName} 출장마사지는 {regionName} {districtName} 지역에서 가장 신뢰받는 프리미엄 홈케어 서비스를 제공하고 있습니다. 
              바쁜 일상 속에서 지친 몸과 마음을 편안하게 쉴 수 있도록, 최고 수준의 전문 관리사들이 직접 고객님께서 원하시는 장소로 방문하여 
              최상의 마사지 서비스를 제공해 드립니다.
            </p>

            <p>
              현대인의 스트레스와 피로는 단순히 육체적인 문제만이 아닙니다. 정신적, 심리적 안정까지 함께 고려한 전문적인 케어가 필요합니다. 
              저희는 이러한 고객님들의 니즈를 정확히 파악하고, 단순한 마사지를 넘어 진정한 힐링과 회복의 시간을 제공하기 위해 
              끊임없이 노력하고 있습니다. {cleanAreaName} 지역의 특성과 고객층을 깊이 이해하고 있기에, 더욱 세심하고 맞춤화된 
              서비스를 제공할 수 있습니다.
            </p>

            <p>
              저희 출장마사지 서비스의 가장 큰 강점은 전문성과 신뢰성입니다. 모든 관리사는 정식 교육과정을 이수하고 
              풍부한 실무 경험을 보유한 전문가들로만 구성되어 있습니다. 해부학적 지식을 바탕으로 고객님의 신체 상태를 
              정확히 파악하고, 개인별 맞춤 케어를 제공합니다. 특히 장시간 컴퓨터 작업으로 인한 거북목, 어깨 결림, 
              허리 통증 등 현대인들이 흔히 겪는 증상들에 대한 전문적인 관리가 가능합니다.
            </p>

            <p>
              {cleanAreaName} 출장마사지를 이용하시면 호텔, 오피스텔, 자택 등 고객님께서 편안하게 느끼시는 공간에서 
              프라이빗한 서비스를 받으실 수 있습니다. 외부로 이동하는 번거로움 없이, 익숙한 공간에서 편안하게 
              마사지를 받으실 수 있어 더욱 깊은 이완과 휴식이 가능합니다. 또한 철저한 개인정보 보호와 프라이버시 보장으로 
              안심하고 서비스를 이용하실 수 있습니다.
            </p>
          </div>
        </Card>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-800/50 p-6 text-center hover:border-yellow-500/50 transition-all">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">신속한 서비스</h3>
            <p className="text-gray-400">
              예약 후 30분 이내 방문<br />
              빠르고 정확한 출장 서비스<br />
              24시간 언제든지 가능
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-800/50 p-6 text-center hover:border-yellow-500/50 transition-all">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">최고급 퀄리티</h3>
            <p className="text-gray-400">
              전문 교육 이수 관리사<br />
              20대 후반 관리사 선발<br />
              철저한 품질 관리 시스템
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-800/50 p-6 text-center hover:border-yellow-500/50 transition-all">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">안전한 후불제</h3>
            <p className="text-gray-400">
              서비스 만족 후 결제<br />
              현금 및 카드 모두 가능<br />
              투명한 가격 정책
            </p>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-800/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {cleanAreaName} 출장마사지 상세 안내
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                서비스 이용 방법
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-yellow-400 font-semibold">1. 전화 예약:</span> 010-2871-2457로 전화주시면 친절한 상담원이 
                  고객님의 위치, 원하시는 시간, 선호하시는 마사지 종류 등을 상세히 안내받아 드립니다. 
                  처음 이용하시는 분들도 궁금하신 점을 편하게 문의하실 수 있습니다.
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">2. 관리사 배정:</span> 고객님의 요청사항과 위치를 고려하여 
                  가장 적합한 전문 관리사를 신속하게 배정해 드립니다. {cleanAreaName} 지역을 잘 아는 숙련된 관리사가 
                  배정되어 더욱 빠른 서비스가 가능합니다.
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">3. 신속한 방문:</span> 예약 확정 후 약 30분 이내에 관리사가 
                  고객님께서 지정하신 장소로 방문합니다. 정확한 도착 시간은 교통 상황에 따라 다소 차이가 있을 수 있으며, 
                  도착 직전 연락을 드립니다.
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">4. 프리미엄 서비스:</span> 관리사 도착 후 고객님의 컨디션을 
                  체크하고 상담을 통해 오늘의 마사지 코스와 강도를 결정합니다. 편안한 음악과 함께 최고급 마사지 오일을 
                  사용하여 전문적인 케어를 제공해 드립니다.
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">5. 만족 후 결제:</span> 서비스가 종료된 후 만족하신 경우에만 
                  결제를 진행합니다. 현금 또는 카드 결제 모두 가능하며, 영수증 발행도 가능합니다.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                서비스 제공 장소
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  {cleanAreaName} 지역 내 어디든 방문 가능합니다. 자택, 오피스텔, 호텔, 모텔 등 
                  고객님께서 편안하게 느끼시는 모든 장소에서 서비스 이용이 가능합니다. 
                  특히 {cleanAreaName}은 저희 서비스의 주요 지역으로, 가장 빠른 시간 내에 방문이 가능한 곳입니다.
                </p>
                <p>
                  공간이 협소하거나 특별한 환경적 요인이 있으시더라도 걱정하지 마세요. 
                  저희 관리사들은 다양한 환경에서의 서비스 경험이 풍부하여, 
                  어떤 공간에서도 최상의 서비스를 제공할 수 있습니다. 침대나 요가 매트 등 
                  기본적인 공간만 있으시면 충분하며, 필요시 추가 용품도 준비해 드립니다.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-yellow-400" />
                운영 시간 및 예약
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  저희는 <span className="text-yellow-400 font-semibold">24시간 연중무휴</span>로 운영됩니다. 
                  새벽 시간, 주말, 공휴일에도 예약이 가능하며, 고객님의 일정에 맞춰 
                  언제든지 서비스를 이용하실 수 있습니다. 심야 시간대나 이른 아침 시간대에도 
                  동일한 퀄리티의 서비스를 제공해 드립니다.
                </p>
                <p>
                  다만, 피크 시간대(저녁 7시~11시)에는 예약이 많아 대기 시간이 다소 발생할 수 있으니, 
                  가능하시다면 미리 예약해 주시는 것을 권장드립니다. 정기적으로 이용하시는 고객님들을 위한 
                  단골 우대 프로그램도 운영 중입니다.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-yellow-400" />
                안전과 신뢰
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  고객님의 안전과 프라이버시는 저희의 최우선 가치입니다. 모든 관리사는 철저한 신원 확인과 
                  범죄경력 조회를 거쳐 선발되며, 정기적인 교육과 품질 관리를 통해 최신 마사지 기법과 
                  고객 서비스 마인드를 유지하고 있습니다. 또한 고객님의 개인정보는 철저히 보호되며, 
                  서비스 종료 후에는 모든 정보가 즉시 파기됩니다.
                </p>
                <p>
                  혹시라도 서비스 이용 중 불편한 점이 있으시거나, 관리사의 태도나 서비스에 문제가 있다고 
                  느끼시면 즉시 본사로 연락 주시기 바랍니다. 고객님의 소중한 의견을 바탕으로 
                  더 나은 서비스를 제공하기 위해 항상 노력하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Why Choose Us */}
        <Card className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-800/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {cleanAreaName} 출장마사지를 선택해야 하는 이유
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">01</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">검증된 전문 관리사</h3>
                <p className="text-gray-300 leading-relaxed">
                  저희는 관리사 선발에 있어 타협하지 않습니다. 정식 교육기관에서 전문 과정을 이수하고, 
                  실제 현장에서 최소 2년 이상의 경력을 보유한 관리사만을 채용합니다. 
                  또한 채용 후에도 지속적인 재교육과 기술 향상 프로그램을 통해 최신 마사지 기법과 
                  고객 서비스 마인드를 유지하도록 관리하고 있습니다. 특히 20대 후반의 젊고 
                  에너지 넘치는 관리사들로 구성되어 있어 더욱 활력 있는 서비스를 받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">02</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">투명한 후불 결제 시스템</h3>
                <p className="text-gray-300 leading-relaxed">
                  저희는 고객님의 만족을 최우선으로 생각합니다. 그렇기에 서비스를 먼저 경험하시고, 
                  만족하신 후에 결제하시는 후불 시스템을 운영하고 있습니다. 
                  사전 결제에 대한 불안감이나 부담감 없이, 편안한 마음으로 서비스를 이용하실 수 있습니다. 
                  현금 결제 시 추가 할인 혜택도 제공되며, 카드 결제 시에도 모든 카드사가 가능합니다. 
                  가격 또한 사전에 명확히 안내드리며, 추가 요금은 일절 발생하지 않습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">03</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">철저한 프라이버시 보장</h3>
                <p className="text-gray-300 leading-relaxed">
                  고객님의 프라이버시와 개인정보 보호는 저희의 약속입니다. 
                  예약부터 서비스 종료까지 모든 과정에서 고객님의 정보는 암호화되어 관리되며, 
                  외부에 절대 노출되지 않습니다. 관리사들은 직업적 윤리 의식을 철저히 준수하며, 
                  고객님과의 모든 대화와 정보는 비밀로 유지됩니다. 
                  또한 아파트나 오피스텔 등에서 이용 시에도 최대한 눈에 띄지 않도록 
                  배려하여 방문하고 있습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">04</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">24시간 연중무휴 운영</h3>
                <p className="text-gray-300 leading-relaxed">
                  직장인, 자영업자, 학생 등 바쁜 현대인들의 다양한 일정을 고려하여 
                  24시간 365일 언제든지 서비스를 이용하실 수 있습니다. 
                  새벽 퇴근 후 피로를 풀고 싶으신 분, 주말 오후 여유 시간을 활용하고 싶으신 분, 
                  공휴일에 특별한 힐링 시간을 갖고 싶으신 분 모두 환영합니다. 
                  심야 시간대라도 동일한 수준의 프리미엄 서비스를 제공해 드리며, 
                  안전한 귀가를 위한 배려도 함께 제공됩니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">05</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{cleanAreaName} 지역 특화 서비스</h3>
                <p className="text-gray-300 leading-relaxed">
                  {cleanAreaName}은 저희 서비스의 핵심 지역 중 하나입니다. 
                  이 지역의 특성과 고객층을 깊이 이해하고 있으며, 지역 내 주요 건물과 도로 상황을 
                  완벽하게 파악하고 있어 가장 빠른 시간 내에 방문이 가능합니다. 
                  또한 {cleanAreaName} 지역 고객님들의 선호도와 니즈를 반영한 맞춤형 서비스를 제공하고 있으며, 
                  지역 내 단골 고객님들께는 특별한 혜택도 제공해 드리고 있습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-yellow-400 text-3xl font-bold flex-shrink-0">06</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">위생적이고 깨끗한 서비스</h3>
                <p className="text-gray-300 leading-relaxed">
                  모든 관리사는 매일 위생 교육을 받으며, 서비스 전 반드시 손 소독과 개인 위생 관리를 철저히 합니다. 
                  사용되는 모든 오일과 로션은 최고급 제품을 사용하며, 고객님의 피부 타입에 맞춰 
                  선택할 수 있도록 다양한 옵션을 준비하고 있습니다. 
                  또한 코로나19 이후 더욱 강화된 방역 수칙을 준수하여, 마스크 착용, 체온 체크, 
                  환기 등을 철저히 시행하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </Card>


        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 border-0 p-10 text-center shadow-2xl shadow-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            지금 바로 예약하세요
          </h2>
          <p className="text-black/90 text-xl mb-6 font-semibold">
            {cleanAreaName} 최고의 프리미엄 출장마사지
          </p>
          <div className="flex items-center justify-center gap-4 text-black mb-6">
            <Phone className="w-10 h-10" />
            <a href="tel:010-2871-2457" className="text-3xl md:text-5xl font-bold hover:scale-105 transition-transform">
              누르면 바로 연결됩니다!
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-black/90 text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>24시간 운영</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>후불 결제</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>30분 내 도착</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
