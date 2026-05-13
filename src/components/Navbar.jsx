import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { brand } from '../data/siteContent'

const navLinks = [
  { href: '#home',         label: 'Home' },
  { href: '#services',     label: 'Services' },
  { href: '#about',        label: 'About' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── transparent when at top, glass when scrolled ── */
  const navBg = scrolled
    ? 'glass shadow-md shadow-brand-navy/10'
    : 'bg-transparent'

  return (
    <>
      {/* ── Desktop / large-screen Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}
                    hidden md:block`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}
             className="flex items-center gap-2 flex-shrink-0">
            <img src={brand.logo} alt={brand.name} className="h-12 w-auto drop-shadow-md" />
          </a>

          {/* Links */}
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`nav-link px-3 py-1.5 rounded-lg
                    ${scrolled ? 'text-brand-navy hover:text-brand-orange'
                               : 'text-white hover:text-orange-300'}
                    ${activeSection === href.replace('#','') ? 'text-brand-orange' : ''}`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange rounded-full transition-all duration-300
                    ${activeSection === href.replace('#','') ? 'w-full' : 'w-0'}`} />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href={`tel:${brand.phone}`}
             className="btn-primary text-sm py-2.5 px-5">
            <Phone size={15} />
            {brand.phoneDisplay}
          </a>
        </div>
      </motion.nav>

      {/* ── Mobile Navbar ── ALWAYS visible, above hero, not overlapping ── */}
      <div className="md:hidden sticky top-0 z-50 glass shadow-md shadow-brand-navy/10">
        <div className="flex items-center justify-between px-4 h-14">
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}>
            <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2 rounded-xl text-brand-navy hover:bg-brand-blueLight transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="px-4 py-3 space-y-1">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors
                        ${activeSection === href.replace('#','')
                          ? 'bg-brand-blueLight text-brand-blue'
                          : 'text-brand-navy hover:bg-gray-50'}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a href={`tel:${brand.phone}`} className="btn-primary w-full justify-center text-sm py-2.5">
                    <Phone size={15} />
                    Call Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
