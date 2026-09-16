import SkipLink from '../components/SkipLink'
import Analytics from '../components/Analytics'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'
import Contact from '../components/Contact'
import PageSEO from '../components/PageSEO'
import { contactMeta, organizationJsonLd } from '../lib/seo'

export default function ContactPage() {
  return (
    <>
      <PageSEO {...contactMeta} jsonLd={organizationJsonLd()} />
      <Analytics />
      <SkipLink />
      <Navbar variant="home" />
      <main id="main">
        <section className="relative bg-dark-950 pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <p className="section-label">Contact</p>
            <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Talk to our software development team
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-silver-400">
              Tell us about your custom software, web app, CRM, or automation project. We respond
              within 24 hours — or book a discovery call on Google Calendar.
            </p>
          </div>
        </section>
        <Contact
          title="Ready to start your project?"
          subtitle="Share your goals, timeline, and budget range. We will follow up with clear next steps — no hard sell."
        />
      </main>
      <Footer variant="home" />
      <MobileStickyBar />
    </>
  )
}
