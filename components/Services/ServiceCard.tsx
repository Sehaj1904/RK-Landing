import Image from 'next/image'
import Link from 'next/link'
import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
      <div className="mb-4 text-[#FFA229]">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={link}
        className="inline-flex items-center text-[#2B4570] hover:text-[#FFA229] font-medium"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

