import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 예약하세요
          </h2>
          <p className="text-gray-400 text-lg">
            24시간 상담 및 예약 가능합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-6 text-lg"
            >
              <Phone className="mr-2" size={20} />
              전화 상담
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              카카오톡 상담
            </Button>
          </div>

          <div className="pt-8 text-gray-500 text-sm">
            <p>운영시간: 24시간 연중무휴</p>
            <p className="mt-2">100% 후불제 안전 결제 시스템</p>
          </div>
        </div>
      </div>
    </section>
  )
}
