import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 40))
  }, [scrollY])

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: 64,
        background: scrolled ? 'rgba(255,248,240,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,104,26,0.12)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.a
        href="#hero"
        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <img
          src={logo}
          alt="Mexicatti Sorvetes"
          style={{ height: 44, width: 'auto', objectFit: 'contain' }}
        />
      </motion.a>

      <motion.a
        href="https://wa.me/NUMERO_MEXICATTI"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#25D366',
          color: '#fff',
          borderRadius: 10,
          padding: '10px 18px',
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(37,211,102,0.35)',
        }}
        whileHover={{ scale: 1.06, backgroundColor: '#1fba59' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <MessageCircle size={16} />
        WhatsApp
      </motion.a>
    </motion.header>
  )
}
