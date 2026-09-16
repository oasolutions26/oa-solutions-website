import { Link } from 'react-router-dom'
import SkipLink from '../components/SkipLink'
import Analytics from '../components/Analytics'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'
import PageSEO from '../components/PageSEO'
import HomeCtaBand from '../components/HomeCtaBand'
import { CORE_SERVICE_OFFERINGS } from '../content/coreServices'
import { servicesMeta, servicesPageJsonLd } from '../lib/seo'

export default function ServicesPage() {
  return (
    <>
      <PageSEO {...servicesMeta} jsonLd={servicesPageJsonLd()} />
      <Analytics />
      <SkipLink />
      <Navbar variant="home" />
      <main id="main">
        <section className="hero-glow relative bg-dark-950 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="section-label">Services</p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Custom software development, web apps, CRM, and automation
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-silver-400 md:text-xl">
              OA Solutions is a software development company focused on custom software development,
              custom web application development, CRM development, and business process automation.
              We scope every project clearly — fixed deliverables, direct access to the build team,
              and code you own at handoff.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-silver-400">
              Whether you need a customer portal, an internal operations tool, or automation that
              connects your CRM to billing and support, we design around how your business actually
              runs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary inline-flex justify-center rounded-full px-8 py-3.5 text-base">
                Get a Quote
              </Link>
              <Link to="/#industries" className="btn-secondary inline-flex justify-center rounded-full px-8 py-3.5 text-base">
                Browse by industry
              </Link>
            </div>
          </div>
        </section>

        <section className="section-alt relative py-24 md:py-32">
          <div className="relative mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              What we build
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-silver-400">
              Core offerings for teams that outgrow spreadsheets and one-size-fits-all SaaS.
            </p>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICE_OFFERINGS.map((service) => (
                <article key={service.title} className="glass-card rounded-2xl p-8">
                  <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-glow" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-silver-400">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-dark-950 py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              See work by industry
            </h2>
            <p className="mt-4 text-lg text-silver-400">
              Explore case-style examples on our industry pages — restaurants, retail, construction,
              freelancers, and more.
            </p>
            <Link
              to="/#industries"
              className="btn-secondary mt-8 inline-flex rounded-full px-8 py-3.5 text-base"
            >
              View industries & case studies
            </Link>
          </div>
        </section>

        <HomeCtaBand />
      </main>
      <Footer variant="home" />
      <MobileStickyBar />
    </>
  )
}
