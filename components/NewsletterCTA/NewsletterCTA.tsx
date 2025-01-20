'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#2B4570]" />

      <div className="relative container mx-auto px-4 text-center text-white">
        <p className="text-sm font-medium mb-4">1% OF THE INDUSTRY</p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Welcome to your new digital reality. Now.
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
          {['Instant results', 'User-friendly interface', 'Personalized customization'].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <Image src="/tick-icon.svg" alt="Tick" width={20} height={20} className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 