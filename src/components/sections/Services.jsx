import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { services } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotate: 0.5 }}
      className="card-glossy p-6 group cursor-default"
    >
      {/* Icon */}
      <div className={`glossy-icon bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg mb-4`}>
        <span className="text-2xl relative z-10">{service.icon}</span>
      </div>

      <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
      <p className="text-brand-navyLight/65 text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Features */}
      <ul className="space-y-1.5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-xs font-medium text-brand-navyLight/80">
            <CheckCircle2 size={13} className="text-brand-green flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* bottom accent bar */}
      <div className={`mt-5 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-60 
                       group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-brand-sky/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="section-title">Our Travel Services</h2>
          <p className="section-subtitle">
            Everything you need for the perfect journey — tickets, packages, hotels, and more.
            All under one roof in Jalandhar.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
