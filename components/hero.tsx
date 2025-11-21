import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-500/20 animate-pulse"
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Golden Emblem */}
          <div className="relative inline-block mb-8">
            <div className="relative w-80 h-80 mx-auto">
              {/* Laurel wreath */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
                {/* Left laurel */}
                <path
                  d="M50,280 Q50,200 80,160 Q50,120 80,80 Q50,40 80,20"
                  stroke="url(#goldGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Right laurel */}
                <path
                  d="M270,280 Q270,200 240,160 Q270,120 240,80 Q270,40 240,20"
                  stroke="url(#goldGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Top crown */}
                <path
                  d="M120,30 L140,10 L160,30 L180,10 L200,30"
                  stroke="url(#goldGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-900/50 to-blue-950/50 backdrop-blur-sm rounded-full w-56 h-56 border-4 border-yellow-500/30 flex flex-col items-center justify-center p-6">
                  <div className="text-yellow-100/80 text-xs mb-2">Premium home care service</div>
                  <div className="text-yellow-100/70 text-xs mb-3">20대 후내 매니저 / 100% 후불제</div>
                  <div className="text-yellow-400 mb-1 text-balance text-3xl font-bold">{"쇼타임출장안마"}</div>
                  <div className="flex items-center gap-2 text-yellow-500/60">
                    <div className="w-3 h-px bg-yellow-500/60"></div>
                    <div className="w-1 h-1 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-px bg-yellow-500/60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main text */}
          <div className="space-y-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              출장안마 출장마사지 쇼타임 출장
              <br />
              <span className="text-yellow-400">홈페이지에 오신 것을 환영합니다!</span>
            </h1>

            <div className="space-y-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              <p>
                출장마사지 쇼타임 출장안마 서비스는
                <br />
                <span className="text-yellow-400 font-semibold">신용출장</span> 고퀄리티{" "}
                <span className="text-yellow-400 font-semibold">태국 현지 전문 라이센스</span> 등
                <br />
                지역에서 30분 이내 도착하는
                <br />
                쇼타임 출장안마 입니다.
              </p>

              <p>
                최신의 퀄리티 매니저를 선택하는
                <br />
                안전한 <span className="text-yellow-400 font-semibold">100% 후불제</span> 시스템으로 운영.
              </p>

              <p>
                출장안마 출장마사지 업계 1위
                <br />
                매일 반복되는 일상의 피로와
                <br />
                스트레스를 던져버리고 싶다면,
                <br />
                수년 동안 출장마사지를 제공하고 있는
                <br />
                쇼타임이 최고의 만족을 선사합니다.
              </p>

              <p>
                지역 내 1등을 목표로 하고 있으며,
                <br />
                힐링을 원한다면 기대해보시기 바랍니다.
              </p>

              <div className="mt-8 pt-8 border-t border-yellow-500/30">
                <p className="text-yellow-400 font-bold text-2xl md:text-3xl mb-2">예약 문의</p>
                <a
                  href="tel:010-2871-2457"
                  className="text-white font-bold text-3xl md:text-5xl hover:scale-105 transition-transform inline-block animate-rgb-led"
                >
                  010-2871-2457
                </a>
                <p className="text-gray-400 text-sm mt-2">24시간 연중무휴 상담 가능</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
