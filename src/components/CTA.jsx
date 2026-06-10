import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ShoppingBag, Zap } from 'lucide-react'
import pote5 from '../assets/pote5.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isDesktop = useIsDesktop(900)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [-20, 30])
  const imgRotate = useTransform(scrollYProgress, [0, 1], [-4, 4])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(64px, 10vw, 120px) 24px',
        background: '#E8681A',
      }}
    >
      {/* Background texture stripes */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,154,42,0.07) 40px, rgba(196,154,42,0.07) 80px)',
        pointerEvents: 'none',
      }} />

      {/* Decorative orbs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, type: 'spring' }}
        style={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          top: '-30%',
          left: '-10%',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.2, type: 'spring' }}
        style={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.07)',
          bottom: '-20%',
          right: isDesktop ? '35%' : '-5%',
          pointerEvents: 'none',
        }}
      />

      <div style={{
        position: 'relative',
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isDesktop ? '1fr auto' : '1fr',
        gap: 'clamp(32px, 5vw, 80px)',
        alignItems: 'center',
      }}>
        {/* Text & buttons */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.18)',
            borderRadius: 100,
            padding: '6px 20px',
            marginBottom: 24,
          }}>
            <Zap size={14} color="#fff" fill="#fff" />
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '1px' }}>
              PEÇA AGORA
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(36px, 7vw, 68px)',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: '-1px',
          }}>
            Bora pedir agora?
          </h2>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 44,
            lineHeight: 1.65,
            maxWidth: 460,
          }}>
            Escolha o jeito mais fácil de ter os melhores sorvetes de Araras na sua mão.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <motion.a
              href="https://api.whatsapp.com/send?phone=551935441420"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#fff',
                color: '#25D366',
                borderRadius: 16,
                padding: '18px 36px',
                fontSize: 17,
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.28)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <MessageCircle size={22} />
              WhatsApp
            </motion.a>

            <motion.a
              href="https://www.ifood.com.br/delivery/araras-sp/mexicatti-sorvetes-jardim-campos-verdes/da40930c-0422-4d5b-978b-cc6335cf5a10"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(0,0,0,0.25)',
                color: '#fff',
                borderRadius: 16,
                padding: '18px 36px',
                fontSize: 17,
                fontWeight: 700,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.4)',
                backdropFilter: 'blur(8px)',
              }}
              whileHover={{ scale: 1.06, y: -3, background: 'rgba(0,0,0,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <ShoppingBag size={22} />
              iFood
            </motion.a>
          </div>
        </motion.div>

        {/* Product image â€” dramatic right side */}
        <motion.div
          style={{ y: imgY, rotate: imgRotate }}
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            {/* Glow behind the image */}
            <div style={{
              position: 'absolute',
              inset: -20,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <img
              src={pote5}
              alt="Sorvete de maracujá Mexicatti"
              loading="lazy"
              style={{
                width: isDesktop ? 320 : 220,
                height: isDesktop ? 320 : 220,
                objectFit: 'cover',
                borderRadius: 32,
                boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)',
                border: '4px solid rgba(255,255,255,0.25)',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* Badge over image */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.7, type: 'spring', stiffness: 250 }}
              style={{
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                borderRadius: 100,
                padding: '10px 24px',
                fontSize: 13,
                fontWeight: 700,
                color: '#E8681A',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}
            >
              ðŸ¦ Sorvete Artesanal
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


