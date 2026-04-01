import React, { useEffect, useState } from 'react'
import kumunLogo from './assets/KUMUNlogo.png'
import universityLogo from './assets/karabakh-university.png'
import ministryLogo from './assets/tehsil-nazirliyi-eng.png'
import enMainLogo from './assets/enmain.png'
import az from './assets/az.webp'
import unImage from './assets/un.png'
import unescoImage from './assets/unesco.png'
import icjImage from './assets/icj.png'

const content = {
  en: {
    nav: [
      { href: '#overview', label: 'Overview' },
      { href: '#about', label: 'About' },
      { href: '#goals', label: 'Goals' },
      { href: '#committees', label: 'Committees' },
      { href: '#partners', label: 'Partners' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      kicker: '1st Karabakh University Model UN Conference',
      title: 'KUMUN 2026',
      subtitle: 'Karabakh University, Khankendi, Azerbaijan',
      description:
        'Organized by the International Youth Dialogue Platform (IYDP), with the support of the Ministry of Science and Education of Azerbaijan and in partnership with Karabakh University, KUMUN 2026 brings national and international young leaders together to discuss regional and global challenges, exchange ideas, and explore collaboration opportunities.',
    },
    buttons: {
      apply: 'Apply Now',
      partner: 'Partnership',
      mail: 'Contact the Team',
    },
    conferenceInfoTitle: 'CONFERENCE INFO',
    conferenceInfo: [
      { label: 'Location', value: 'Karabakh University, Khankendi' },
      { label: 'Dates', value: 'May 29-31, 2026' },
      { label: 'Working Language', value: 'English' },
      { label: 'Included', value: 'Accommodation, meals, materials, Baku-Khankendi transport' },
    ],
    applicationsTitle: 'APPLICATION WINDOW',
    applications: [
      { role: 'Applications Individual Delegates', date: 'Deadline: April 15, 2026' }, { role: 'Applications Chairs & Directors', date: 'Deadline: April 5, 2026' }
    ],
    highlightsTitle: 'CONFERENCE HIGHLIGHTS',
    highlights: [
      { value: '120+', label: 'LOCAL AND INTERNATIONAL Participants', sub: '' },
      { value: '4', label: 'UN Committees', sub: 'UNSC, UNESCO, ICJ, ECOSOC' },
      { value: '20+', label: 'Countries to be represented', sub: '' },
      { value: '30+', label: 'Universities to be involved', sub: '' },
    ],
    committeesTitle: 'COMMITTEES TO BE SIMULATED',
    committees: [
      { name: 'UN Security Council (UNSC)', image: unImage, link: 'https://www.un.org/securitycouncil/' },
      { name: 'UNESCO', image: unescoImage, link: 'https://www.unesco.org/' },
      { name: 'International Court of Justice (ICJ)', image: icjImage, link: 'https://www.icj-cij.org/' },
      { name: 'Economic and Social Council (ECOSOC)', image: unImage, link: 'https://ecosoc.un.org/' },
    ],
    problemTitle: 'About',
    problemText: [
      ' The Karabakh University International Model United Nations Conference(KUMUN 2026) marks a historic milestone as the first international MUN conference hosted in Khankendi, Azerbaijan.Taking place from May 29–31, 2026, this landmark event will bring together ambitious students, young professionals, and future leaders from around the world to engage in high - level diplomatic dialogue, legal analysis, and collaborative problem - solving.',
      'Organized by the International Youth Dialogue Platform (IYDP), with the support of the Ministry of Science and Education of the Republic of Azerbaijan, and hosted by Karabakh University, KUMUN 2026 provides a dynamic and intellectually rigorous platform for participants to explore pressing global challenges.'
    ],
    goalsTitle: 'GOALS',
    goalsIntro:
      'KUMUN 2026 aims to empower youth, support regional development in Karabakh, and foster international dialogue by bringing together young leaders to collaborate, learn, and contribute to global and local progress.',
    results: [
      { title: 'Supporting the Great Return Program', desc: 'Contributing to the socio-economic integration of the Karabakh and Eastern Zangezur economic regions by engaging local and international youth and promoting ongoing reconstruction and development projects on a global stage.' },
      { title: 'Human Capital Development', desc: 'Empowering students and youth from the region and beyond by strengthening their leadership, knowledge, and practical skills, including drafting official documents in line with United Nations standards.' },
      { title: 'International Dialogue & Cooperation', desc: 'Bringing together young leaders from around the world to foster dialogue, collaboration, and academic exchange, while positioning the region as a hub for peace and cooperation.' },
    ],
    partnersTitle: 'ORGANIZER AND PARTNERS',
    footer: '© 2026 KUMUN • International Youth Dialogue Platform',
  },
}

const partners = [
  { name: 'Ministry of Education', logo: ministryLogo },
  { name: 'IYDP', logo: enMainLogo },
  { name: 'Karabakh University', logo: universityLogo },
]

const accentColors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)']

