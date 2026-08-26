import SkipLink from './components/SkipLink'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Integrations from './components/Integrations'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import CtaBand from './components/CtaBand'
import RoiCalculator from './components/RoiCalculator'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
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
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}
