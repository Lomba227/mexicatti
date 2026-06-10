import { useRef } from 'react'
import { motion, useInView, useMotionValue, useMotionTemplate, animate } from 'framer-motion'
import { MapPin, Clock, ExternalLink } from 'lucide-react'

const stores = [
  {
    name: 'Loja Jardim Campos Verdes',
    number: '01',
    address: 'Av. Fábio da Silva Prado, 1610 — Jardim Campos Verdes',
    city: 'Araras/SP — CEP 13604-520',
    hours: 'Seg–Sex: 10h–22h · Sáb–Dom: 10h–23h',
    maps: 'https://www.google.com.br/maps/place/Mexicatti+Sorvetes/@-22.338526,-47.3692153,18.48z/data=!4m6!3m5!1s0x94c871b539bf79fb:0x7b14b569786a1a6a!8m2!3d-22.3386979!4d-47.3684238!16s%2Fg%2F11j34np2rm?coh=164777&entry=tt&shorturl=1',
    highlight: true,
  },
  {
    name: 'Loja Jardim das Flores',
    number: '02',
    address: 'Av. Loreto, 1104 — Jardim das Flores',
    city: 'Araras/SP — CEP 13607-200',
    hours: 'Seg–Sex: 10h–22h · Sáb–Dom: 10h–23h',
    maps: 'https://www.google.com.br/maps/place/Mexicatti+Sorvetes/@-22.3606517,-47.3646614,17z/data=!3m1!4b1!4m6!3m5!1s0x94c871c983af189f:0xac7c69c465a44c88!8m2!3d-22.3606517!4d-47.3646614!16s%2Fg%2F11sh1ymfft?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Loja Bosque de Versalles',
    number: '03',
    address: 'Rua José Antônio Cressoni, 226 — Res. Bosque de Versalles',
    city: 'Araras/SP — CEP 13609-378',
    hours: 'Seg–Sex: 10h–22h · Sáb–Dom: 10h–23h',
    maps: 'https://www.google.com/maps/place/Mexicatti+Sorvetes/@-22.3809951,-47.3813842,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8773ed63294e1:0xca3a6c891aad5494!8m2!3d-22.3809951!4d-47.3813842!16s%2Fg%2F11c2k2rln1?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
  },
]

// 3D tilt + spotlight card (Aceternity / 21st.dev pattern)
function TiltCard({ store, index, inView }) {
  const cardRef = useRef(null)

  // Motion values for 3D tilt
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Spotlight position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(232,104,26,0.13), transparent 80%)`
  const highlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(y * -9)
    rotateY.set(x * 9)
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    animate(rotateX, 0, { type: 'spring', stiffness: 180, damping: 20 })
    animate(rotateY, 0, { type: 'spring', stiffness: 180, damping: 20 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 52, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 180, damping: 22 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformOrigin: 'center',
        position: 'relative',
        background: store.highlight
          ? 'linear-gradient(135deg, #E8681A 0%, #C49A2A 100%)'
          : '#FFF8F0',
        borderRadius: 24,
        padding: 32,
        border: store.highlight ? 'none' : '1.5px solid rgba(61,31,10,0.1)',
        boxShadow: store.highlight
          ? '0 16px 48px rgba(232,104,26,0.38)'
          : '0 4px 20px rgba(61,31,10,0.07)',
        overflow: 'hidden',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Spotlight overlay */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: store.highlight ? highlightBg : spotlightBg,
          borderRadius: 24,
          pointerEvents: 'none', zIndex: 0,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Glare top-edge */}
      {!store.highlight && (
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(232,104,26,0.35), transparent)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Store number watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 16, right: 20,
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900, fontSize: 72,
        color: store.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(61,31,10,0.05)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        zIndex: 0,
      }}>
        {store.number}
      </div>

      {/* Content — z-index above overlays */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 16,
          background: store.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(232,104,26,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
        }}>
          <MapPin size={24} color={store.highlight ? '#fff' : '#E8681A'} />
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700, fontSize: 22,
          color: store.highlight ? '#fff' : '#3D1F0A',
          marginBottom: 12,
        }}>
          {store.name}
        </h3>

        <p style={{ fontSize: 15, color: store.highlight ? 'rgba(255,255,255,0.9)' : '#3D1F0A', fontWeight: 500, lineHeight: 1.5, marginBottom: 4 }}>
          {store.address}
        </p>
        <p style={{ fontSize: 14, color: store.highlight ? 'rgba(255,255,255,0.65)' : 'rgba(61,31,10,0.5)', marginBottom: 20 }}>
          {store.city}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <Clock size={15} color={store.highlight ? 'rgba(255,255,255,0.65)' : '#C49A2A'} />
          <span style={{ fontSize: 13, color: store.highlight ? 'rgba(255,255,255,0.75)' : 'rgba(61,31,10,0.6)', fontWeight: 500 }}>
            {store.hours}
          </span>
        </div>

        <motion.a
          href={store.maps}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: store.highlight ? '#fff' : '#3D1F0A',
            color: store.highlight ? '#E8681A' : '#FFF8F0',
            borderRadius: 12, padding: '12px 22px',
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
            boxShadow: store.highlight ? '0 6px 20px rgba(0,0,0,0.15)' : '0 4px 16px rgba(61,31,10,0.2)',
          }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <ExternalLink size={15} />
          Ver no Maps
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Stores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="lojas"
      style={{
        padding: 'clamp(72px, 10vw, 128px) 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(232,104,26,0.04) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(196,154,42,0.04) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700, fontSize: 11, letterSpacing: '3.5px',
            color: '#E8681A', textTransform: 'uppercase',
            display: 'block', marginBottom: 16,
          }}>
            Onde Nos Encontrar
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 6vw, 56px)',
            color: '#3D1F0A', lineHeight: 1.12, marginBottom: 16,
          }}>
            3 lojas esperando<br />por você
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(61,31,10,0.55)', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
            Visite uma de nossas lojas em Araras/SP e experimente em primeira mão.
          </p>
        </motion.div>

        {/* Store cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 24,
        }}>
          {stores.map((store, i) => (
            <TiltCard key={store.name} store={store} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
