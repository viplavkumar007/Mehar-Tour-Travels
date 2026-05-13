import React from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/sections/Hero'
import Services      from './components/sections/Services'
import About         from './components/sections/About'
import Destinations  from './components/sections/Destinations'
import Testimonials  from './components/sections/Testimonials'
import FAQ           from './components/sections/FAQ'
import ContactForm   from './components/sections/ContactForm'
import CTA           from './components/CTA'
import Footer        from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Destinations />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
