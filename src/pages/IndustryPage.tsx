import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getIndustry } from '../content/industries'
import { IndustryProvider } from '../context/IndustryContext'
import SkipLink from '../components/SkipLink'
import Analytics from '../components/Analytics'
import Navbar from '../components/Navbar'
import IndustryTabs from '../components/IndustryTabs'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Integrations from '../components/Integrations'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import CtaBand from '../components/CtaBand'
import RoiCalculator from '../components/RoiCalculator'
import Faq from '../components/Faq'
import IndustryContact from '../components/IndustryContact'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = slug ? getIndustry(slug) : null

  useEffect(() => {
    document.documentElement.dataset.industryPage = 'true'
    return () => {
      delete document.documentElement.dataset.industryPage
    }
  }, [])

  if (!industry) {
    return <Navigate to="/" replace />
  }

  return (
    <IndustryProvider content={industry}>
      <Analytics />
      <SkipLink />
      <Navbar variant="industry" />
      <IndustryTabs />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <Integrations />
        <Work />
        <Testimonials />
        <WhyUs />
        <Process />
        <CtaBand />
        <RoiCalculator />
        <Faq />
        <IndustryContact />
        <Privacy />
      </main>
      <Footer variant="industry" />
      <MobileStickyBar />
    </IndustryProvider>
  )
}
