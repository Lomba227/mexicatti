import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ShoppingBag, MapPin, Star } from 'lucide-react'
import logo from '../assets/logo.png'
import picole2 from '../assets/picole2.png'
import pote5 from '../assets/pote5.png'
import pote6 from '../assets/pote6.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

const headlineLines = ['Sorvetes', 'que fazem', 'você parar.']

export default function Hero() {
  const isDesktop = useIsDesktop(900)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const textX    = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const textOp   = useTransform(scrollYProgress, [0, 0.42], [1, 0])
  const imgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.09])
  const imgY     = useTransform(scrollYProgress, [0, 1], [0, 64])
  const float1Y  = useTransform(scrollYProgress, [0, 1], [0, -44])
  const float2Y  = useTransform(scrollYProgress, [0, 1], [0, -88])

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
      }}
    >
      {/* Grain texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '140px',
          opacity: 0.5,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Breathing orange glow â€” top right */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.18, 1], opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', width: '72vw', height: '72vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #E8681A 0%, transparent 70%)',
          top: '-25%', right: '-18%',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Breathing gold glow â€” bottom left */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.22, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        style={{
          position: 'absolute', width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #C49A2A 0%, transparent 70%)',
          bottom: '-20%', left: '-12%',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-2%', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(88px, 20vw, 260px)',
          color: 'rgba(255,248,240,0.022)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-3px',
          zIndex: 0,
        }}
      >
        MEXICATTI
      </div>

      {/* Main content grid */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: isDesktop ? '0 clamp(44px, 5.5vw, 88px)' : '104px 24px 64px',
        display: 'grid',
        gridTemplateColumns: isDesktop ? '1fr 0.85fr' : '1fr',
        gap: isDesktop ? 'clamp(40px, 5vw, 72px)' : 48,
        alignItems: 'center',
        minHeight: '100dvh',
      }}>

        {/* â”€â”€ LEFT: text â”€â”€ */}
        <motion.div
          style={{ x: isDesktop ? textX : 0, opacity: isDesktop ? textOp : 1 }}
        >
          {/* Logo pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 22 }}
            style={{ marginBottom: 38 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100,
              padding: '8px 22px 8px 8px',
            }}>
              <img
                src={logo}
                alt="Mexicatti Sorvetes"
                style={{ height: 38, width: 38, objectFit: 'contain', borderRadius: 50, background: '#fff', padding: 2 }}
              />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#C49A2A', textTransform: 'uppercase', lineHeight: 1 }}>
                  Fabricação Própria
                </div>
                <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,248,240,0.5)', marginTop: 2, lineHeight: 1 }}>
                  Araras / SP
                </div>
              </div>
            </div>
          </motion.div>

          {/* Headline â€” line-by-line blur reveal (21st.dev pattern) */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(46px, 6.2vw, 84px)',
              lineHeight: 1.08,
              letterSpacing: '-2px',
              marginBottom: 28,
              padding: 0,
            }}
          >
            {headlineLines.map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
                <motion.span
                  initial={{ y: '105%', opacity: 0, filter: 'blur(14px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.22 + i * 0.16,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    color: i === 2 ? '#E8681A' : '#FFF8F0',
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.76, duration: 0.62, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(14px, 1.55vw, 17px)',
              color: 'rgba(255,248,240,0.52)',
              lineHeight: 1.8,
              marginBottom: 42,
              maxWidth: 430,
            }}
          >
            Fabricação própria, atacado e varejo.{' '}
            <span style={{ color: '#C49A2A', fontWeight: 700 }}>Mais de 100 sabores</span>{' '}
            de sorvete, picolé, paleta mexicana e açaí em Araras/SP.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.94, duration: 0.55, ease: 'easeOut' }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}
          >
            <motion.a
              href="https://api.whatsapp.com/send?phone=551935441420"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir no WhatsApp"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#25D366', color: '#fff',
                borderRadius: 14, padding: '16px 32px',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(37,211,102,0.38)',
              }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 14px 36px rgba(37,211,102,0.52)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <MessageCircle size={18} />
              Pedir no WhatsApp
            </motion.a>
            <motion.a
              href="https://www.ifood.com.br/delivery/araras-sp/mexicatti-sorvetes-jardim-campos-verdes/da40930c-0422-4d5b-978b-cc6335cf5a10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no iFood"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#FFF8F0',
                borderRadius: 14, padding: '16px 32px',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{ scale: 1.05, y: -3, background: 'rgba(255,255,255,0.13)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <ShoppingBag size={18} />
              Ver no iFood
            </motion.a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.18, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', gap: 3 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} fill="#C49A2A" color="#C49A2A" />
              ))}
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,248,240,0.38)', fontWeight: 500 }}>
              100+ sabores únicos
            </span>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'rgba(255,248,240,0.38)', fontWeight: 500 }}>
              <MapPin size={11} color="#E8681A" />
              3 lojas em Araras
            </span>
          </motion.div>
        </motion.div>

        {/* â”€â”€ RIGHT: layered product images (desktop) â”€â”€ */}
        {isDesktop && (
          <div style={{ position: 'relative', height: 600 }}>

            {/* Radial glow behind images */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: 380, height: 380, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,104,26,0.18) 0%, transparent 70%)',
                top: '10%', left: '5%',
                pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Back card â€” pote6, top-right */}
            <motion.div
              style={{ y: float2Y, position: 'absolute', top: '2%', right: '-2%', zIndex: 1 }}
              initial={{ opacity: 0, x: 50, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.55, type: 'spring', stiffness: 100, damping: 18 }}
            >
              <motion.div
                animate={{ y: [0, -13, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.11)',
                  borderRadius: 22, padding: 8,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                }}>
                  <img
                    src={pote6}
                    alt="Sorvete de pistache"
                    loading="eager"
                    style={{ width: 162, height: 162, objectFit: 'cover', borderRadius: 16, display: 'block' }}
                  />
                  <div style={{ padding: '8px 6px 3px', fontSize: 10, fontWeight: 700, color: '#C49A2A', textAlign: 'center', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Linha Premium
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Main image â€” pote5, clip-path reveal + parallax */}
            <motion.div
              style={{ y: imgY, scale: imgScale, position: 'absolute', top: '6%', left: '8%', zIndex: 2 }}
              initial={{ opacity: 0, clipPath: 'inset(4% 38% 4% 38% round 24px)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
              transition={{ delay: 0.38, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                style={{ position: 'relative' }}
              >
                <img
                  src={pote5}
                  alt="Sorvete de maracujá Mexicatti"
                  loading="eager"
                  style={{
                    width: 310, height: 370,
                    objectFit: 'cover',
                    borderRadius: 24,
                    display: 'block',
                    boxShadow: '0 48px 96px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.3)',
                  }}
                />
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 220 }}
                  style={{
                    position: 'absolute', bottom: -18, left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(90deg, #E8681A, #C49A2A)',
                    borderRadius: 100,
                    padding: '10px 24px',
                    fontSize: 12, fontWeight: 700, color: '#fff',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 28px rgba(232,104,26,0.45)',
                  }}
                >
                  Sorvete Artesanal ✦
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Front card â€” picole2, bottom-right */}
            <motion.div
              style={{ y: float1Y, position: 'absolute', bottom: '4%', right: '5%', zIndex: 3 }}
              initial={{ opacity: 0, x: 36, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.75, type: 'spring', stiffness: 110, damping: 18 }}
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              >
                <div style={{
                  background: 'rgba(232,104,26,0.14)',
                  border: '1px solid rgba(232,104,26,0.28)',
                  borderRadius: 20, padding: 8,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 16px 44px rgba(0,0,0,0.35)',
                }}>
                  <img
                    src={picole2}
                    alt="Picolé artesanal Mexicatti"
                    loading="eager"
                    style={{ width: 128, height: 128, objectFit: 'cover', borderRadius: 14, display: 'block' }}
                  />
                  <div style={{ padding: '8px 6px 3px', fontSize: 10, fontWeight: 700, color: '#E8681A', textAlign: 'center', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Picolés
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* â”€â”€ MOBILE: single main image â”€â”€ */}
        {!isDesktop && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(4% 30% 4% 30% round 20px)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
              transition={{ delay: 0.88, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative' }}
            >
              <img
                src={pote5}
                alt="Sorvete artesanal Mexicatti"
                loading="eager"
                style={{
                  width: 300, height: 260,
                  objectFit: 'cover',
                  borderRadius: 24,
                  display: 'block',
                  boxShadow: '0 28px 64px rgba(0,0,0,0.5)',
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', bottom: -14, left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #E8681A, #C49A2A)',
                  borderRadius: 100, padding: '9px 22px',
                  fontSize: 11, fontWeight: 700, color: '#fff',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 6px 22px rgba(232,104,26,0.45)',
                }}
              >
                Sorvete Artesanal ✦
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          position: 'absolute', bottom: 30, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
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
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '3px', color: 'rgba(255,248,240,0.22)', textTransform: 'uppercase' }}>
          scroll
        </span>
      </motion.div>
    </section>
  )
}


