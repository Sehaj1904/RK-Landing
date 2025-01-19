import Image from 'next/image'
import Link from 'next/link'

const clientLogos = [
  { name: 'Dropbox', logo: '/client-logos/dropbox.svg' },
  { name: 'Pinterest', logo: '/client-logos/pinterest.svg' },
  { name: 'Shopify', logo: '/client-logos/shopify.svg' },
  { name: 'Microsoft', logo: '/client-logos/microsoft.svg' },
  { name: 'GitLab', logo: '/client-logos/gitlab.svg' },
  { name: 'Hashicorp', logo: '/client-logos/hashicorp.svg' },
  // Add more logos as needed
]

export default function HappyClients() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
            customer service for state of the art customer service.
          </p>
        </div>

            <Image 
              src="/happy-clients.png"
              alt="Happy clients logos"
              width={1200}
              height={200}
              className="object-contain"
            />
      </div>
    </section>
  )
}

