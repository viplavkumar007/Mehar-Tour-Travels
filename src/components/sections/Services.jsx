import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

function IllustrationBase({ children, viewBox = '0 0 96 96' }) {
  return (
    <svg viewBox={viewBox} className="h-[4.6rem] w-[4.6rem]" aria-hidden="true">
      {children}
    </svg>
  )
}

const iconMap = {
  flight: function FlightIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="74" rx="25" ry="6" fill="#D8E7F8" />
        <path d="M18 53h59c4 0 7 3 7 7H12c0-4 3-7 6-7Z" fill="#B7CBE4" />
        <path d="M19 48 45 23c3-3 8-4 12-2l23 10c4 2 5 7 2 10l-9 8H48L33 64H24l8-11-13-1Z" fill="#EFF7FF" />
        <path d="M54 25c2-1 5-1 8 0l16 7c2 1 2 4 0 5l-10 4H50l4-16Z" fill="#5D95CC" />
        <path d="M30 50 18 53l16 1-4 10h11l8-14H30Z" fill="#6EA7DC" />
        <circle cx="56" cy="34" r="3" fill="#1A6DB5" />
        <rect x="42" y="42" width="22" height="4" rx="2" fill="#9FB7D4" />
      </IllustrationBase>
    )
  },
  hotel: function HotelIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="77" rx="22" ry="5" fill="#F1D7DE" />
        <rect x="28" y="24" width="40" height="46" rx="6" fill="#F57C73" />
        <rect x="34" y="12" width="28" height="10" rx="5" fill="#3B8AE0" />
        <rect x="38" y="15" width="20" height="4" rx="2" fill="#EAF5FF" />
        <rect x="44" y="55" width="8" height="15" rx="2" fill="#FFE6C7" />
        <g fill="#FDE8B8">
          <rect x="35" y="30" width="7" height="7" rx="1.5" />
          <rect x="46" y="30" width="7" height="7" rx="1.5" />
          <rect x="57" y="30" width="7" height="7" rx="1.5" />
          <rect x="35" y="42" width="7" height="7" rx="1.5" />
          <rect x="46" y="42" width="7" height="7" rx="1.5" />
          <rect x="57" y="42" width="7" height="7" rx="1.5" />
        </g>
        <rect x="25" y="70" width="46" height="4" rx="2" fill="#92C86C" />
      </IllustrationBase>
    )
  },
  rail: function RailIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="78" rx="21" ry="5" fill="#D6F0D0" />
        <rect x="27" y="20" width="42" height="44" rx="10" fill="#F35F4C" />
        <rect x="33" y="28" width="12" height="13" rx="3" fill="#FFF4E8" />
        <rect x="51" y="28" width="12" height="13" rx="3" fill="#FFF4E8" />
        <rect x="37" y="49" width="22" height="5" rx="2.5" fill="#FAD26A" />
        <circle cx="37" cy="60" r="4" fill="#43536B" />
        <circle cx="59" cy="60" r="4" fill="#43536B" />
        <path d="M39 64 29 76h8l10-9 10 9h8L55 64H39Z" fill="#384A5F" />
        <circle cx="43" cy="23" r="2" fill="#FFF4E8" />
        <circle cx="53" cy="23" r="2" fill="#FFF4E8" />
      </IllustrationBase>
    )
  },
  bus: function BusIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="78" rx="23" ry="5" fill="#F6E1AB" />
        <rect x="23" y="18" width="50" height="48" rx="8" fill="#85B84A" />
        <rect x="30" y="25" width="36" height="20" rx="4" fill="#5B5E7A" />
        <path d="M30 25h36v7H30z" fill="#707591" />
        <rect x="38" y="14" width="20" height="6" rx="2" fill="#5D684C" />
        <rect x="30" y="49" width="36" height="8" rx="4" fill="#C7DA8D" />
        <circle cx="34" cy="66" r="5" fill="#40485A" />
        <circle cx="62" cy="66" r="5" fill="#40485A" />
        <circle cx="34" cy="66" r="2" fill="#E7EDF3" />
        <circle cx="62" cy="66" r="2" fill="#E7EDF3" />
      </IllustrationBase>
    )
  },
  insurance: function InsuranceIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="79" rx="20" ry="4.5" fill="#D8EFFE" />
        <path d="M48 17 72 26v19c0 16-11 27-24 33-13-6-24-17-24-33V26l24-9Z" fill="#9ADAFF" />
        <path d="M48 25 65 31v15c0 11-7 20-17 25-10-5-17-14-17-25V31l17-6Z" fill="#EEF8FF" />
        <path d="m39 48 7 7 13-15" fill="none" stroke="#6656B7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </IllustrationBase>
    )
  },
  visa: function VisaIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="79" rx="20" ry="4.5" fill="#E6E9F9" />
        <rect x="28" y="21" width="30" height="46" rx="4" fill="#67A7DC" />
        <rect x="31" y="24" width="24" height="40" rx="3" fill="#F2FAFF" />
        <circle cx="43" cy="39" r="10" fill="none" stroke="#314D6B" strokeWidth="3" />
        <path d="M33 39h20M43 29c3 4 4 8 4 10s-1 6-4 10M39 29c-3 4-4 8-4 10s1 6 4 10" stroke="#314D6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 31h12l5 7-17 8V31Z" fill="#FFD86C" />
        <path d="m67 38 3 3 5-6" fill="none" stroke="#F58A1F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 55h16" stroke="#9FC0DD" strokeWidth="3" strokeLinecap="round" />
      </IllustrationBase>
    )
  },
  holiday: function HolidayIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="79" rx="20" ry="4.5" fill="#FFE2C9" />
        <path d="M29 55c6-14 14-21 24-21 6 0 12 2 17 7" fill="none" stroke="#F15849" strokeWidth="4" strokeLinecap="round" />
        <path d="M37 55c4-8 8-12 15-12 6 0 11 4 15 12" fill="none" stroke="#4AB8E5" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 30v29" stroke="#6BBE5A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M50 30c5 1 11 4 17 9-5 4-11 7-17 8" fill="#7CD85D" />
        <path d="M50 30c-5 1-11 4-17 9 5 4 11 7 17 8" fill="#7DD6FF" />
        <circle cx="31" cy="30" r="6" fill="#FFD768" />
        <path d="M22 61h49" stroke="#2FA45A" strokeWidth="3.5" strokeLinecap="round" />
      </IllustrationBase>
    )
  },
  pilgrimage: function PilgrimageIcon() {
    return (
      <IllustrationBase>
        <ellipse cx="48" cy="79" rx="21" ry="5" fill="#E2F0D8" />
        <path d="M24 60h48" stroke="#68B26B" strokeWidth="4" strokeLinecap="round" />
        <path d="M34 60V40l14-12 14 12v20" fill="#FFE7B0" />
        <path d="M39 39h18" stroke="#D87C28" strokeWidth="4" strokeLinecap="round" />
        <path d="M48 20v12" stroke="#D87C28" strokeWidth="4" strokeLinecap="round" />
        <path d="M43 25h10" stroke="#D87C28" strokeWidth="4" strokeLinecap="round" />
        <rect x="44" y="47" width="8" height="13" rx="2" fill="#D27A32" />
        <path d="M30 60c3-8 7-13 12-16" stroke="#8CC96F" strokeWidth="4" strokeLinecap="round" />
        <path d="M66 60c-3-8-7-13-12-16" stroke="#8CC96F" strokeWidth="4" strokeLinecap="round" />
      </IllustrationBase>
    )
  },
}

