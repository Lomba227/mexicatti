import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ShoppingBag, MapPin, Package, Star } from 'lucide-react'
import logo from '../assets/logo.png'
import picole2 from '../assets/picole2.png'
import pote3 from '../assets/pote3.png'
import pote5 from '../assets/pote5.png'
import pote6 from '../assets/pote6.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

// Headline split into words for reveal animation
const headlineWords = ['Sorvetes', 'que', 'fazem', 'você', 'parar.']

const mosaicItems = [
  { src: pote5,   alt: 'Sorvete de maracujá',  label: 'Sorvetes',          delay: 0.3,  rotate: -3, floatOffset: 0   },
  { src: picole2, alt: 'Picolé artesanal',      label: 'Picolés',           delay: 0.45, rotate: 2,  floatOffset: 0.6 },
  { src: pote6,   alt: 'Sorvete de pistache',   label: 'Linha Premium',     delay: 0.6,  rotate: 2,  floatOffset: 1.2 },
  { src: pote3,   alt: 'Sorvete creme',         label: 'Potes Individuais', delay: 0.75, rotate: -2, floatOffset: 1.8 },
]

function MosaicCard({ item, scrollY }) {
  const parallaxY = useTransform(scrollY, [0, 600], [0, item.floatOffset * 30])

  return (
    <motion.div
      style={{ y: parallaxY }}
      initial={{ opacity: 0, scale: 0.75, rotate: item.rotate * 2 }}
      animate={{ opacity: 1, scale: 1, rotate: item.rotate }}
      transition={{ delay: item.delay, type: 'spring', stiffness: 130, damping: 18 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.5 + item.floatOffset,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: item.floatOffset,
        }}
        style={{ position: 'relative' }}
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="eager"
          style={{
            width: '100%',
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            borderRadius: 20,
            display: 'block',
            boxShadow: '0 20px 50px rgba(61,31,10,0.25)',
          }}
        />
        {/* Label overlay */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay + 0.4, type: 'spring' }}
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(10px)',
            borderRadius: 100,
            padding: '5px 12px',
            fontSize: 11,
            fontWeight: 700,
            color: '#3D1F0A',
            letterSpacing: '0.3px',
          }}
        >
          {item.label}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const isDesktop = useIsDesktop(900)
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const leftPanelX = useTransform(scrollYProgress, [0, 0.6], [0, -40])
  const leftPanelOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const rightPanelScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.06])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ─── LEFT PANEL — dark, text ─── */}
      <motion.div
        style={{
          flex: isDesktop ? '0 0 48%' : 'unset',
          background: '#3D1F0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isDesktop
            ? 'clamp(80px, 8vh, 120px) clamp(32px, 5vw, 72px)'
            : '96px 28px 48px',
          position: 'relative',
          overflow: 'hidden',
          x: isDesktop ? leftPanelX : 0,
          opacity: isDesktop ? leftPanelOpacity : 1,
          zIndex: 2,
        }}
      >
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(232,104,26,0.12) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(196,154,42,0.08) 0%, transparent 45%)',
        }} />
        {/* Diagonal gold stripe accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 4, height: '100%',
          background: 'linear-gradient(180deg, #C49A2A 0%, #E8681A 50%, #C49A2A 100%)',
          opacity: 0.6,
        }} />

        {/* Logo stamp */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 22 }}
          style={{ marginBottom: isDesktop ? 40 : 28 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16,
            padding: '8px 16px 8px 8px',
            gap: 10,
          }}>
            <img
              src={logo}
              alt="Mexicatti Sorvetes"
              style={{ height: 40, width: 'auto', objectFit: 'contain', borderRadius: 8 }}
            />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#C49A2A', textTransform: 'uppercase' }}>
                Desde 2009
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,248,240,0.7)', marginTop: 1 }}>
                Araras / SP
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated headline — word by word */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          color: '#FFF8F0',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          marginBottom: 20,
          overflow: 'hidden',
        }}>
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 180, damping: 20 }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word === 'parar.' ? (
                <span style={{ color: '#E8681A' }}>{word}</span>
              ) : word}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, type: 'spring', stiffness: 160, damping: 22 }}
          style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,248,240,0.65)',
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 400,
          }}
        >
          Fabricação própria, atacado e varejo. Mais de{' '}
          <span style={{ color: '#C49A2A', fontWeight: 700 }}>100 sabores</span>{' '}
          de sorvete, picolé, paleta mexicana e açaí.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 160, damping: 22 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}
        >
          <motion.a
            href="https://wa.me/NUMERO_MEXICATTI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#25D366', color: '#fff',
              borderRadius: 14, padding: '15px 28px',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
            }}
            whileHover={{ scale: 1.06, y: -2, boxShadow: '0 14px 36px rgba(37,211,102,0.55)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            <MessageCircle size={18} />
            Pedir no WhatsApp
          </motion.a>

          <motion.a
            href="https://ifood.com.br/LINK_MEXICATTI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: '#FFF8F0',
              borderRadius: 14, padding: '15px 28px',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{ scale: 1.06, y: -2, background: 'rgba(255,255,255,0.16)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            <ShoppingBag size={18} />
            Ver no iFood
          </motion.a>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
        >
          {[
            { icon: <Star size={12} fill="#C49A2A" color="#C49A2A" />, label: 'Fabricação Própria' },
            { icon: <MapPin size={12} color="#C49A2A" />, label: '3 Lojas em Araras' },
            { icon: <Package size={12} color="#C49A2A" />, label: 'Atacado e Varejo' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15 + i * 0.08, type: 'spring', stiffness: 250 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                padding: '7px 14px',
                fontSize: 12, fontWeight: 600,
                color: 'rgba(255,248,240,0.75)',
              }}
            >
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator — left side, desktop */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{
              position: 'absolute', bottom: 32, left: 'clamp(32px, 5vw, 72px)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{
                width: 20, height: 34,
                border: '1.5px solid rgba(255,248,240,0.2)',
                borderRadius: 100,
                display: 'flex', justifyContent: 'center', paddingTop: 5,
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 3, height: 7, background: '#E8681A', borderRadius: 100 }}
              />
            </motion.div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2px', color: 'rgba(255,248,240,0.3)', textTransform: 'uppercase' }}>
              Scroll
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* ─── RIGHT PANEL — product mosaic ─── */}
      <motion.div
        style={{
          flex: isDesktop ? '0 0 52%' : 'unset',
          background: 'linear-gradient(145deg, #FFF8F0 0%, #FFE8D0 60%, #FFDDB8 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isDesktop
            ? 'clamp(80px, 8vh, 120px) clamp(28px, 4vw, 60px)'
            : '32px 28px 64px',
          position: 'relative',
          overflow: 'hidden',
          scale: isDesktop ? rightPanelScale : 1,
        }}
      >
        {/* Background orbs */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          style={{
            position: 'absolute', width: 420, height: 420, borderRadius: '50%',
            background: '#E8681A', top: '-10%', right: '-10%', pointerEvents: 'none',
          }}
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.07 }}
          transition={{ delay: 0.5, duration: 1.4 }}
          style={{
            position: 'absolute', width: 260, height: 260, borderRadius: '50%',
            background: '#C49A2A', bottom: '5%', left: '-5%', pointerEvents: 'none',
          }}
        />

        {/* Mosaic label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          style={{ marginBottom: 20, textAlign: 'center' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(61,31,10,0.08)',
            border: '1px solid rgba(61,31,10,0.12)',
            borderRadius: 100, padding: '6px 18px',
            fontSize: 12, fontWeight: 700, color: '#3D1F0A',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            <Star size={11} fill="#E8681A" color="#E8681A" />
            Nossos Produtos
          </span>
        </motion.div>

        {/* 2×2 image grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: isDesktop ? 14 : 10,
          width: '100%',
          maxWidth: isDesktop ? 460 : 340,
          position: 'relative',
          zIndex: 1,
        }}>
          {mosaicItems.map((item) => (
            <MosaicCard key={item.alt} item={item} scrollY={scrollY} />
          ))}
        </div>

        {/* Bottom CTA prompt — mobile only */}
        {!isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: 'spring' }}
            style={{ marginTop: 28, textAlign: 'center' }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: 'rgba(61,31,10,0.4)', textTransform: 'uppercase' }}
            >
              ↓ veja mais abaixo
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
