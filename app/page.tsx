'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Features from '@/components/features'
import Regions from '@/components/regions'
import RegionDetail from '@/components/region-detail'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import CourseTable from '@/components/course-table'
import RegionLinks from '@/components/region-links'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedArea, setSelectedArea] = useState<{
    regionName: string
    districtName: string
    areaName: string
  } | null>(null)
  const router = useRouter()

  const getActiveRegion = () => {
    const regionMap: { [key: string]: number } = {
      'region1': 1,
      'region2': 2,
      'region3': 3,
      'region4': 4,
      'region5': 5,
    }
    return regionMap[activeTab] || null
  }

  const handleAreaClick = (regionName: string, districtName: string, areaName: string) => {
    setSelectedArea({ regionName, districtName, areaName })
  }

  const handleBackToRegions = () => {
    setSelectedArea(null)
  }

  const handleTabChange = (tab: string) => {
    if (tab === 'blog') {
      router.push('/blog')
      return
    }
    if (tab === 'course') {
      router.push('/course')
      return
    }
    setActiveTab(tab)
    setSelectedArea(null)
  }

  const renderContent = () => {
    const activeRegion = getActiveRegion()
    
    if (selectedArea) {
      return (
        <>
          <button
            onClick={handleBackToRegions}
            className="fixed top-24 left-4 z-50 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            ← 지역 목록으로
          </button>
          <RegionDetail
            regionName={selectedArea.regionName}
            districtName={selectedArea.districtName}
            areaName={selectedArea.areaName}
          />
        </>
      )
    }
    
    if (activeRegion) {
      return <Regions activeRegion={activeRegion} onAreaClick={handleAreaClick} />
    }

    // Default content for home tab
    return (
      <>
        <Hero />
        <Services />
        <Features />
        <Contact />
      </>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <RegionLinks />
      <div className="pt-20">
        {renderContent()}
      </div>
      <Footer />
    </main>
  )
}
