import SkipLink from './components/SkipLink'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Contact from './components/Contact'
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
        <Work />
        <Testimonials />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}
