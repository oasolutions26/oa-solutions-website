import { Link } from 'react-router-dom'
import SkipLink from '../components/SkipLink'
import Analytics from '../components/Analytics'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'
import PageSEO from '../components/PageSEO'
import { HomeAbout } from '../components/HomeHero'
import HomeProcess from '../components/HomeProcess'
import { aboutMeta, localBusinessJsonLd, organizationJsonLd } from '../lib/seo'

export default function AboutPage() {
  return (
    <>
      <PageSEO
        {...aboutMeta}
        jsonLd={[organizationJsonLd(), localBusinessJsonLd()]}
      />
      <Analytics />
      <SkipLink />
      <Navbar variant="home" />
      <main id="main">
        <section className="hero-glow relative bg-dark-950 pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="section-label">About</p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              A software development company built for owner-operators
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-silver-400 md:text-xl">
              OA Solutions partners with businesses across Ontario on custom software development,
              web application development, CRM development, and business process automation. You
              work directly with the people designing and building your product — not a handoff
              chain.
            </p>
            <Link
              to="/services"
              className="btn-secondary mt-8 inline-flex rounded-full px-8 py-3.5 text-base"
            >
              View our services
            </Link>
          </div>
        </section>
        <HomeAbout />
        <HomeProcess />
      </main>
      <Footer variant="home" />
      <MobileStickyBar />
    </>
  )
}
