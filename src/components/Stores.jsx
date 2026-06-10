import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, ExternalLink } from 'lucide-react'

const stores = [
  {
    name: 'Loja Centro',
    number: '01',
    address: 'Rua das Flores, 123 — Centro',
    city: 'Araras/SP — CEP 13600-000',
    hours: 'Seg–Sex: 10h–22h · Sáb–Dom: 10h–23h',
    maps: 'https://maps.google.com',
    highlight: true,
  },
  {
    name: 'Loja Jardim',
    number: '02',
    address: 'Av. Brasil, 456 — Jardim Paulista',
    city: 'Araras/SP — CEP 13601-000',
    hours: 'Seg–Sex: 10h–22h · Sáb–Dom: 10h–23h',
    maps: 'https://maps.google.com',
  },
  {
    name: 'Loja Norte',
    number: '03',
    address: 'Rua do Comércio, 789 — Bairro Norte',
    city: 'Araras/SP — CEP 13602-000',
    hours: 'Ter–Dom: 11h–22h · Segunda: Fechado',
    maps: 'https://maps.google.com',
  },
]

export default function Stores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="lojas"
      style={{
        padding: 'clamp(64px, 10vw, 120px) 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 150 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '3px',
            color: '#E8681A',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 16,
          }}>
            Onde Nos Encontrar
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 6vw, 56px)',
            color: '#3D1F0A',
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            3 lojas esperando por você
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(61,31,10,0.6)', maxWidth: 480, margin: '0 auto' }}>
            Visite uma de nossas lojas em Araras/SP e experimente em primeira mão.
          </p>
        </motion.div>

        {/* Store cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 24,
        }}>
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 48, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 180, damping: 22 }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(61,31,10,0.14)' }}
              style={{
                background: store.highlight
                  ? 'linear-gradient(135deg, #E8681A, #C49A2A)'
                  : '#FFF8F0',
                borderRadius: 24,
                padding: 32,
                border: store.highlight ? 'none' : '1.5px solid rgba(61,31,10,0.1)',
                boxShadow: store.highlight
                  ? '0 12px 32px rgba(232,104,26,0.35)'
                  : '0 4px 16px rgba(61,31,10,0.06)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Store number */}
              <div style={{
                position: 'absolute',
                top: 20,
                right: 24,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 64,
                color: store.highlight ? 'rgba(255,255,255,0.12)' : 'rgba(61,31,10,0.06)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {store.number}
              </div>

              <div style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: store.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(232,104,26,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                <MapPin size={24} color={store.highlight ? '#fff' : '#E8681A'} />
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 22,
                color: store.highlight ? '#fff' : '#3D1F0A',
                marginBottom: 12,
              }}>
                {store.name}
              </h3>

              <p style={{
                fontSize: 15,
                color: store.highlight ? 'rgba(255,255,255,0.9)' : '#3D1F0A',
                fontWeight: 500,
                lineHeight: 1.5,
                marginBottom: 4,
              }}>
                {store.address}
              </p>
              <p style={{
                fontSize: 14,
                color: store.highlight ? 'rgba(255,255,255,0.7)' : 'rgba(61,31,10,0.55)',
                marginBottom: 20,
              }}>
                {store.city}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 24,
              }}>
                <Clock size={15} color={store.highlight ? 'rgba(255,255,255,0.7)' : '#C49A2A'} />
                <span style={{
                  fontSize: 13,
                  color: store.highlight ? 'rgba(255,255,255,0.8)' : 'rgba(61,31,10,0.6)',
                  fontWeight: 500,
                }}>
                  {store.hours}
                </span>
              </div>

              <motion.a
                href={store.maps}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: store.highlight ? '#fff' : '#3D1F0A',
                  color: store.highlight ? '#E8681A' : '#FFF8F0',
                  borderRadius: 12,
                  padding: '12px 20px',
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ExternalLink size={15} />
                Ver no Maps
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
