import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Bell, Shield, Globe } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">설정</h1>
        <p className="text-gray-600 mt-2">시스템 설정을 관리합니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-violet-600" />
              일반 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">사이트 이름</label>
              <input
                type="text"
                defaultValue="총알출장마사지"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
              <input
                type="text"
                defaultValue="010-2871-2457"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">카카오톡 링크</label>
              <input
                type="text"
                defaultValue="https://open.kakao.com/o/s0ca9mMh"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">저장</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-violet-600" />
              알림 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">새 예약 알림</p>
                <p className="text-sm text-gray-600">새로운 예약이 들어오면 알림을 받습니다</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-violet-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">후기 알림</p>
                <p className="text-sm text-gray-600">새로운 후기가 등록되면 알림을 받습니다</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-violet-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">문의 알림</p>
                <p className="text-sm text-gray-600">새로운 문의가 들어오면 알림을 받습니다</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-violet-600" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">저장</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-violet-600" />
              보안 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">현재 비밀번호</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">새 비밀번호</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">비밀번호 변경</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-violet-600" />
              SEO 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">메타 제목</label>
              <input
                type="text"
                defaultValue="총알출장마사지 | 전국 출장안마 | 24시 연중무휴"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">메타 설명</label>
              <textarea
                rows={3}
                defaultValue="서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 전문 테라피스트의 프리미엄 홈케어 마사지."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">키워드</label>
              <input
                type="text"
                defaultValue="출장마사지, 전국출장마사지, 24시간마사지"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">저장</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
