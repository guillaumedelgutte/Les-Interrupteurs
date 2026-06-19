import React from 'react'
import { useLang } from '../App'

const members = [
  {
    id: 1,
    name: 'Isa',
    role: 'Improvisatrice',
    roleEn: 'Improviser',
    bio: 'Toujours en train de chercher le jeu - et souvent la premiere a le trouver. Sur scene comme dans la vie, elle a une oreille pour tout et un telephone greffe a la main.',
    bioEn: 'Always looking for the game, and often the first to find it.',
    color: '#c8860a',
    initials: 'I',
    photo: '/images/equipe/Isa.jpeg',
  },
  {
    id: 2,
    name: 'Quentin',
    role: 'Improvisateur',
    roleEn: 'Improviser',
    bio: 'Il arrive sur scene comme s\'il avait quelque chose a prouver - et il le prouve. Energie brute, regard affute, toujours pret a transformer un defi en opportunite.',
    bioEn: 'Raw energy, sharp focus, always ready to turn a challenge into an opportunity.',
    color: '#b83c2a',
    initials: 'Q',
    photo: '/images/equipe/Quentin.jpeg',
  },
  {
    id: 3,
    name: 'Leo',
    role: 'Improvisatrice',
    roleEn: 'Improviser',
    bio: 'La meilleure pour couper les oignons et prendre soin de tout le monde. Elle fait pleurer - mais avec beaucoup d\'amour.',
    bioEn: 'The best at making people cry, but with love.',
    color: '#b5451b',
    initials: 'L',
    photo: '/images/equipe/Leo.jpeg',
  },
  {
    id: 4,
    name: 'Come',
    role: 'Improvisateur',
    roleEn: 'Improviser',
    bio: 'Il observe. Il analyse. Il inspecte chaque scene comme s\'il cherchait un coupable. Entre deux cigarettes, il vous coache pour que vous soyez meilleur.',
    bioEn: 'He observes, analyses, and coaches between scenes.',
    color: '#c8860a',
    initials: 'C',
    photo: '/images/equipe/Come.jpeg',
  },
  {
    id: 5,
    name: 'Guillaume 2',
    role: 'Improvisateur',
    roleEn: 'Improviser',
    bio: 'Le roi de la punchline. Une scene, une replique qui fait tout basculer. Personne ne sait comment il fait. Lui non plus.',
    bioEn: 'The king of punchlines. Nobody knows how he does it. Him neither.',
    color: '#b5451b',
    initials: 'G',
    photo: '/images/equipe/GuillaumeLuu.jpeg',
  },
  {
    id: 6,
    name: 'Faustine',
    role: 'Improvisatrice',
    roleEn: 'Improviser',
    bio: 'Elle est jamais loin d\'un accent du Ch\'Nord qu\'a pas rapport. Et pourtant, ca marche a tous les coups.',
    bioEn: 'Always one random accent away, and it somehow always works.',
    color: '#c8860a',
    initials: 'F',
    photo: '/images/equipe/Faustine.jpeg',
  },
  {
    id: 7,
    name: 'Guillaume 1',
    role: 'Improvisateur',
    roleEn: 'Improviser',
    bio: 'Specialiste des idiots - avec une tendresse infinie pour eux. Fan de tuning et de personnages qui ne comprennent pas tout a fait ce qui se passe.',
    bioEn: 'Specialist of lovable idiots and chaotic characters.',
    color: '#b83c2a',
    initials: 'G',
    photo: '/images/equipe/guillaumeD.jpeg',
  },
  {
    id: 8,
    name: 'Jeremy',
    role: 'Coach (peut-etre)',
    roleEn: 'Coach (maybe)',
    bio: 'Notre coach - enfin, en theorie. Il est la, il nous guide, il est brillant. Mais s\'engager officiellement ? On attend encore la reponse.',
    bioEn: 'Our coach - at least in theory.',
    color: '#b5451b',
    initials: 'J',
    photo: '/images/equipe/jeremy.jpeg',
  },
]

const t = {
  fr: { label: "L'equipe", title: "L'equipe", sub: 'Les membres des Interrupteurs.' },
  en: { label: 'Team', title: 'Team', sub: 'Les Interrupteurs members.' },
}

export default function Equipe() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="container">
          <div className="section-label">{tx.label}</div>
          <h1 className="section-title">{tx.title}</h1>
          <p className="section-subtitle" style={{ marginBottom: 64 }}>{tx.sub}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}>
            {members.map((m, i) => (
              <div
                key={m.id}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${m.color + '44'}`,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'all 0.25s',
                  animation: `fadeUp 0.5s ease ${i * 0.08}s both`,
                }}
              >
                {/* Photo area */}
                <div style={{
                  height: 240,
                  background: m.photo ? 'rgba(255,255,255,0.04)' : m.color + '22',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: `1px solid ${m.color + '33'}`,
                  overflow: 'hidden',
                }}>
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: '5rem', color: m.color, opacity: 0.4,
                    }}>
                      {m.initials}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '24px 20px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    color: 'var(--white)',
                    marginBottom: 4,
                  }}>
                    {m.name}
                  </h3>

                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: m.color,
                    marginBottom: 14,
                  }}>
                    {lang === 'fr' ? m.role : m.roleEn}
                  </div>

                  <p style={{ color: 'rgba(242,234,216,0.65)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {lang === 'fr' ? m.bio : m.bioEn}
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
