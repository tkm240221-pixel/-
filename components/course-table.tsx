'use client'

export default function CourseTable() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">쇼타임 출장마사지 코스표</h1>
          <p className="text-xl text-gray-300">20대 관리사 전원 대기 | 100% 후불제 | 내상제로</p>
        </div>

        {/* 감성힐링마사지 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-yellow-500 mb-2">감성힐링마사지 (스웨디시)</h2>
            <p className="text-gray-300">고급 스파 스웨디시 프리미엄 오일을 사용해 지친 육신의 피로를 완벽하게 풀어드리며, 전신을 부드럽게 어루만지며 혈액순환을 위한 서혜부 림프절을 자극합니다. 스웨디시 코스가 제일 인기 좋은 코스입니다!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">60분</div>
                <div className="text-3xl font-bold text-white">90,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-yellow-500/50 hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">90분</div>
                <div className="text-3xl font-bold text-white">110,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-yellow-500 hover:border-yellow-600 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">120분</div>
                <div className="text-3xl font-bold text-white">140,000원</div>
              </div>
            </div>
          </div>
        </div>

        {/* VIP 스페셜 믹스코스 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-2">VIP 마사지 스페셜 믹스코스</h2>
            <p className="text-gray-300">타이, 아로마, 감성힐링스웨디시를 원하시는 코스를 결합하여 이용하실 수 있습니다. 편안한 분위기 속에서 원하시는 코스를 마음껏 즐겨보시기 바랍니다!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all">
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
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-purple-500/50 hover:border-purple-500 transition-all">
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
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-purple-500 hover:border-purple-600 transition-all lg:col-span-2">
              <div className="text-center">
                <div className="text-xl font-semibold text-purple-400 mb-2">타이 + 힐링 + 풋케어</div>
                <div className="text-3xl font-bold text-yellow-500 mb-1">150분</div>
                <div className="text-2xl font-bold text-white">180,000원</div>
              </div>
            </div>
          </div>
        </div>

        {/* 타이마사지 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">타이마사지 (건식코스)</h2>
            <p className="text-gray-300">손, 팔꿈치 등으로 압을 이용해 마사지하며 압의 강도를 조절할 수 있기 때문에 보다 더 시원한 마사지를 받고 싶으신 분께 추천드립니다!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-blue-500/30 hover:border-blue-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">60분</div>
                <div className="text-3xl font-bold text-white">60,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-blue-500/50 hover:border-blue-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">90분</div>
                <div className="text-3xl font-bold text-white">80,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-blue-500 hover:border-blue-600 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">120분</div>
                <div className="text-3xl font-bold text-white">90,000원</div>
              </div>
            </div>
          </div>
        </div>

        {/* 아로마마사지 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-green-400 mb-2">아로마마사지 (습식코스)</h2>
            <p className="text-gray-300">아로마 오일 등 윤활제를 사용하여 몸 전체에 부드럽게 발라주며 몸을 릴렉스 시켜 더 안정적인 몸상태를 유지시킵니다. 보다 부드럽게 마사지 하기 때문에 좋은 느낌으로 긴장을 풀어주는 코스입니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500/30 hover:border-green-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">60분</div>
                <div className="text-3xl font-bold text-white">70,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500/50 hover:border-green-500 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">90분</div>
                <div className="text-3xl font-bold text-white">90,000원</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 hover:border-green-600 transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">120분</div>
                <div className="text-3xl font-bold text-white">100,000원</div>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">마사지 소개 영상</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YcE4JyvkGfc"
              title="마사지 소개 영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* 출장마사지 설명 */}
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 border border-yellow-500/30">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">쇼타임 출장마사지란?</h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              쇼타임 출장마사지는 고객님의 편안한 공간에서 최고 수준의 마사지 서비스를 제공하는 프리미엄 출장 케어 서비스입니다. 
              호텔, 모텔, 오피스텔, 자택 등 어디든 방문하여 전문적이고 정성스러운 마사지를 받으실 수 있습니다.
            </p>

            <div className="bg-black/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">왜 쇼타임 출장마사지를 선택해야 할까요?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span><strong>20대 전문 관리사:</strong> 마사지 스쿨 출신의 전문 테라피스트들이 정성스럽게 케어해드립니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span><strong>100% 후불제:</strong> 선입금이나 예약비가 전혀 없으며, 서비스 이용 후 안심하고 결제하실 수 있습니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span><strong>내상 제로 보장:</strong> 철저한 관리사 선발과 교육으로 고객 만족도 1위를 자랑합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span><strong>24시간 예약 가능:</strong> 연중무휴로 운영되며 새벽 시간대도 예약 가능합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span><strong>빠른 도착:</strong> 예약 후 30분~1시간 이내 고객님의 장소로 신속하게 방문해드립니다.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg">
              저희 쇼타임 출장마사지는 서울, 경기, 인천을 포함한 수도권 전역에 서비스를 제공하고 있습니다. 
              각 지역의 세부 동/리까지 신속하게 방문하여 최상의 마사지 서비스를 제공해드립니다.
              강남구, 서초구, 송파구를 비롯한 서울 전역, 성남시, 수원시, 고양시 등 경기 전역, 그리고 인천 전역까지 
              고객님이 계신 곳이라면 어디든 찾아갑니다.
            </p>

            <div className="bg-black/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">이용 방법</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>예약하기:</strong> 전화(010-2871-2457) 또는 카카오톡으로 간편하게 예약하실 수 있습니다.</li>
                <li><strong>장소 확인:</strong> 호텔, 모텔, 오피스텔, 자택 등 원하시는 장소를 알려주세요.</li>
                <li><strong>코스 선택:</strong> 감성힐링, 타이, 아로마, VIP 믹스코스 중 원하시는 코스를 선택해주세요.</li>
                <li><strong>관리사 방문:</strong> 예약 시간에 맞춰 전문 관리사가 필요한 용품을 모두 구비하여 방문합니다.</li>
                <li><strong>서비스 이용:</strong> 편안한 분위기에서 최고급 마사지 서비스를 받으세요.</li>
                <li><strong>후불 결제:</strong> 서비스 이용 후 현금, 카드, 계좌이체 중 편한 방법으로 결제하시면 됩니다.</li>
              </ol>
            </div>

            <p className="text-lg">
              쇼타임 출장마사지는 고객님의 건강과 휴식을 최우선으로 생각합니다. 
              일상의 스트레스와 피로를 풀고, 몸과 마음의 균형을 되찾고 싶으시다면 
              언제든지 쇼타임 출장마사지를 찾아주세요. 전문 관리사들이 정성을 다해 최상의 힐링 경험을 선사해드리겠습니다.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-8">
              <p className="text-center text-xl font-semibold text-yellow-500">
                지금 바로 예약하시고 프리미엄 출장마사지를 경험해보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a
                  href="tel:010-2871-2457"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
                >
                  📞 전화 상담: 010-2871-2457
                </a>
                <a
                  href="https://open.kakao.com/o/sd4IUeEh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
                >
                  💬 카카오톡 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