const serviceBoard = [
  {
    id: 'flight',
    sourceTitle: 'Air Tickets',
    label: 'Flight',
    circleClass: 'from-slate-50 to-blue-100 text-brand-blue',
  },
  {
    id: 'hotel',
    sourceTitle: 'Hotel Booking',
    label: 'Hotel',
    circleClass: 'from-rose-50 to-orange-100 text-brand-orange',
  },
  {
    id: 'rail',
    sourceTitle: 'Railway Tickets',
    label: 'Rail',
    circleClass: 'from-lime-50 to-green-100 text-brand-green',
  },
  {
    id: 'bus',
    sourceTitle: 'Bus Tickets',
    label: 'Bus',
    circleClass: 'from-amber-50 to-yellow-100 text-brand-orange',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    description:
      'Comprehensive travel cover for medical emergencies, baggage loss, and trip changes.',
  },
  {
    id: 'visa',
    label: 'Visa',
    description:
      'Documentation and application support for popular international destinations.',
  },
  {
    id: 'holiday',
    sourceTitle: 'Group Packages',
    label: 'Holidays',
  },
  {
    id: 'pilgrimage',
    sourceTitle: 'Pilgrimage Tours',
    label: 'Yatras',
  },
]

function ServiceTile({ item, index, description }) {
  const Illustration = iconMap[item.id]
  const isTopRow = index < 4

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center text-center"
      title={description}
    >
      {isTopRow ? (
        <div
          className={`mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br ${item.circleClass} shadow-[0_18px_35px_rgba(26,109,181,0.16)] transition-transform duration-300 group-hover:scale-105`}
        >
          <Illustration />
        </div>
      ) : (
        <div
          className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-[0_14px_30px_rgba(15,74,128,0.10)] ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-105"
        >
          <Illustration />
        </div>
      )}

      <h3 className="font-body text-2xl md:text-[2rem] font-medium tracking-tight text-brand-navy">
        {item.label}
      </h3>
      <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-brand-navyLight/60">
        {description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const serviceLookup = Object.fromEntries(services.map(service => [service.title, service]))

  const boardItems = serviceBoard.map(item => {
    const source = item.sourceTitle ? serviceLookup[item.sourceTitle] : null

    return {
      ...item,
      description: item.description ?? source?.description ?? '',
    }
  })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#edf7ff_48%,#ffffff_100%)] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">
            What We Offer
          </span>
          <h2 className="section-title">Our Travel Services</h2>
          <p className="section-subtitle">
            Ticketing, stays, visa help, yatras, and holiday planning in one easy place for
            travellers across India and abroad.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute inset-x-12 top-10 h-40 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-brand-orange/10 blur-3xl" />

          <div className="relative rounded-[2.5rem] border border-white/80 bg-white/95 px-6 pb-16 pt-10 shadow-[0_30px_90px_rgba(15,74,128,0.16)] backdrop-blur-sm sm:px-10 md:px-14 md:pb-20 md:pt-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
              {boardItems.map((item, index) => (
                <ServiceTile
                  key={item.id}
                  item={item}
                  index={index}
                  description={item.description}
                />
              ))}
            </div>

            <div className="absolute inset-x-0 -bottom-8 flex justify-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-2xl font-medium tracking-tight text-brand-blue shadow-[0_18px_45px_rgba(15,74,128,0.18)] ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:text-brand-orange"
              >
                More Services
                <ArrowRight size={26} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
