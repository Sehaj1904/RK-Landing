import { Building2, BarChart3, Users, Package, Globe, FileText } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { Button } from '@/components/ui/button'

export default function Services() {
  const services = [
    {
      icon: '/service1.svg',
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
      link: '/services/company-formation'
    },
    {
      icon: '/service2.svg',
      title: 'Company Secretarial Services',
      description: 'Steering user behaviours with creative design, data insights & technology.',
      link: '/services/company-secretarial'
    },
    {
      icon: '/service3.svg',
      title: 'Accounting Services',
      description: 'Expand your business across the globe with minimal effort.',
      link: '/services/accounting'
    },
    {
      icon: '/service4.svg',
      title: 'Tax Services',
      description: 'Expand your business across the globe with minimal effort.',
      link: '/services/tax'
    },
    {
      icon: '/service5.svg',
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
      link: '/services/payroll'
    },
    {
      icon: '/service6.svg',
      title: 'Bookkeeping Services',
      description: 'Steering user behaviours with creative design, data insights & technology.',
      link: '/services/bookkeeping'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-medium">WELCOME TO REGISTERKARO.IN</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Explore Our Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-[#2B4570] hover:bg-blue-900 text-white"
          >
            See All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

