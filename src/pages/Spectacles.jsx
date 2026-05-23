import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../App'

const upcoming = [
  {
    id: 1,
    dateFr: '17 juin 2026',
    dateEn: 'June 17, 2026',
    venueFr: 'Room 52, New York',
    venueEn: 'Room 52, New York',
    ticket: 'https://www.eventbrite.com/e/les-interrupteurs-french-improv-nyc-style-fully-unhinged-tickets-1988196461136',
    poster: null,
  },
  {
    id: 2,
    dateFr: '8 juillet 2026',
    dateEn: 'July 8, 2026',
    venueFr: 'Room 52, New York',
    venueEn: 'Room 52, New York',
    ticket: 'https://www.eventbrite.com/e/les-interrupteurs-french-improv-nyc-style-fully-unhinged-tickets-1988197209374',
    poster: null,
  },
]

const history = [
  {
    id: 1,
    monthFr: 'Juin',
    monthEn: 'June',
    year: '2025',
    cityFr: 'New York',
    cityEn: 'New York City',
    countryFr: 'USA',
    countryEn: 'USA',
    poster: '/images/affiches/flyer-june-2025.png',
  },
  {
    id: 2,
    monthFr: 'Decembre',
    monthEn: 'December',
    year: '2025',
    cityFr: 'New York',
    cityEn: 'New York City',
    countryFr: 'USA',
    countryEn: 'USA',
    poster: '/images/affiches/flyer-december-2025.png',
  },
  {
    id: 3,
    monthFr: 'Mars',
    monthEn: 'March',
    year: '2026',
    cityFr: 'Saint Martin',
    cityEn: 'Saint Martin',
    countryFr: 'Caraibes',
    countryEn: 'Caribbean',
    poster: '/images/affiches/FlyerStMartin.jpeg',
  },
]

const t = {
  fr: {
    pageLabel: 'Spectacles',
    pageTitle: 'Spectacles',
    pageSub: 'Troupe d\'improvisation en francais basee a New York.',
    nextLabel: 'Prochains spectacles',
    ticketBtn: 'Billets →',
    historyLabel: 'Historique',
    historyTitle: 'Spectacles passes',
  },
  en: {
    pageLabel: 'Shows',
    pageTitle: 'Shows',
    pageSub: 'French-language improv based in New York City.',
    nextLabel: 'Upcoming shows',
    ticketBtn: 'Tickets →',
    historyLabel: 'History',
    historyTitle: 'Past shows',
  },
}

export default function Spectacles() {
  const { lang } = useLang()
  const tx = t[lang]
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#historique') {
      requestAnimationFrame(() => {
        document.getElementById('historique')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="container">
          <div className="section-label">{tx.pageLabel}</div>
          <h1 className="section-title">{tx.pageTitle}</h1>
          <p className="section-subtitle" style={{ marginBottom: 56 }}>{tx.pageSub}</p>

          <div style={{ marginBottom: 72 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>{tx.nextLabel}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {upcoming.map(show => (
                <div key={show.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(240,224,64,0.25)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  {/* Flyer placeholder */}
                  <div style={{
                    height: 220,
                    background: 'rgba(240,224,64,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(240,224,64,0.12)',
                  }}>
                    {show.poster ? (
                      <img src={show.poster} alt="Affiche" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontSize: '3rem', opacity: 0.2 }}>⚡</span>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ padding: '22px 20px 20px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius)',
                      background: 'rgba(240,224,64,0.12)',
                      border: '1px solid rgba(240,224,64,0.28)',
                      color: 'var(--yellow)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}>
                      {lang === 'fr' ? show.dateFr : show.dateEn}
                    </div>

                    <p style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 4 }}>
                      {lang === 'fr' ? show.venueFr : show.venueEn}
                    </p>

                    <a
                      href={show.ticket}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginTop: 16,
                        background: 'var(--yellow)',
                        color: 'var(--black)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '10px 20px',
                        borderRadius: 'var(--radius)',
                        textDecoration: 'none',
                        transition: 'transform 0.15s, box-shadow 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(240,224,64,0.3)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      {tx.ticketBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="historique" style={{ scrollMarginTop: 'calc(var(--nav-height) + 16px)' }}>
            <div className="section-label">{tx.historyLabel}</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', marginBottom: 32 }}>{tx.historyTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {history.map((item, i) => (
              <div key={item.id} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                animation: `fadeUp 0.5s ease ${i * 0.08}s both`,
              }}>
                <div style={{ height: 220, background: 'rgba(255,255,255,0.03)' }}>
                  {item.poster ? (
                    <img src={item.poster} alt="Affiche spectacle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '2rem' }}>⚡</div>
                  )}
                </div>

                <div style={{ padding: '22px 20px 20px' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius)',
                    background: 'rgba(240,224,64,0.12)',
                    border: '1px solid rgba(240,224,64,0.28)',
                    color: 'var(--yellow)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}>
                    {lang === 'fr' ? item.monthFr : item.monthEn} {item.year}
                  </div>

                  <p style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                    {lang === 'fr' ? item.cityFr : item.cityEn}
                  </p>
                  <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem' }}>
                    {lang === 'fr' ? item.countryFr : item.countryEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
