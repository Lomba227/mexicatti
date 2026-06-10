import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'
import { useIsDesktop } from '../hooks/useIsDesktop'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Lojas', href: '#lojas' },
]

export default function Navbar() {
  const isDesktop = useIsDesktop(900)
  const { scrollY } = useScroll()
  const [pillVisible, setPillVisible] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious() ?? 0
    setAtTop(current < 60)
    setPillVisible(current > 100 && current <= prev)
  })

  return (
    <>
      {/* â”€â”€ Top bar (transparent / dark glass) â”€â”€ */}
      <AnimatePresence>
        {!pillVisible && (
          <motion.header
            key="topbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.18 } }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0,
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              height: 64,
              background: atTop ? 'transparent' : 'rgba(19,8,1,0.88)',
              backdropFilter: atTop ? 'none' : 'blur(20px)',
              WebkitBackdropFilter: atTop ? 'none' : 'blur(20px)',
              borderBottom: atTop ? 'none' : '1px solid rgba(255,248,240,0.07)',
              transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
            }}
          >
            <motion.a
              href="#hero"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <img
                src={logo}
                alt="Mexicatti Sorvetes"
                style={{
                  height: 40, width: 40, objectFit: 'contain',
                  background: '#fff', borderRadius: '50%', padding: 3,
                }}
              />
            </motion.a>

            <motion.a
              href="https://api.whatsapp.com/send?phone=551935441420"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir pelo WhatsApp"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#25D366', color: '#fff',
                borderRadius: 100, padding: '9px 20px',
                fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </motion.a>
          </motion.header>
        )}
      </AnimatePresence>

      {/* â”€â”€ Floating pill (desktop) â”€â”€ */}
      <AnimatePresence>
        {pillVisible && isDesktop && (
          <motion.nav
            key="pill"
            initial={{ y: -72, opacity: 0, scale: 0.88 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -72, opacity: 0, scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'fixed',
              top: 14,
              left: '50%',
              x: '-50%',
              zIndex: 100,
              background: 'rgba(19,8,1,0.9)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: 100,
              border: '1px solid rgba(255,248,240,0.1)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              padding: '8px 10px 8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              whiteSpace: 'nowrap',
            }}
          >
            {/* Logo mark */}
            <motion.a href="#hero" style={{ display: 'flex', alignItems: 'center', marginRight: 10, textDecoration: 'none' }}>
              <img src={logo} alt="Mexicatti" style={{ height: 28, width: 28, objectFit: 'contain', background: '#fff', borderRadius: '50%', padding: 2 }} />
            </motion.a>

            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)', marginRight: 6 }} />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + i * 0.04, type: 'spring', stiffness: 320 }}
                style={{
                  color: 'rgba(255,248,240,0.65)',
                  textDecoration: 'none',
                  fontSize: 13, fontWeight: 600,
                  padding: '7px 14px',
                  borderRadius: 100,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.15s, background 0.15s',
                }}
                whileHover={{ color: '#FFF8F0', backgroundColor: 'rgba(255,255,255,0.09)' }}
              >
                {link.label}
              </motion.a>
            ))}

            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)', marginLeft: 4 }} />

            <motion.a
              href="https://api.whatsapp.com/send?phone=551935441420"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir pelo WhatsApp"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#25D366', color: '#fff',
                borderRadius: 100, padding: '8px 18px',
                fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif',
                textDecoration: 'none', marginLeft: 4,
                boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* â”€â”€ Floating bar (mobile) â”€â”€ */}
      <AnimatePresence>
        {pillVisible && !isDesktop && (
          <motion.nav
            key="mobile-bar"
            initial={{ y: -56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -56, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, zIndex: 100,
              background: 'rgba(19,8,1,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,248,240,0.07)',
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
            }}
          >
            <img src={logo} alt="Mexicatti" style={{ height: 30, width: 30, objectFit: 'contain', background: '#fff', borderRadius: '50%', padding: 2 }} />
            <motion.a
              href="https://api.whatsapp.com/send?phone=551935441420"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#25D366', color: '#fff',
                borderRadius: 100, padding: '7px 16px',
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

