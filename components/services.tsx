import { Card } from '@/components/ui/card'
import { Clock, Shield, Award, Heart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Clock,
      title: '빠른 도착',
      description: '30분 이내 신속한 출장 서비스',
    },
    {
      icon: Shield,
      title: '100% 후불제',
      description: '안전한 결제 시스템',
    },
    {
      icon: Award,
      title: '프리미엄 퀄리티',
      description: '최고급 매니저 서비스',
    },
    {
      icon: Heart,
      title: '고객 만족',
      description: '업계 1위 고객 만족도',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            서비스 특징
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border-blue-800/50 p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
