import SkipLink from '../components/SkipLink'
import Analytics from '../components/Analytics'
import Navbar from '../components/Navbar'
import HomeHero, { HomeAbout } from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import HomeIndustries from '../components/HomeIndustries'
import HomeProcess from '../components/HomeProcess'
import HomeCtaBand from '../components/HomeCtaBand'
import Contact from '../components/Contact'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'

export default function HomePage() {
  return (
    <>
      <Analytics />
      <SkipLink />
      <Navbar variant="home" />
      <main id="main">
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeIndustries />
        <HomeProcess />
        <HomeCtaBand />
        <Contact
          title="Ready to grow your business with technology?"
          subtitle="Tell us about your project — whether you know exactly what you need or just want to explore options. We respond within 24 hours."
        />
        <Privacy />
      </main>
      <Footer variant="home" />
      <MobileStickyBar />
    </>
  )
}
