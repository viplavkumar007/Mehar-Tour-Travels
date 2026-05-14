import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle } from 'lucide-react'
import { internationalPackages, brand } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

export default function Packages() {
  const [expanded, setExpanded] = useState(null)

  const whatsappUrl = (pkg) => {
    const msg = encodeURIComponent(
      `Hello Mehar Tour and Travels! I'm interested in the ${pkg.country} package (${pkg.duration}, starting ${pkg.startingPrice}/person). Please share more details.`
    )
    return `https://wa.me/${brand.whatsapp}?text=${msg}`
  }

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-white via-brand-sky/10 to-brand-sky/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            International Tours
          </span>
          <h2 className="section-title">Explore the World with Us</h2>
          <p className="section-subtitle">
            Handpicked international packages with flights, hotels, visa and sightseeing, all taken care of.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {internationalPackages.map((pkg, i) => {
            const isExpanded = expanded === pkg.id

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/70"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.country}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} via-brand-navy/25 to-transparent`} />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-navy shadow-md backdrop-blur">
                    <span>{pkg.flag}</span>
                    <span>{pkg.tagline}</span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{pkg.country}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-white/85">
                        <Clock size={13} />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/18 px-3 py-2 text-right text-white backdrop-blur">
                      <div className="text-[10px] uppercase tracking-wide text-white/70">From</div>
                      <div className="text-sm font-bold">{pkg.startingPrice}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-sky/60 px-3 py-1 text-xs font-semibold text-brand-navy">
                    <MapPin size={13} className="text-brand-orange" />
                    {pkg.places.join(' • ')}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {pkg.inclusions.map((inc) => (
                      <span
                        key={inc}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-brand-navy"
                      >
                        <CheckCircle2 size={10} className="text-brand-orange" />
                        {inc}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => setExpanded(isExpanded ? null : pkg.id)}
                      className="text-sm font-bold text-brand-blue transition-colors hover:text-brand-orange"
                    >
                      {isExpanded ? 'Hide highlights' : 'View highlights'}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2">
                        {pkg.highlights.map((highlight) => (
                          <li key={highlight} className="text-xs leading-snug text-brand-navyLight/80">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors group-hover:text-brand-orange"
                    >
                      Plan this trip
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                    <a
                      href={whatsappUrl(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600"
                    >
                      <MessageCircle size={14} />
                      Get Quote
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <ScrollReveal delay={0.2} className="text-center mt-10">
          <p className="text-brand-navyLight/60 text-sm">
            Want a custom itinerary?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-orange font-semibold hover:underline"
            >
              Tell us your dream destination!
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
