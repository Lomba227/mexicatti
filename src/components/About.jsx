import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import pote5 from '../assets/pote5.png'
import pote6 from '../assets/pote6.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

// ── Animated counter (21st.dev pattern) ──
function AnimatedCounter({ to, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useMotionValue('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => rounded.set(Math.round(v).toString()),
    })
    return controls.stop
  }, [inView, to, count, rounded])

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1 }}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const stats = [
  { counter: 100, suffix: '+', label: 'Sabores únicos', desc: 'de sorvete, picolé, paleta e açaí' },
  { counter: 3,   suffix: '',  label: 'Lojas em Araras', desc: 'Centro, Jardim e Norte' },
  { counter: 15,  suffix: '+', label: 'Anos de sabor', desc: 'fabricação própria desde o início' },
]

function ProductImageStack() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1     = useTransform(scrollYProgress, [0, 1], [30, -30])
  const y2     = useTransform(scrollYProgress, [0, 1], [-20, 40])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-4, 2])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [6, -2])

  return (
    <div ref={ref} style={{ position: 'relative', height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Ambient glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{
          position: 'absolute',
          width: 340, height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,104,26,0.12) 0%, rgba(196,154,42,0.07) 50%, transparent 70%)',
          top: '15%', left: '10%',
          zIndex: 0, pointerEvents: 'none',
        }}
      />

      {/* Back card — pote6 */}
      <motion.div
        style={{ position: 'absolute', top: '8%', right: '0%', y: y2, rotate: rotate2, zIndex: 1 }}
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 18 }}
        whileHover={{ scale: 1.05, zIndex: 10 }}
      >
        <div style={{
          background: '#fff',
          borderRadius: 28, padding: 10,
          boxShadow: '0 20px 60px rgba(61,31,10,0.18)',
          border: '1px solid rgba(61,31,10,0.07)',
        }}>
          <img src={pote6} alt="Sorvete de pistache Mexicatti" loading="lazy" style={{ width: 240, height: 240, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <div style={{ padding: '10px 8px 4px', fontSize: 11, fontWeight: 700, color: '#C49A2A', textAlign: 'center', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Linha Premium
          </div>
        </div>
      </motion.div>

      {/* Front card — pote5 */}
      <motion.div
        style={{ position: 'absolute', bottom: '5%', left: '0%', y: y1, rotate: rotate1, zIndex: 2 }}
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
        whileHover={{ scale: 1.05, zIndex: 10 }}
      >
        <div style={{
          background: '#fff',
          borderRadius: 28, padding: 10,
          boxShadow: '0 24px 64px rgba(61,31,10,0.22)',
          border: '2px solid rgba(232,104,26,0.18)',
        }}>
          <img src={pote5} alt="Sorvete de maracujá Mexicatti" loading="lazy" style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <div style={{ padding: '10px 8px 4px', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #E8681A, #C49A2A)',
              color: '#fff', borderRadius: 100, padding: '4px 14px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.5px',
            }}>
              Sorvete Artesanal
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isDesktop = useIsDesktop(900)

  return (
    <section
      ref={ref}
      id="sobre"
      style={{
        padding: 'clamp(72px, 10vw, 128px) 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: 'clamp(72px, 16vw, 180px)',
        color: 'rgba(232,104,26,0.032)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none', userSelect: 'none',
      }}>
        MEXICATTI
      </div>

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
        gap: 'clamp(48px, 7vw, 96px)',
        alignItems: 'center',
      }}>
        {/* Left: text + stats + badges */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 48 }}
          >
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700, fontSize: 11,
              letterSpacing: '3.5px', color: '#E8681A',
              textTransform: 'uppercase', display: 'block', marginBottom: 16,
            }}>
              Nossa História
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              color: '#3D1F0A', lineHeight: 1.15, marginBottom: 20,
            }}>
              Feito aqui,<br />pra você.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.78, color: 'rgba(61,31,10,0.65)', maxWidth: 440 }}>
              Fabricação própria, atacado e varejo. Três lojas em Araras/SP com os melhores sorvetes,
              picolés, paletas mexicanas e açaí da região.
            </p>
          </motion.div>

          {/* Stats with animated counters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 44 }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -36 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 200, damping: 22 }}
                whileHover={{ x: 6, transition: { type: 'spring', stiffness: 400 } }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '18px 24px',
                  background: 'linear-gradient(135deg, #FFF8F0, #FFE8D0)',
                  borderRadius: 18,
                  border: '1px solid rgba(232,104,26,0.12)',
                  cursor: 'default',
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: 44,
                  color: '#E8681A',
                  lineHeight: 1,
                  minWidth: 90,
                }}>
                  <AnimatedCounter to={stat.counter} suffix={stat.suffix} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#3D1F0A', marginBottom: 2 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(61,31,10,0.5)', fontWeight: 500 }}>
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
          >
            {[
              { icon: '🏭', label: 'Fabricação Própria' },
              { icon: '🏪', label: 'Atacado e Varejo' },
              { icon: '📍', label: '3 Lojas' },
              { icon: '🧊', label: 'Sempre Fresquinho' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.07, y: -3 }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#3D1F0A', borderRadius: 100,
                  padding: '10px 20px',
                  fontSize: 13, fontWeight: 600, color: '#FFF8F0',
                  cursor: 'default',
                  boxShadow: '0 4px 16px rgba(61,31,10,0.18)',
                }}
              >
                <span style={{ fontSize: 15 }}>{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: product image showcase */}
        <ProductImageStack />
      </div>
    </section>
  )
}
