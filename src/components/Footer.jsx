import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, MessageCircle, ShoppingBag, ArrowUp } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Lojas', href: '#lojas' },
]

const socials = [
  { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://instagram.com/mexicatti', color: '#E1306C' },
  { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=551935441420', color: '#25D366' },
  { icon: <ShoppingBag size={18} />, label: 'iFood', href: 'https://www.ifood.com.br/delivery/araras-sp/mexicatti-sorvetes-jardim-campos-verdes/da40930c-0422-4d5b-978b-cc6335cf5a10', color: '#EA1D2C' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer
      ref={ref}
      style={{
        background: '#130801',
        padding: 'clamp(56px, 8vw, 96px) 24px 36px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient top border */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent 0%, #E8681A 30%, #C49A2A 60%, #E8681A 85%, transparent 100%)',
          transformOrigin: 'left',
        }}
      />

      {/* Ambient glows */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(232,104,26,0.07) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(196,154,42,0.05) 0%, transparent 45%)',
      }} />

      {/* Grain texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '140px',
        opacity: 0.35, mixBlendMode: 'overlay',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Top: brand + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 48,
          marginBottom: 56,
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255,248,240,0.07)',
        }}>
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, type: 'spring', stiffness: 140 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}>
                <img src={logo} alt="Mexicatti" style={{ width: 38, height: 38, objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, color: '#FFF8F0', letterSpacing: '-0.3px', lineHeight: 1 }}>
                  MEXICATTI
                </div>
                <div style={{ fontSize: 10, letterSpacing: '4px', color: '#C49A2A', fontWeight: 700, marginTop: 2 }}>
                  SORVETES
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,248,240,0.45)', lineHeight: 1.75, maxWidth: 240 }}>
              Fabricação própria, atacado e varejo. Sorvetes, picolés, paletas mexicanas e açaí em Araras/SP.
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, type: 'spring', stiffness: 140 }}
          >
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#C49A2A', textTransform: 'uppercase', marginBottom: 20 }}>
              Navegação
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.18 + i * 0.05, type: 'spring', stiffness: 200 }}
                  style={{
                    color: 'rgba(255,248,240,0.55)',
                    textDecoration: 'none',
                    fontSize: 15, fontWeight: 500,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                  whileHover={{ color: '#FFF8F0', x: 5 }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#E8681A', flexShrink: 0 }} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Socials column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 140 }}
          >
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: '#C49A2A', textTransform: 'uppercase', marginBottom: 20 }}>
              Redes e Pedidos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.26 + i * 0.06, type: 'spring', stiffness: 200 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    color: 'rgba(255,248,240,0.55)',
                    textDecoration: 'none',
                    fontSize: 15, fontWeight: 500,
                  }}
                  whileHover={{ color: '#FFF8F0', x: 5 }}
                >
                  <span style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color, flexShrink: 0,
                    transition: 'background 0.2s',
                  }}>
                    {s.icon}
                  </span>
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            style={{ fontSize: 13, color: 'rgba(255,248,240,0.28)' }}
          >
            © 2025 Mexicatti Sorvetes — Araras/SP
          </motion.span>

          {/* Back to top */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'rgba(255,248,240,0.35)',
              textDecoration: 'none',
              fontSize: 12, fontWeight: 600, letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
            whileHover={{ color: '#E8681A', y: -2 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <ArrowUp size={14} />
            </motion.span>
            Voltar ao topo
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

