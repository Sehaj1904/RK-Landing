'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16 bg-[#2B4570] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Video Introductions</h2>
            <p className="text-gray-300">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt
              apis dui.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
              <Image
                    src="/video1.svg"
                    alt="Video icon"
                    width={48}
                    height={48}
                  />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
              <Image
                    src="/video2.svg"
                    alt="Video icon"
                    width={48}
                    height={48}
                  />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/youtube.png"
              alt="Video thumbnail"
              fill
              className="rounded-lg object-cover"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-lg group"
            >
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <Play className="w-6 h-6" />
              </span>
            </button>
            {isPlaying && (
              <div className="absolute inset-0 bg-black rounded-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

