import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ImageIcon, Video, Plus } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">콘텐츠 관리</h1>
          <p className="text-gray-600 mt-2">웹사이트 콘텐츠를 관리합니다</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus className="h-4 w-4 mr-2" />새 콘텐츠
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">블로그 포스트</CardTitle>
            <FileText className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-gray-600 mt-1">게시된 글</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">이미지</CardTitle>
            <ImageIcon className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">156</div>
            <p className="text-xs text-gray-600 mt-1">업로드된 이미지</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">동영상</CardTitle>
            <Video className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-600 mt-1">업로드된 동영상</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>메인 배너 관리</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">메인 히어로 배너</h4>
              <p className="text-sm text-gray-600 mb-3">전 지역 30분 내 방문 프리미엄 마사지</p>
              <Button variant="outline" size="sm">
                수정
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>서비스 소개 관리</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">타이마사지</h4>
              <p className="text-sm text-gray-600 mb-3">전통 타이마사지 기법을 활용한 전신 마사지</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">힐링스웨디시</h4>
              <p className="text-sm text-gray-600 mb-3">스웨덴식 마사지 기법으로 근육 이완</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>가격표 관리</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">서비스</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">60분</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">90분</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">120분</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">150분</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">작업</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">타이마사지</td>
                  <td className="py-4 px-4 text-sm text-gray-900">80,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">100,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">120,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">-</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      수정
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">힐링스웨디시</td>
                  <td className="py-4 px-4 text-sm text-gray-900">90,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">110,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">130,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">-</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      수정
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">VIP 패키지</td>
                  <td className="py-4 px-4 text-sm text-gray-900">100,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">130,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">160,000원</td>
                  <td className="py-4 px-4 text-sm text-gray-900">200,000원</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      수정
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
