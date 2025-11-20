import Link from 'next/link'
import { regionData } from '@/lib/region-data'
import { Phone, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export async function generateStaticParams() {
  return Object.keys(regionData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const region = regionData[slug]
  
  if (!region) {
    return {
      title: '페이지를 찾을 수 없습니다',
    }
  }

  const { areaName } = region
  return {
    title: `${areaName}출장안마 | ${areaName}출장마사지 | ${areaName}출장 - 쇼타임 출장안마`,
    description: `${areaName} 지역 최고의 출장마사지 서비스. 20대 후불제, 한국태국 전문 마사지사 직접 방문. 피로와 스트레스를 완벽하게 해소해드립니다.`,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const region = regionData[slug]
  
  if (!region) {
    notFound()
  }

  const { regionName, districtName, areaName } = region

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gold-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/blog" 
            className="text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2"
          >
            ← 블로그 목록으로
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {areaName}출장안마 {areaName}출장마사지 {areaName}출장
          </h1>
          <p className="text-2xl text-gold-400 font-medium">
            피로와 스트레스를 한 번에 해소할 최고의 힐링 서비스
          </p>
        </header>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:010-2871-2457"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            전화 상담
          </a>
          <a
            href="https://open.kakao.com/o/sd4IUeEh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            카톡 상담
          </a>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-200">
          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
            <p className="text-lg leading-relaxed">
              {regionName} {districtName} {areaName}, 이곳은 현대인의 일상이 빠르게 움직이는 역동적인 공간입니다. 
              바쁜 일상 속에서 몸과 마음의 피로가 쌓인다면, 이를 제대로 풀어줄 전문 마사지 서비스가 필요합니다. 
              바로 {areaName}출장안마, {areaName}출장마사지, 그리고 {areaName}출장입니다.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              출장 마사지는 이동 시간을 줄이고 고객이 있는 장소로 직접 찾아가 진행되는 서비스로, 
              스트레스 해소와 편안한 휴식을 제공하는 현대인의 필수 힐링 방법으로 자리 잡았습니다.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">1.</span> {areaName}출장안마란?
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                {areaName}출장마사지는 마사지사가 고객이 있는 장소로 직접 방문하여 전문적인 마사지를 제공하는 서비스입니다.
                기존의 마사지숍과 달리, 고객이 이동할 필요 없이 집, 사무실, 호텔 등 원하는 장소에서 편안하게 서비스를 받을 수 있다는 점에서 큰 차이가 있습니다.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">출장안마의 특징</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">완벽한 편리함:</strong> 교통 체증이나 대기 시간이 없습니다. 집에서 편안히 휴식하며 마사지를 받을 수 있습니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">맞춤형 서비스:</strong> 고객의 몸 상태와 컨디션에 따라 세부 서비스를 맞춤 제공합니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">시간 절약:</strong> 바쁜 스케줄 속에서도 쉽게 시간을 조율해 이용 가능합니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">전문적인 케어:</strong> 숙련된 마사지사들이 직접 방문해 전문성을 갖춘 서비스를 제공합니다.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">2.</span> {areaName}출장마사지가 주는 특별한 효과
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                출장마사지는 단순히 몸의 피로를 푸는 것을 넘어, 심리적 안정과 체력 회복에 큰 도움을 줍니다.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">출장마사지의 주요 효과</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">스트레스 완화:</strong> {areaName}에서 쌓인 스트레스와 긴장을 즉각적으로 해소합니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">근육 이완 및 혈액순환 개선:</strong> 장시간 앉아 있거나 서 있는 업무로 뭉친 근육을 부드럽게 풀어줍니다. 혈액순환이 개선되어 피로 회복 속도가 빨라집니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">숙면 유도:</strong> 마사지를 받은 후 몸과 마음이 이완되어 숙면의 질이 크게 향상됩니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">체력 및 면역력 증진:</strong> 꾸준한 마사지로 피로를 풀고 체력 회복은 물론 면역력까지 강화할 수 있습니다.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">3.</span> {areaName}출장을 이용하는 방법
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">쉽고 간편한 예약 절차</h3>
              <ol className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">1</span>
                  <div>
                    <strong className="text-white text-lg">업체 선택:</strong>
                    <p className="mt-2">믿을 수 있는 {areaName} 출장 마사지 업체를 선택하세요. 평판이 좋고 인증된 마사지사들이 있는 곳을 고르는 것이 중요합니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">2</span>
                  <div>
                    <strong className="text-white text-lg">상담 및 예약:</strong>
                    <p className="mt-2">원하는 시간과 장소, 그리고 필요한 마사지 유형(스웨디시, 타이, 아로마 등)을 업체에 전달하세요.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">3</span>
                  <div>
                    <strong className="text-white text-lg">마사지 받기:</strong>
                    <p className="mt-2">예약된 시간에 전문 마사지사가 방문하여 고객 맞춤형 서비스를 제공합니다.</p>
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">출장마사지 예약 시 체크리스트</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    마사지를 받기 전 몸 상태를 솔직히 알리세요. 허리 통증, 근육 뭉침 등 특정 부위의 피로를 미리 말하면 더 효과적인 케어가 가능합니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    마사지 강도와 스타일을 사전에 요청하세요. 마사지 강도는 개인별로 선호도가 다르니, 소통을 통해 최적의 서비스를 받으세요.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">4.</span> {areaName}출장마사지의 주요 마사지 유형
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                출장 마사지 서비스는 다양한 스타일로 제공됩니다. 자신에게 맞는 마사지를 선택하면 더 큰 만족을 얻을 수 있습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">스웨디시 마사지</h4>
                  <p>혈액순환과 림프 순환을 촉진하며, 심신 안정과 부드러운 휴식을 제공합니다.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">타이 마사지</h4>
                  <p>스트레칭과 지압을 결합한 마사지로 관절의 유연성을 높이고 에너지 흐름을 개선합니다.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">아로마 마사지</h4>
                  <p>에센셜 오일을 활용하여 피부 개선과 함께 스트레스를 줄이고 기분을 향상시킵니다.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">힐링 마사지</h4>
                  <p>깊은 근육층의 긴장을 풀어주는 마사지로, 만성적인 근육 통증에 효과적입니다.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">5.</span> 출장마사지를 더 효과적으로 받는 팁
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">마사지 전 준비:</strong> 마사지 전 따뜻한 물로 샤워하면 근육 이완이 더 잘됩니다.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">마사지 후 관리:</strong> 충분히 물을 마셔 노폐물 배출을 돕고, 휴식 시간을 가져 몸의 회복을 느껴보세요.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">정기적인 이용:</strong> 출장마사지를 정기적으로 받으면 지속적인 피로 관리와 체력 회복에 큰 도움이 됩니다.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">6.</span> {areaName}출장, 누가 필요할까요?
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6">
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">바쁜 직장인:</strong> 출퇴근 시간의 스트레스와 업무로 인한 피로를 해소하고 싶은 분
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">장시간 근무자:</strong> 컴퓨터 앞에서 장시간 근무로 뭉친 어깨와 목의 통증이 심한 분
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">출장 중인 여행객:</strong> 낯선 도시에서의 긴 하루를 마무리하며 편안한 휴식을 원하는 분
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">운동 후 회복이 필요한 분:</strong> 운동으로 인한 근육 피로를 빠르게 풀고자 하는 분
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl p-8 border-2 border-gold-500/30">
            <h2 className="text-3xl font-bold text-gold-300 mb-6 flex items-center gap-2">
              <span className="text-gold-500">7.</span> {areaName}출장안마, {areaName}출장마사지, {areaName}출장으로 완벽한 하루를 만들어보세요!
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                지친 하루의 끝, 내 몸을 위한 특별한 시간을 가져보세요. {areaName}출장안마는 단순한 서비스 그 이상입니다. 
                당신의 일상에 새로운 활력을 불어넣고, 몸과 마음을 재충전할 수 있는 소중한 경험을 제공합니다.
              </p>
              <p className="text-xl font-bold text-gold-300 text-center mt-6">
                지금 바로 예약하세요! 당신의 피로를 풀어줄 최고의 힐링 시간이 기다리고 있습니다.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">예약 및 상담 문의</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2871-2457"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                전화: 010-2871-2457
              </a>
              <a
                href="https://open.kakao.com/o/sd4IUeEh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡 상담
              </a>
            </div>
            <p className="text-gray-300 mt-6">
              365일 24시간 언제든지 문의 가능합니다
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