const getCountdown = () => {
  const now = new Date()
  const year = now.getFullYear()
  const targetThisYear = new Date(year, 4, 29, 9, 0, 0, 0)
  const targetDate = now > targetThisYear ? new Date(year + 1, 4, 29, 9, 0, 0, 0) : targetThisYear
  const diffMs = Math.max(0, targetDate - now)
  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  return { days, hours, minutes, targetDate }
}

const padTime = value => String(value).padStart(2, '0')

const formatDays = value => String(value)

export default function App() {
  const t = content.en
  const [menuOpen, setMenuOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getCountdown())

  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getCountdown())
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div lang="en" className="min-h-screen text-[var(--text)] relative z-0">

      {/* Light Blur Overlay for readability while keeping it stunning */}
      <div lang="en" className="fixed inset-0 z-[-1] bg-white/10 backdrop-blur-[6px]" />

      {/* Subtle color splashes matching brand colors */}
      <div lang="en" className="pointer-events-none fixed inset-0 overflow-hidden z-[0]">
        <div lang="en" className="absolute -top-16 -right-10 h-64 w-64 rotate-12 rounded-3xl bg-[var(--c1)]/20 blur-3xl" />
        <div lang="en" className="absolute top-1/3 -left-16 h-72 w-72 -rotate-6 rounded-3xl bg-[var(--c2)]/15 blur-3xl" />
        <div lang="en" className="absolute bottom-10 right-1/4 h-64 w-64 rotate-3 rounded-3xl bg-[var(--c3)]/15 blur-3xl" />
      </div>

      <div lang="en" className="fixed top-0 left-0 right-0 z-50 flex h-1">
        <div lang="en" className="flex-1 bg-[var(--c1)]" />
        <div lang="en" className="flex-1 bg-[var(--c2)]" />
        <div lang="en" className="flex-1 bg-[var(--c3)]" />
        <div lang="en" className="flex-1 bg-[var(--c4)]" />
      </div>

      <header lang="en" className="sticky top-0 z-40 bg-[var(--surface)]/90 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.06)] border-b border-white">
        <div lang="en" className="mx-auto w-[90%] max-w-[1400px] py-4">
          <div lang="en" className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div lang="en" className="flex items-center justify-between gap-4 md:justify-start">
              <div lang="en" className="text-left leading-snug">
                <p lang="en" className="text-sm font-semibold text-[var(--text)] sm:text-base">1st Karabakh University</p>
                <p lang="en" className="text-sm font-semibold text-[var(--text)] sm:text-base">International Model UN Conference</p>
              </div>

              <button
                type="button"
                lang="en"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-xs font-semibold text-[var(--text)] shadow-sm transition hover:bg-white md:hidden"
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen(prev => !prev)}
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" lang="en" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" lang="en" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>

            <nav
              id="primary-navigation"
              lang="en"
              className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-3 border-t border-white/70 pt-4 text-sm font-medium text-[var(--muted)] md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0`}
            >
              {t.nav.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  lang="en"
                  className="transition hover:text-[var(--text)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main lang="en" className="relative z-10">
        <section id="overview" lang="en" className="hero mt-6 scroll-mt-24 md:scroll-mt-28">
          <div lang="en" className="hero-media">
            <img src={az} alt="" />
            <div lang="en" className="hero-overlay" />
          </div>
          <div lang="en" className="mx-auto w-[90%] max-w-[1400px] hero-content">
            <div lang="en" className="text-white text-center sm:text-left">
              <div lang="en" className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">

                <img src={kumunLogo} alt="KUMUN logo" lang="en" className="h-20 w-20 object-contain md:h-40 md:w-40" />

                <div>
                  <p lang="en" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:tracking-[0.32em]">{t.hero.kicker}</p>
                  <h1 lang="en" className="title-standard mt-3 drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                    {t.hero.title}
                  </h1>
                </div>
              </div>
              <p lang="en" className="mt-4 text-sm font-semibold text-white/80">{t.hero.subtitle}</p>
              <p lang="en" className="mt-5 max-w-xl text-base text-white/90 md:text-lg">
                {t.hero.description}
              </p>
              <div lang="en" className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                <a href="https://forms.gle/DTo5k7ep6uHHxWUS9" target="_blank" rel="noopener noreferrer" lang="en" className="btn btn-primary">
                  Apply as a Delegate

                </a>
                <a href="https://forms.gle/PNX5nDcyXuxXZY866" target="_blank" rel="noopener noreferrer" lang="en" className="btn btn-glass">
                  Apply as a Chair & Director
                </a>
              </div>
            </div>
            <div lang="en" className="hero-panel p-6 text-white md:p-8">
              <div lang="en" className="section-heading">
                <p lang="en" className="section-kicker section-kicker-light">{t.applicationsTitle}</p>
                <h2 lang="en" className="title-standard">Key Dates</h2>
              </div>
              <div lang="en" className="mt-5 space-y-3">
                {t.applications.map(item => (
                  <div key={item.role} lang="en" className="bg-white/10 p-4">
                    <p lang="en" className="text-sm font-semibold text-white">{item.role}</p>
                    <p lang="en" className="text-sm text-white/80">{item.date}</p>
                  </div>
                ))}
              </div>
              <div lang="en" className="mt-6 bg-white/10 p-4">
                <p lang="en" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Conference Dates</p>
                <p lang="en" className="mt-2 text-lg font-semibold text-white">May 29-31, 2026</p>
                <p lang="en" className="text-sm text-white/80">Khankendi, Azerbaijan</p>
              </div>
              <a href="mailto:kumun@iydp.org" lang="en" className="btn btn-glass mt-6 w-full">
                {t.buttons.mail}
              </a>
            </div>
          </div>
        </section>

        <section id="overview-info" lang="en" className="mx-auto w-[90%] max-w-[1400px] pt-10 scroll-mt-24 md:scroll-mt-28">
          <div lang="en" className="mt-6 grid gap-6 lg:grid-cols-2">
            <div lang="en" className="rounded-3xl bg-[var(--surface)]/90 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <h2 lang="en" className="title-standard text-[var(--c4)] mb-6">
                {t.conferenceInfoTitle}
              </h2>
              <div lang="en" className="grid gap-4 sm:grid-cols-2">
                {t.conferenceInfo.map(item => (
                  <div key={item.label} lang="en" className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 shadow-[0_10px_22px_rgba(15,23,42,0.04)] border border-white transition hover:bg-white/80">
                    <p lang="en" className="text-xs font-bold uppercase text-[var(--muted)]">{item.label}</p>
                    <p lang="en" className="mt-2 text-sm font-semibold text-[var(--text)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div lang="en" className="rounded-3xl bg-[var(--surface)]/90 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <h2 lang="en" className="title-standard text-[var(--c1)] mb-6">
                {t.highlightsTitle || 'CONFERENCE HIGHLIGHTS'}
              </h2>
              <div lang="en" className="grid gap-4 sm:grid-cols-2">
                {t.highlights.map((item, index) => (
                  <div key={item.label} lang="en" className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] border border-white transition hover:bg-white/80">
                    <span
                      lang="en" className="absolute left-0 top-0 h-full w-1.5"
                      style={{ backgroundColor: accentColors[index % accentColors.length] }}
                    />
                    <p lang="en" className="text-3xl font-black text-[var(--text)]">{item.value}</p>
                    <p lang="en" className="text-xs font-bold uppercase text-[var(--muted)] mt-1">{item.label}</p>
                    <p lang="en" className="mt-1 text-xs text-[var(--muted)]">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" lang="en" className="mx-auto w-[90%] max-w-[1400px] py-14">
          <div lang="en" className="rounded-3xl bg-[var(--surface)]/80 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10 transition hover:bg-[var(--surface)]/95">

            <h2 lang="en" className="title-standard mt-4 text-[var(--c3)]">{t.problemTitle}</h2>
            <div lang="en" className="mt-6 space-y-4 text-[var(--muted)] text-lg">
              {t.problemText.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="countdown" lang="en" className="relative w-full py-16 mt-6">
          <div lang="en" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,150,214,0.12),rgba(106,160,63,0.1),rgba(216,92,80,0.1))]" />
          <div lang="en" className="relative mx-auto w-[90%] max-w-[1400px]">
            <div lang="en" className="w-full overflow-hidden rounded-[32px] border border-white/60 bg-[var(--surface)]/70 p-10 text-center shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-14 transition-all hover:bg-[var(--surface)]/80">
              <h2 lang="en" className="title-standard text-[var(--c1)]">
                COUNTDOWN
              </h2>
              <div lang="en" className="mt-8 flex items-center justify-center">
                <div lang="en" className="flex flex-row items-center justify-center text-center gap-2 sm:gap-4 md:gap-6 rounded-[28px] bg-white/80 backdrop-blur-sm px-6 py-5 shadow-[0_12px_26px_rgba(15,23,42,0.06)] border border-white md:px-12 md:py-8">
                  <div lang="en" className="flex flex-col items-center">
                    <span lang="en" className="text-[clamp(2.5rem,8vw,5.6rem)] font-semibold leading-none text-[var(--c1)] tabular-nums tracking-tight">{formatDays(timeLeft.days)}</span>
                    <span lang="en" className="text-xs sm:text-sm font-bold text-[var(--muted)] uppercase tracking-wider mt-2 md:mt-4">days</span>
                  </div>
                  <span lang="en" className="text-[clamp(1.5rem,6vw,4rem)] font-light leading-none text-[var(--text)]/30 sm:mt-[-1rem]">:</span>
                  <div lang="en" className="flex flex-col items-center">
                    <span lang="en" className="text-[clamp(2.5rem,8vw,5.6rem)] font-semibold leading-none text-[var(--c3)] tabular-nums tracking-tight">{padTime(timeLeft.hours)}</span>
                    <span lang="en" className="text-xs sm:text-sm font-bold text-[var(--muted)] uppercase tracking-wider mt-2 md:mt-4">hours</span>
                  </div>
                  <span lang="en" className="text-[clamp(1.5rem,6vw,4rem)] font-light leading-none text-[var(--text)]/30 sm:mt-[-1rem]">:</span>
                  <div lang="en" className="flex flex-col items-center">
                    <span lang="en" className="text-[clamp(2.5rem,8vw,5.6rem)] font-semibold leading-none text-[var(--c4)] tabular-nums tracking-tight">{padTime(timeLeft.minutes)}</span>
                    <span lang="en" className="text-xs sm:text-sm font-bold text-[var(--muted)] uppercase tracking-wider mt-2 md:mt-4">minutes</span>
                  </div>
                </div>
              </div>
              <p lang="en" className="mt-8 text-sm font-semibold text-[var(--muted)] tracking-wide">
                May 29-31, 2026
              </p>
            </div>
          </div>
        </section>

        <section id="goals" lang="en" className="mx-auto w-[90%] max-w-[1400px] py-14">
          <div lang="en" className="rounded-3xl bg-[var(--surface)]/80 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10 transition hover:bg-[var(--surface)]/95">
            <h2 lang="en" className="title-standard mt-0 text-[var(--text)]">{t.goalsTitle}</h2>
            <p lang="en" className="mt-6 text-[var(--text)] font-medium text-lg">{t.goalsIntro}</p>
            <ul lang="en" className="mt-6 space-y-3 text-[var(--muted)] text-base">
              {t.results.map(item => (
                <li key={item.title} lang="en" className="flex items-start gap-4 bg-white/40 p-4 rounded-xl border border-white/50 backdrop-blur-sm">
                  <span lang="en" className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--c2)] shadow-sm flex-shrink-0" />
                  <div lang="en" className="flex flex-col">
                    <span lang="en" className="font-bold text-[var(--text)]">{item.title}</span>
                    <span lang="en" className="mt-1">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="committees" lang="en" className="mx-auto w-[90%] max-w-[1400px] py-14">
          <div lang="en" className="rounded-3xl bg-[var(--surface)]/80 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10 transition hover:bg-[var(--surface)]/95">
            <h2 lang="en" className="title-standard mt-0 text-[var(--text)]">{t.committeesTitle}</h2>
            <div lang="en" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.committees.map((item, index) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  lang="en" className="relative overflow-hidden flex flex-col items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md border border-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(15,23,42,0.1)] gap-5 text-center group"
                >
                  <span
                    lang="en" className="absolute left-0 top-0 h-1.5 w-full"
                    style={{ backgroundColor: accentColors[index % accentColors.length] }}
                  />
                  <img src={item.image} alt={item.name} lang="en" className="h-20 w-auto object-contain drop-shadow-sm mix-blend-multiply group-hover:scale-105 transition-transform" />
                  <p lang="en" className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--c2)] transition-colors">{item.name}</p>
                </a>
              ))}
            </div>
            <div lang="en" className="mt-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white p-5 text-sm text-[var(--text)] font-medium shadow-[0_12px_26px_rgba(15,23,42,0.04)] text-center">
              The conference will last 3 days and each committee will adopt a final draft resolution.
            </div>
          </div>
        </section>



        <section id="partners" lang="en" className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-6">
          <div lang="en" className="rounded-3xl bg-[var(--surface)]/50 backdrop-blur-lg border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:p-10 transition hover:bg-[var(--surface)]/70">
            <h2 lang="en" className="title-standard mt-2">{t.partnersTitle}</h2>
            <div lang="en" className="mt-10 flex flex-wrap justify-center items-stretch gap-6 max-w-5xl mx-auto">
              {partners.map(item => (
                <div key={item.name} lang="en" className="flex items-center justify-center w-full sm:w-[calc(50%-0.75rem)] lg:w-72 rounded-2xl bg-white/70 backdrop-blur-md border border-white p-6 shadow-sm transition hover:scale-105 hover:bg-white/90">
                  <img
                    src={item.logo}
                    alt={item.name}
                    lang="en" className="h-20 w-auto object-contain drop-shadow-[0_4px_8px_rgba(15,23,42,0.1)] contrast-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" lang="en" className="mx-auto w-[90%] max-w-[1400px] pb-16 pt-6">
          <div lang="en" className="rounded-3xl bg-[var(--surface)]/80 backdrop-blur-md border border-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10 transition hover:bg-[var(--surface)]/95 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 lang="en" className="title-standard text-[var(--text)]">CONTACT</h2>
              <p lang="en" className="mt-4 text-[var(--muted)] font-medium">Have questions? Reach out to our team.</p>
              <a href="mailto:kumun@iydp.org" lang="en" className="inline-flex items-center gap-3 mt-4 text-[var(--c2)] font-bold text-lg hover:underline transition-all">
                <span lang="en" className="flex items-center justify-center bg-[var(--c2)]/10 p-3 rounded-xl border border-[var(--c2)]/20 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" lang="en" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                kumun@iydp.org
              </a>
            </div>
            <div lang="en" className="flex gap-4">
              <a href="https://www.instagram.com/iydplatform?igsh=bTNreGQ1aWpvd3k0" target="_blank" rel="noopener noreferrer" lang="en" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-[0_4px_12px_rgba(15,23,42,0.06)] border border-white hover:bg-[var(--c1)] hover:text-white transition-all text-[var(--text)] hover:-translate-y-1" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/international-youth-dialogue-platform/" target="_blank" rel="noopener noreferrer" lang="en" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-[0_4px_12px_rgba(15,23,42,0.06)] border border-white hover:bg-[var(--c2)] hover:text-white transition-all text-[var(--text)] hover:-translate-y-1" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/iydplatform" target="_blank" rel="noopener noreferrer" lang="en" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-[0_4px_12px_rgba(15,23,42,0.06)] border border-white hover:bg-[var(--c3)] hover:text-white transition-all text-[var(--text)] hover:-translate-y-1" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer lang="en" className="relative z-10 bg-[var(--surface)]/90 backdrop-blur-md shadow-[0_-12px_30px_rgba(15,23,42,0.06)] border-t border-white">
        <div lang="en" className="mx-auto flex w-[90%] max-w-[1400px] flex-col gap-4 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>{t.footer}</p>
          <div lang="en" className="flex flex-wrap gap-4 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
            <span>Baku</span>
            <span lang="en" className="text-[var(--border)]">•</span>
            <span>Azerbaijan</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
