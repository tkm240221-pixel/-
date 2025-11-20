import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: '20대 후내 매니저',
      description: '젊고 전문적인 매니저진',
    },
    {
      title: '강남 출신',
      description: '최고 퀄리티의 서비스',
    },
    {
      title: '신용 출장',
      description: '믿을 수 있는 서비스',
    },
    {
      title: '안전한 시스템',
      description: '100% 후불 결제',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            null
          ))}
        </div>
      </div>
    </section>
  )
}
