'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone, Search } from 'lucide-react'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-[#2B4570] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
          <Link href="mailto:www.registerkaro.in" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            www.registerkaro.in
          </Link>
          <Link href="tel:+918447746183" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +918447746183
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <header className="w-full bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="RegisterKaro"
              width={200}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-orange-500">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-800 hover:text-orange-500 flex items-center gap-1"
              >
                Our Services
                <span className="ml-1">▼</span>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 2
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-gray-800 hover:text-orange-500">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-orange-500">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-orange-500">
              About us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:text-orange-500">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/talk-to-expert"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Talk An Expert
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

