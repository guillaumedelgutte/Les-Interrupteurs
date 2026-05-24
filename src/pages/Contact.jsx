import React, { useState } from 'react'
import { useLang } from '../App'

const t = {
  fr: {
    label: 'Nous écrire',
    title: 'Contact',
    sub: 'Pour nous booker, nous féliciter, ou juste dire bonjour.',
    name: 'Votre nom',
    email: 'Votre email',
    subject: 'Sujet',
    subjects: ['Booking / Demande de spectacle', 'Presse & médias', 'Partenariat', 'Autre'],
    message: 'Votre message',
    send: 'Envoyer',
    sent: 'Message envoyé !',
    sentSub: 'Formulaire recu (mode demo). Les messages ne sont pas encore envoyes automatiquement.',
    insta: 'Nous suivre sur Instagram',
    orContact: 'Ou retrouvez-nous sur',
  },
  en: {
    label: 'Write to us',
    title: 'Contact',
    sub: 'To book us, congratulate us, or just say hi.',
    name: 'Your name',
    email: 'Your email',
    subject: 'Subject',
    subjects: ['Booking / Show request', 'Press & media', 'Partnership', 'Other'],
    message: 'Your message',
    send: 'Send',
    sent: 'Message sent!',
    sentSub: 'We\'ll get back to you within 48h. Promise.',
    insta: 'Follow us on Instagram',
    orContact: 'Or find us on',
  },
}

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 'var(--radius)',
  color: 'var(--white)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang]
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--yellow)' }
  const handleBlur = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }

  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="container">
          <div className="section-label">{tx.label}</div>
          <h1 className="section-title">{tx.title}</h1>
          <p className="section-subtitle" style={{ marginBottom: 16 }}>{tx.sub}</p>
          <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginBottom: 48 }}>
            {lang === 'fr'
              ? 'Info: ce formulaire est en mode demo. Les messages ne partent actuellement vers aucune boite mail.'
              : 'Note: this form is currently in demo mode. Messages are not sent to an inbox yet.'}
          </p>

          {/* Mobile-only Instagram button */}
          <div className="contact-mobile-links" style={{
            display: 'none',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 32,
          }}>
            <a
              href="https://www.instagram.com/les.interrupteurs.nyc/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: '18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--white)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>📸</span>
              @les.interrupteurs.nyc
            </a>
          </div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>

            {/* Form */}
            {!sent ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="contact-name-email" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: 8 }}>
                      {tx.name}
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: 8 }}>
                      {tx.email}
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: 8 }}>
                    {tx.subject}
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    <option value="" style={{ background: '#1a1a1a' }}>—</option>
                    {tx.subjects.map(s => <option key={s} value={s} style={{ background: '#1a1a1a' }}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: 8 }}>
                    {tx.message}
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button type="submit" className="contact-submit" style={{
                  alignSelf: 'flex-start',
                  background: 'var(--yellow)',
                  color: 'var(--black)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.15s, opacity 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.opacity = '1' }}
                >
                  {tx.send} →
                </button>
              </form>
            ) : (
              <div style={{
                padding: '48px',
                background: 'rgba(42,245,152,0.06)',
                border: '1px solid rgba(42,245,152,0.2)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>⚡</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--white)', marginBottom: 12 }}>{tx.sent}</h3>
                <p style={{ color: 'var(--gray-light)' }}>{tx.sentSub}</p>
              </div>
            )}

            {/* Sidebar */}
            <div className="contact-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{
                padding: '28px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--electric)', marginBottom: 16 }}>
                  {tx.orContact}
                </div>
                <a
                  href="https://www.instagram.com/les.interrupteurs.nyc/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--white)',
                    transition: 'border-color 0.2s',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                >
                  <span style={{ fontSize: '1.2rem' }}>📸</span>
                  @lesinterrupteurs
                </a>
              </div>

              <div style={{
                padding: '28px',
                background: 'rgba(240,224,64,0.04)',
                border: '1px solid rgba(240,224,64,0.15)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--yellow)', marginBottom: 8 }}>
                  {lang === 'fr' ? 'Booking & partenariats' : 'Booking & partnerships'}
                </div>
                <p style={{ color: 'var(--gray-light)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {lang === 'fr'
                    ? 'Vous souhaitez nous programmer ? Remplissez le formulaire avec le sujet "Booking" et on revient vers vous rapidement.'
                    : 'Want to programme us? Fill the form with subject "Booking" and we\'ll get back to you quickly.'}
                </p>
              </div>
            </div>
          </div>
          {/* Mobile-only tap buttons */}
          <div className="contact-mobile-links" style={{
            display: 'none',
            flexDirection: 'column',
            gap: 12,
            marginTop: 32,
          }}>
            <a
              href="https://www.instagram.com/les.interrupteurs.nyc/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: '18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--white)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>📸</span>
              @les.interrupteurs.nyc
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-sidebar { display: none !important; }
          .contact-name-email { grid-template-columns: 1fr !important; }
          .contact-submit { align-self: stretch !important; text-align: center; justify-content: center; }
          .contact-mobile-links { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
