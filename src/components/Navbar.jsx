import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../App'

const nav = {
  fr: [
    { path: '/', label: 'Accueil' },
    { path: '/spectacles', label: 'Spectacles' },
    { path: '/equipe', label: "L'equipe" },
    { path: '/medias', label: 'Médias' },
    { path: '/contact', label: 'Contact' },
  ],
  en: [
    { path: '/', label: 'Home' },
    { path: '/spectacles', label: 'Shows' },
    { path: '/equipe', label: 'Team' },
    { path: '/medias', label: 'Media' },
    { path: '/contact', label: 'Contact' },
  ],
}

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = nav[lang]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        background: scrolled ? 'rgba(45,28,10,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(90,58,26,0.5)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="nav-logo" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '-0.02em',
            color: 'var(--white)',
          }}>
            LES<span style={{ color: 'var(--yellow)' }}>⚡</span>INTERRUPTEURS
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '8px 14px',
                borderRadius: 'var(--radius)',
                color: isActive ? 'var(--black)' : 'var(--gray-light)',
                background: isActive ? 'var(--yellow)' : 'transparent',
                transition: 'all 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}

          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            style={{
              marginLeft: 16,
              background: 'transparent',
              border: '1px solid var(--gray-mid)',
              color: 'var(--electric)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              padding: '6px 12px',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--electric)'
              e.currentTarget.style.color = 'var(--black)'
              e.currentTarget.style.borderColor = 'var(--electric)'
            }}

            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--electric)'
              e.currentTarget.style.borderColor = 'var(--gray-mid)'
            }}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="burger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            padding: 4,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--white)',
              borderRadius: 2,
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 101,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 20, right: 24,
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
            }}
            aria-label="Fermer"
          >
            ✕
          </button>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                color: isActive ? 'var(--yellow)' : 'var(--white)',
                padding: '8px 0',
              })}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { setLang(lang === 'fr' ? 'en' : 'fr'); setOpen(false) }}
            style={{
              marginTop: 24,
              background: 'var(--electric)',
              border: 'none',
              color: 'var(--black)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              padding: '10px 24px',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
            }}
          >
            {lang === 'fr' ? '→ EN' : '→ FR'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; order: -1; }
          .nav-logo { font-size: clamp(0.65rem, 4vw, 1.15rem) !important; letter-spacing: 0 !important; }
        }
      `}</style>
    </>
  )
}
