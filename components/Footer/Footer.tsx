import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-white.png"
              alt="RegisterKaro"
              width={180}
              height={50}
              className="mb-6"
            />
            <p className="mb-6">
              Your trusted partner for business compliance needs. We help entrepreneurs and businesses with registrations,
              tax filings, and legal matters.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/company-formation" className="hover:text-white">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services/tax-filing" className="hover:text-white">
                  Tax Filing
                </Link>
              </li>
              <li>
                <Link href="/services/legal-services" className="hover:text-white">
                  Legal Services
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, New Delhi, India 110001</span>
              </li>
              <li>
                <Link href="mailto:info@registerkaro.in" className="flex items-center gap-3 hover:text-white">
                  <Mail className="w-5 h-5" />
                  info@registerkaro.in
                </Link>
              </li>
              <li>
                <Link href="tel:+918447746183" className="flex items-center gap-3 hover:text-white">
                  <Phone className="w-5 h-5" />
                  +91 844 774 6183
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} RegisterKaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

