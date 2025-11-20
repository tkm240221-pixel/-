'use client'

import Link from 'next/link'
import { regionSlugMap } from '@/lib/region-mapping'

export default function RegionLinks() {
  return (
    <div className="hidden">
      {Object.entries(regionSlugMap).map(([regionName, slug]) => (
        <Link 
          key={slug} 
          href={`/${slug}`}
          title={`${regionName}출장마사지 ${regionName}출장안마 ${regionName}출장 후불제 20대 관리사`}
        >
          {regionName}출장마사지
        </Link>
      ))}
    </div>
  )
}
