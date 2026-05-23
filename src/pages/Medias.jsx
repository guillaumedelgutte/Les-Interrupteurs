import React, { useState } from 'react'
import { useLang } from '../App'

const tourPhotos = [
  { id: 1, label: 'Groupe — 11 mai 2025', w: 1, h: 1, src: '/images/medias/tournee/2025-05-11-group-01.jpg' },
  { id: 2, label: 'Groupe — 11 mai 2025', w: 1, h: 1, src: '/images/medias/tournee/2025-05-11-group-04.jpg' },
  { id: 3, label: 'Groupe — 11 mai 2025', w: 1, h: 1, src: '/images/medias/tournee/2025-05-11-group-05.jpg' },
  { id: 4, label: 'Groupe — 11 mai 2025', w: 1, h: 1, src: '/images/medias/tournee/2025-05-11-group-06.jpg' },
]

const affichePhotos = [
  { id: 1, label: 'Affiche — juin 2025', w: 1, h: 1, src: '/images/affiches/flyer-june-2025.png' },
  { id: 2, label: 'Affiche — décembre 2025', w: 1, h: 1, src: '/images/affiches/flyer-december-2025.png' },
]

const tourColors = ['#f0e040', '#2af598', '#ff3d3d', '#f0e040', '#2af598', '#ff3d3d', '#f0e040', '#2af598']
const afficheColors = ['#f0e040', '#2af598']

const videos = [
  { id: 1, title: 'Spectacle — 13 mars 2026', titleEn: 'Show — March 13, 2026', desc: 'Dans les coulisses.', descEn: 'Behind the scenes.', src: '/videos/2026-03-13-show.mp4', youtubeId: null },
  { id: 2, title: 'Spectacle — 14 mars 2026', titleEn: 'Show — March 14, 2026', desc: 'Saint Martin teaser.', descEn: 'Saint Martin teaser.', src: '/videos/2026-03-14-show.mp4', youtubeId: null },
]

const t = {
  fr: {
    label: 'Médias',
    title: 'Photos & Vidéos',
    sub: 'Des images valent mieux qu\'une longue improvisation.',
    photos: 'Photos',
    videos: 'Vidéos',
    tourTitle: 'Tournée',
    tourSub: 'Photos de la dernière tournée.',
    afficheTitle: 'Affiches',
    afficheSub: 'Les visuels de nos spectacles.',
    videoPlaceholder: 'Vidéo locale : ajoute un .mp4 dans public/videos/ puis indique src dans le code.',
  },
  en: {
    label: 'Media',
    title: 'Photos & Videos',
    sub: 'Pictures are worth more than a long improvisation.',
    photos: 'Photos',
    videos: 'Videos',
    tourTitle: 'Tour',
    tourSub: 'Photos from the last tour.',
    afficheTitle: 'Posters',
    afficheSub: 'Show artwork (same files can be used on the Shows page for each date).',
    videoPlaceholder: 'Local video: add an .mp4 to public/videos/ and set src in the code.',
  },
}

function PhotoCell({ p, colorIndex, colors }) {
  const c = colors[colorIndex % colors.length]
  return (
    <div
      style={{
        gridColumn: `span ${p.w}`,
        gridRow: `span ${p.h}`,
        background: `${c}18`,
        border: `1px solid ${c}22`,
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        animation: `fadeUp 0.5s ease ${colorIndex * 0.06}s both`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = c + '55' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = c + '22' }}
    >
      {p.src ? (
        <img
          src={p.src}
          alt={p.label}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3rem', color: c, opacity: 0.15 }}>📷</div>
      )}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '12px 16px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        fontFamily: 'var(--font-display)',
        fontSize: '0.75rem',
        fontWeight: 700,
        color: 'var(--white)',
        opacity: 0.9,
      }}>
        {p.label}
      </div>
    </div>
  )
}

export default function Medias() {
  const { lang } = useLang()
  const tx = t[lang]
  const [tab, setTab] = useState('photos')

  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="container">
          <div className="section-label">{tx.label}</div>
          <h1 className="section-title">{tx.title}</h1>
          <p className="section-subtitle">{tx.sub}</p>

          <div style={{ display: 'flex', gap: 4, margin: '48px 0 40px', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', padding: 4, width: 'fit-content' }}>
            {['photos', 'videos'].map(t2 => (
              <button key={t2} type="button" onClick={() => setTab(t2)} style={{
                background: tab === t2 ? 'var(--yellow)' : 'transparent',
                color: tab === t2 ? 'var(--black)' : 'var(--gray-light)',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '8px 20px',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                {t2 === 'photos' ? tx.photos : tx.videos}
              </button>
            ))}
          </div>

          {tab === 'photos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
              <div>
                <div className="section-label" style={{ marginBottom: 8 }}>{tx.tourTitle}</div>
                <p className="section-subtitle" style={{ marginBottom: 28 }}>{tx.tourSub}</p>
                <div className="medias-photo-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridAutoRows: '180px',
                  gap: 8,
                }}>
                  {tourPhotos.map((p, i) => (
                    <PhotoCell key={p.id} p={p} colorIndex={i} colors={tourColors} />
                  ))}
                </div>
              </div>

              <div>
                <div className="section-label" style={{ marginBottom: 8 }}>{tx.afficheTitle}</div>
                <p className="section-subtitle" style={{ marginBottom: 28 }}>{tx.afficheSub}</p>
                <div className="medias-photo-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridAutoRows: '180px',
                  gap: 8,
                }}>
                  {affichePhotos.map((p, i) => (
                    <PhotoCell key={p.id} p={p} colorIndex={i} colors={afficheColors} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'videos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {videos.map((v, i) => (
                <div key={v.id} className="medias-video-row" style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 320px) 1fr',
                  gap: 24,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
                }}>
                  <div style={{
                    background: 'rgba(255,61,61,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '16/9',
                    position: 'relative',
                    minWidth: 0,
                  }}>
                    {v.src ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          background: '#000',
                        }}
                      >
                        <source src={v.src} type="video/mp4" />
                      </video>
                    ) : v.youtubeId ? (
                      <iframe
                        title={lang === 'fr' ? v.title : v.titleEn}
                        src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }}
                      />
                    ) : (
                      <>
                        <div style={{
                          width: 48, height: 48,
                          background: 'var(--red)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid white', marginLeft: 3 }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', lineHeight: 1.4 }}>
                          {tx.videoPlaceholder}
                        </div>
                      </>
                    )}
                  </div>
                  <div style={{ padding: '24px 24px 24px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--white)', marginBottom: 8 }}>
                      {lang === 'fr' ? v.title : v.titleEn}
                    </h3>
                    <p style={{ color: 'var(--gray-light)', fontSize: '0.875rem' }}>{lang === 'fr' ? v.desc : v.descEn}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .medias-video-row { grid-template-columns: 1fr !important; }
          .medias-video-row > div:last-child { padding: 0 24px 24px !important; }
        }
        @media (max-width: 640px) {
          .medias-photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
