import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import TrustedBy from '@/components/TrustedBy/TrustedBy'
import Services from '@/components/Services/Services'
import About from '@/components/About/About'
import Features from '@/components/Features/Features'
import VideoIntro from '@/components/VideoIntro/VideoIntro'
import HappyClients from '@/components/HappyClients/HappyClients'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import BlogSection from '@/components/BlogSection/BlogSection'
import Testimonials from '@/components/Testimonials/Testimonials'
import FAQ from '@/components/FAQ/FAQ'
import MobileApp from '@/components/MobileApp/MobileApp'
import WhyRegisterKaro from '@/components/WhyRegisterKaro/WhyRegisterKaro'
import NewsletterCTA from '@/components/NewsletterCTA/NewsletterCTA'
import TrustedCompanies from '@/components/TrustedCompanies/TrustedCompanies'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <Features />
        <VideoIntro />
        <HappyClients />
        <ProcessSteps />
        <BlogSection />
        <Testimonials />
        <FAQ />
        <MobileApp />
        <WhyRegisterKaro />
        <NewsletterCTA />
        <TrustedCompanies />
      </main>
      <Footer />
    </>
  )
}

