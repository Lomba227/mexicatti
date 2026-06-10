import { motion } from 'framer-motion'
import { Instagram, MessageCircle, ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#3D1F0A',
      padding: 'clamp(48px, 8vw, 80px) 24px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(232,104,26,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(196,154,42,0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Top section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 40,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,248,240,0.1)',
        }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E8681A, #C49A2A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
              }}>
                🍦
              </div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: 24,
                  color: '#FFF8F0',
                  letterSpacing: '-0.5px',
                }}>
                  MEXICATTI
                </div>
                <div style={{
                  fontSize: 11,
                  letterSpacing: '4px',
                  color: '#C49A2A',
                  fontWeight: 700,
                }}>
                  SORVETES
                </div>
              </div>
            </div>
            <p style={{
              fontSize: 14,
              color: 'rgba(255,248,240,0.55)',
              lineHeight: 1.7,
              maxWidth: 260,
            }}>
              Fabricação própria, atacado e varejo. Sorvetes, picolés, paletas mexicanas e açaí em Araras/SP.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 150 }}
          >
            <h4 style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#C49A2A',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Navegação
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Cardápio', href: '#cardapio' },
                { label: 'Lojas', href: '#lojas' },
              ].map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'rgba(255,248,240,0.65)',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  whileHover={{ color: '#FFF8F0', x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          >
            <h4 style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#C49A2A',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Redes e Pedidos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://instagram.com/mexicatti', color: '#E1306C' },
                { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://wa.me/NUMERO_MEXICATTI', color: '#25D366' },
                { icon: <ShoppingBag size={18} />, label: 'iFood', href: 'https://ifood.com.br/LINK_MEXICATTI', color: '#EA1D2C' },
              ].map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    color: 'rgba(255,248,240,0.65)',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                  whileHover={{ color: '#FFF8F0', x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span style={{ color: social.color }}>{social.icon}</span>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 13, color: 'rgba(255,248,240,0.35)' }}>
            © 2025 Mexicatti Sorvetes — Araras/SP
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,248,240,0.25)' }}>
            Feito com 🧡 para os fãs de sorvete
          </span>
        </div>
      </div>
    </footer>
  )
}
