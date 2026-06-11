import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import pote5 from '../assets/pote5.png'
import pote4 from '../assets/pote4.png'
import paleta1 from '../assets/paleta1.PNG'
import paleta2 from '../assets/paleta2.PNG'
import paleta3 from '../assets/paleta3.PNG'
import paleta4 from '../assets/paleta4.PNG'
import paletaGianduia from '../assets/paleta-gianduia.jpg'
import paletaMorangoLeite from '../assets/paleta-morango-com-leite.jpg'
import paletaPistacheCrock from '../assets/paleta-pistache-crock.jpg'
import paletaRafaello from '../assets/paleta-rafaello.jpg'
import picoleCocoQueimado from '../assets/picole-coco-queimado.jpg'
import picoleLeitinho from '../assets/picole-leitinho.jpg'
import picolesPremium from '../assets/picoles-premium.png'
import pote1LCharge from '../assets/pote-1L-charge.jpg'
import pote1LMenta from '../assets/pote-1L-menta-trufada.jpg'
import pote1LMousse from '../assets/pote-1L-mousse-maracuja.jpg'
import pote1LRafaello from '../assets/pote-1L-rafaello.jpg'
import potePistache from '../assets/pote-pistache.jpg'
import sensacao from '../assets/sensação.png'

const images = [
  { src: pote5,             label: 'Sorvete Artesanal',   sub: 'Fabricação Própria' },
  { src: paletaGianduia,    label: 'Gianduia',            sub: 'Paleta Premium 120g' },
  { src: picolesPremium,    label: 'Linha Premium',       sub: 'Picolés' },
  { src: pote1LRafaello,    label: 'Rafaello',            sub: 'Pote 1L Premium' },
  { src: paleta2,           label: 'Paleta Mexicana',     sub: 'Linha Frutada' },
  { src: picoleCocoQueimado,label: 'Coco Queimado',       sub: 'Linha Leite' },
  { src: potePistache,      label: 'Pistache',            sub: 'Pote Premium' },
  { src: paletaPistacheCrock,label: 'Pistache Crock',     sub: 'Paleta Premium 120g' },
  { src: pote4,             label: 'Açaí',                sub: 'Linha Açaí' },
  { src: picoleLeitinho,    label: 'Leitinho',            sub: 'Linha Leite' },
  { src: pote1LMousse,      label: 'Mousse de Maracujá',  sub: 'Pote 1L Especial' },
  { src: paletaRafaello,    label: 'Rafaello',            sub: 'Paleta Especial 120g' },
  { src: pote1LCharge,      label: 'Charge',              sub: 'Pote 1L Premium' },
  { src: paleta3,           label: 'Paleta Cremosa',      sub: 'Paleta 120g' },
  { src: sensacao,          label: 'Sensação',            sub: 'Pote 1L Premium' },
  { src: paletaMorangoLeite,label: 'Morango com Leite',   sub: 'Paleta 72g' },
  { src: pote1LMenta,       label: 'Menta Trufada',       sub: 'Pote 1L Especial' },
  { src: paleta4,           label: 'Paleta Artesanal',    sub: 'Paleta 120g' },
  { src: paleta1,           label: 'Paleta Coco',         sub: 'Paleta 120g' },
]

// Duplicate for seamless loop
const track = [...images, ...images]

function MarqueeCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      style={{
        position: 'relative',
        flexShrink: 0,
        width: 210,
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: '0 10px 32px rgba(0,0,0,0.35)',
      }}
    >
      <img
        src={item.src}
        alt={item.label}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)',
      }} />
      {/* Label */}
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.2, fontFamily: "'Playfair Display', serif" }}>
          {item.label}
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2, fontWeight: 500 }}>
          {item.sub}
        </div>
      </div>
      {/* Orange accent corner */}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        width: 8, height: 8, borderRadius: '50%', background: '#E8681A',
      }} />
    </motion.div>
  )
}

export default function Gallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [isHovered, setIsHovered] = useState(false)
  const [oneSetWidth, setOneSetWidth] = useState(0)
  const x = useMotionValue(0)
  const animationRef = useRef(null)

  // Measure rendered width of one set
  useEffect(() => {
    if (trackRef.current) {
      setOneSetWidth(trackRef.current.scrollWidth / 2)
    }
  }, [])

  const startMarquee = useCallback((fromX) => {
    if (!oneSetWidth) return
    const distanceLeft = -oneSetWidth - fromX
    const duration = Math.abs(distanceLeft) * (40 / oneSetWidth)

    animationRef.current = animate(x, -oneSetWidth, {
      duration,
      ease: 'linear',
      onComplete: () => {
        x.set(0)
        animationRef.current = animate(x, -oneSetWidth, {
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        })
      },
    })
  }, [x, oneSetWidth])

  // Start / pause marquee — resume from current position
  useEffect(() => {
    if (!oneSetWidth) return
    if (isHovered) {
      animationRef.current?.stop()
    } else {
      startMarquee(x.get())
    }
  }, [isHovered, oneSetWidth, startMarquee, x])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#3D1F0A',
        padding: 'clamp(56px, 8vw, 96px) 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle diagonal lines texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 48px, rgba(255,255,255,0.018) 48px, rgba(255,255,255,0.018) 49px)',
      }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 160, damping: 22 }}
        style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}
      >
        <span style={{
          display: 'block',
          background: 'rgba(232,104,26,0.15)',
          border: '1px solid rgba(232,104,26,0.3)',
          borderRadius: 100, padding: '5px 16px',
          fontSize: 11, fontWeight: 700, letterSpacing: '2.5px',
          color: '#E8681A', textTransform: 'uppercase', marginBottom: 16,
        }}>
          ✦ Nossos Produtos ✦
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(26px, 5vw, 44px)',
          color: '#FFF8F0',
          lineHeight: 1.15,
          letterSpacing: '-0.5px',
        }}>
          Cada sabor é uma{' '}
          <span style={{ color: '#E8681A' }}>história.</span>
        </h2>
        <p style={{
          fontSize: 14, color: 'rgba(255,248,240,0.45)',
          marginTop: 10, fontWeight: 500,
          letterSpacing: '0.3px',
        }}>
          Passe o mouse para pausar
        </p>
      </motion.div>

      {/* Fade edges */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, #3D1F0A, transparent)',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to left, #3D1F0A, transparent)',
      }} />

      {/* Marquee track */}
      <div
        style={{ overflow: 'hidden', cursor: 'default' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={trackRef}
          style={{ x, display: 'flex', gap: 14, width: 'max-content', padding: '8px 0' }}
        >
          {track.map((item, i) => (
            <MarqueeCard key={i} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        style={{ textAlign: 'center', marginTop: 36, padding: '0 24px' }}
      >
        <motion.a
          href="#cardapio"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#C49A2A', fontSize: 14, fontWeight: 700,
            textDecoration: 'none', letterSpacing: '0.5px',
          }}
          whileHover={{ gap: 14 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          Ver cardápio completo
          <span style={{ fontSize: 18 }}>→</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
