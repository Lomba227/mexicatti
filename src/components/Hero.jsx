import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import picoleSemFundo from '../assets/picole-sem-fundo.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

function TextBackground({ isDesktop }) {
  const unit = 'MEXICATTI  ·  '
  const half = unit.repeat(30)

  const rows = [
    { duration: 22, dir:  1 },
    { duration: 30, dir: -1 },
    { duration: 26, dir:  1 },
    { duration: 34, dir: -1 },
    { duration: 20, dir:  1 },
    { duration: 38, dir: -1 },
    { duration: 28, dir:  1 },
    { duration: 24, dir: -1 },
    { duration: 32, dir:  1 },
    { duration: 21, dir: -1 },
    { duration: 29, dir:  1 },
    { duration: 36, dir: -1 },
    { duration: 23, dir:  1 },
    { duration: 31, dir: -1 },
    { duration: 27, dir:  1 },
    { duration: 40, dir: -1 },
    { duration: 19, dir:  1 },
    { duration: 33, dir: -1 },
    { duration: 25, dir:  1 },
    { duration: 37, dir: -1 },
  ]

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      pointerEvents: 'none', zIndex: 0,
    }}>
      {rows.map((row, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${4 + (i / (rows.length - 1)) * 92}%`,
          left: 0,
          overflow: 'hidden',
          lineHeight: 1,
        }}>
          <motion.div
            animate={{ x: row.dir > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{ duration: row.duration, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: isDesktop ? 13 : 11,
              color: '#C49A2A',
              opacity: 0.055,
              letterSpacing: '3px',
              lineHeight: 1,
            }}
          >
            {half}{half}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const isDesktop = useIsDesktop(768)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 56])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100dvh',
        background: '#130801',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Scrolling text background */}
      <TextBackground isDesktop={isDesktop} />

      {/* Grain */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '140px',
          opacity: 0.5, mixBlendMode: 'overlay',
        }}
      />

      {/* Glow orb top-right */}
      <motion.div aria-hidden="true"
        animate={{ scale: [1, 1.18, 1], opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', width: '70vw', height: '70vw', borderRadius: '50%',
          background: 'radial-gradient(circle, #E8681A 0%, transparent 70%)',
          top: '-22%', right: '-16%', pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Glow orb bottom-left */}
      <motion.div aria-hidden="true"
        animate={{ scale: [1, 1.22, 1], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        style={{
          position: 'absolute', width: '52vw', height: '52vw', borderRadius: '50%',
          background: 'radial-gradient(circle, #C49A2A 0%, transparent 70%)',
          bottom: '-18%', left: '-10%', pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Stage: MEXICATTI behind + tagline above + product center */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isDesktop ? 'clamp(12px, 2vw, 24px)' : 8,
        flexDirection: 'column',
        padding: '0 24px',
      }}>

        {/* Z-1: MEXICATTI brand text — bigger, warm brown-gold */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.4 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: isDesktop ? 'clamp(100px, 18vw, 230px)' : 'clamp(72px, 24vw, 130px)',
            color: '#C49A2A',
            opacity: 0.18,
            letterSpacing: '-4px',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          MEXICATTI
        </motion.div>

        {/* Z-1: warm radial glow behind product */}
        <motion.div aria-hidden="true"
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 'clamp(280px, 38vw, 500px)',
            height: 'clamp(280px, 38vw, 500px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,104,26,0.18) 0%, rgba(196,154,42,0.07) 50%, transparent 70%)',
            filter: 'blur(32px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Z-2: tagline — always above the product, centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            order: 0,
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: isDesktop ? 'clamp(20px, 2.4vw, 32px)' : 'clamp(18px, 5.5vw, 26px)',
            color: 'rgba(255,248,240,0.88)',
            lineHeight: 1.55,
            margin: 0,
            letterSpacing: '0.2px',
          }}>
            A vida fica mais gostosa{' '}
            <span style={{
              fontWeight: 700,
              fontStyle: 'normal',
              color: '#E8681A',
            }}>
              com
            </span>
          </p>
        </motion.div>

        {/* Z-2: product image */}
        <motion.div
          style={{ y: imgY, position: 'relative', zIndex: 2, order: 1 }}
          initial={{ opacity: 0, y: 44, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.44, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={picoleSemFundo}
            alt="Picolé artesanal Mexicatti"
            loading="eager"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: isDesktop ? 'clamp(220px, 26vw, 400px)' : 'clamp(180px, 55vw, 280px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: [
                'drop-shadow(0 52px 68px rgba(0,0,0,0.78))',
                'drop-shadow(0 18px 32px rgba(0,0,0,0.52))',
                'drop-shadow(0 0 44px rgba(232,104,26,0.2))',
              ].join(' '),
            }}
          />
        </motion.div>

        {/* Z-2: CTAs — below product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative', zIndex: 2, order: 2,
            display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
          }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=551935441420"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, backgroundColor: '#1da851' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: '#25D366', color: '#fff',
              borderRadius: 50, padding: isDesktop ? '14px 28px' : '12px 22px',
              fontSize: isDesktop ? 15 : 14, fontWeight: 700,
              fontFamily: 'Inter, sans-serif', textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(37,211,102,0.32)',
              letterSpacing: '0.2px',
            }}
          >
            <span style={{ fontSize: 18 }}>💬</span>
            Pedir pelo WhatsApp
          </motion.a>

          <motion.a
            href="https://www.ifood.com.br/delivery/araras-sp/mexicatti-sorvetes-jardim-campos-verdes/da40930c-0422-4d5b-978b-cc6335cf5a10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, backgroundColor: '#c41020' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: '#EA1D2C', color: '#fff',
              borderRadius: 50, padding: isDesktop ? '14px 28px' : '12px 22px',
              fontSize: isDesktop ? 15 : 14, fontWeight: 700,
              fontFamily: 'Inter, sans-serif', textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(234,29,44,0.32)',
              letterSpacing: '0.2px',
            }}
          >
            <span style={{ fontSize: 18 }}>🛵</span>
            Ver no iFood
          </motion.a>

          <motion.a
            href="#cardapio"
            whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,248,240,0.15)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'transparent', color: '#FFF8F0',
              borderRadius: 50, padding: isDesktop ? '13px 26px' : '11px 20px',
              fontSize: isDesktop ? 15 : 14, fontWeight: 700,
              fontFamily: 'Inter, sans-serif', textDecoration: 'none',
              border: '1.5px solid rgba(255,248,240,0.35)',
              letterSpacing: '0.2px',
            }}
          >
            <span style={{ fontSize: 18 }}>🍦</span>
            Nosso Cardápio
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        style={{
          position: 'absolute', bottom: 30, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          zIndex: 2, pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1, height: 44,
            background: 'linear-gradient(to bottom, transparent, #E8681A, transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>
    </section>
  )
}
