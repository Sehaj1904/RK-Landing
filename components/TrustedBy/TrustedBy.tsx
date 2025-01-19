import Image from 'next/image'

export default function TrustedBy() {

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Trusted By Over 100+ Startups and freelance business
        </h2>
        <div className="relative w-full h-[200px]">
          <Image
            src="/company-logos.svg"
            alt="Company logos"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

