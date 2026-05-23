import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../App'

const t = {
  fr: {
    title: ['Les', 'Inter-', 'rupteurs'],
    sub: 'Une troupe d\'impro basée à New York : on coupe le courant — et on le reprend autrement, en français.',
    cta1: 'Voir les spectacles',
    cta2: 'Qui sommes-nous ?',
    next: 'Prochain spectacle',
    date: '17 juin 2026',
    venue: 'Room 52, New York',
    seats: 'Places limitées',
  },
  en: {
    title: ['The', 'Inter-', 'rupters'],
    sub: 'French-language improv based in New York — we cut the power, then rewire the whole thing.',
    cta1: 'See the shows',
    cta2: 'Who are we?',
    next: 'Next show',
    date: 'June 17, 2026',
    venue: 'Room 52, New York',
    seats: 'Limited seats',
  },
}

export default function Home() {
  const { lang } = useLang()
  const tx = t[lang]
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = 0
    el.style.transform = 'translateY(24px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <div className="page-wrapper" style={{ background: 'var(--black)' }}>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid lines */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(240,224,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,224,64,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Big background letter */}
        <div aria-hidden style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(280px, 40vw, 520px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(240,224,64,0.07)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>⚡</div>

        <div ref={heroRef} className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: 32 }}>
            {tx.title.map((line, i) => (
              <div key={i} style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                color: i === 2 ? 'var(--yellow)' : 'var(--white)',
                display: 'block',
              }}>
                {line}
              </div>
            ))}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'rgba(245,242,236,0.65)',
            maxWidth: 480,
            marginBottom: 48,
            lineHeight: 1.65,
          }}>
            {tx.sub}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/spectacles" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--yellow)',
              color: 'var(--black)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: 'var(--radius)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(240,224,64,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {tx.cta1} →
            </Link>
            <Link to="/equipe" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent',
              color: 'var(--white)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: 'var(--radius)',
              border: '1px solid rgba(245,242,236,0.2)',
              transition: 'border-color 0.15s, color 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--white)'; e.currentTarget.style.color = 'var(--white)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,242,236,0.2)' }}
            >
              {tx.cta2}
            </Link>
          </div>
        </div>

        {/* Next show banner */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--electric)' }}>
              {tx.next}
            </span>
            <span style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{tx.date}</span>
            <span style={{ color: 'var(--gray-light)', fontSize: '0.9rem' }}>{tx.venue}</span>
          </div>
          <span style={{
            background: 'var(--red)',
            color: 'var(--white)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 'var(--radius)',
          }}>
            {tx.seats}
          </span>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </div>
  )
}
