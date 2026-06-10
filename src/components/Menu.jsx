import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Info, Tag } from 'lucide-react'
import { categories } from '../data/products'
import picole2 from '../assets/picole2.png'
import paleta1 from '../assets/paleta1.png'
import pote3 from '../assets/pote3.png'
import pote4 from '../assets/pote4.png'
import pote5 from '../assets/pote5.png'
import pote6 from '../assets/pote6.png'
import pote7 from '../assets/pote7.png'

const categoryImages = {
  picoles: picole2,   // picolé cremoso — foto mais limpa
  sundaes: pote5,     // taça waffle remete a sundae
  potes2l: pote7,     // balde grande — escala família
  potes250: pote3,    // dose individual em copo
  paletas120: paleta1,
  paletas72: paleta1,
  potes1l: pote6,     // pote de vidro premium
  acai: pote4,        // cor escura de açaí
}

function FlavorBadge({ flavor, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, type: 'spring', stiffness: 300, damping: 18 }}
      style={{
        display: 'inline-block',
        background: 'rgba(61,31,10,0.07)',
        borderRadius: 100,
        padding: '4px 12px',
        fontSize: 12,
        fontWeight: 500,
        color: '#3D1F0A',
        whiteSpace: 'nowrap',
      }}
    >
      {flavor}
    </motion.span>
  )
}

function PriceRow({ priceWholesale, priceRetail, categoryColor }) {
  return (
    <div style={{
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap',
    }}>
      {/* Atacado */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(61,31,10,0.06)',
        border: '1px solid rgba(61,31,10,0.12)',
        borderRadius: 10,
        padding: '7px 14px',
        flex: 1,
        minWidth: 110,
      }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(61,31,10,0.45)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1 }}>
            Atacado
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#3D1F0A', lineHeight: 1.3, fontVariantNumeric: 'tabular-nums' }}>
            {priceWholesale}
          </div>
        </div>
      </div>

      {/* Varejo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: `${categoryColor}12`,
        border: `1px solid ${categoryColor}35`,
        borderRadius: 10,
        padding: '7px 14px',
        flex: 1,
        minWidth: 110,
      }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: categoryColor, letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1, opacity: 0.8 }}>
            Varejo
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: categoryColor, lineHeight: 1.3, fontVariantNumeric: 'tabular-nums' }}>
            {priceRetail}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ line, index, categoryColor }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 180, damping: 22 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(61,31,10,0.12)' }}
      layout
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: 24,
        border: '1px solid rgba(61,31,10,0.08)',
        boxShadow: '0 4px 16px rgba(61,31,10,0.06)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}66)`,
        borderRadius: '20px 20px 0 0',
      }} />

      {/* Header row: name + badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 4 }}>
        <h4 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: 18,
          color: '#3D1F0A',
          lineHeight: 1.3,
          flex: 1,
        }}>
          {line.name}
        </h4>

        {line.badge && (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            background: categoryColor,
            color: '#fff',
            borderRadius: 100,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.4px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            <Tag size={10} />
            {line.badge}
          </span>
        )}
      </div>

      <p style={{
        fontSize: 14,
        color: 'rgba(61,31,10,0.6)',
        lineHeight: 1.55,
        marginBottom: 0,
      }}>
        {line.description}
      </p>

      {/* Prices */}
      <PriceRow
        priceWholesale={line.priceWholesale}
        priceRetail={line.priceRetail}
        categoryColor={categoryColor}
      />

      {/* Expand toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid rgba(61,31,10,0.07)',
      }}>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: `${categoryColor}18`,
            color: categoryColor,
            fontSize: 13,
            flexShrink: 0,
          }}
        >
          ▾
        </motion.span>
        <span style={{ fontSize: 13, color: 'rgba(61,31,10,0.5)', fontWeight: 500 }}>
          {expanded ? 'Ocultar sabores' : `Ver ${line.flavors.length} sabores`}
        </span>
      </div>

      {/* Flavors panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 28 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginTop: 14,
            }}>
              {line.flavors.map((flavor, i) => (
                <FlavorBadge key={flavor} flavor={flavor} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CategoryTab({ category, isActive, onClick, index }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 20px',
        borderRadius: 100,
        border: isActive ? 'none' : '1.5px solid rgba(61,31,10,0.15)',
        background: isActive ? category.color : 'transparent',
        color: isActive ? '#fff' : '#3D1F0A',
        fontSize: 14,
        fontWeight: 700,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        position: 'relative',
        boxShadow: isActive ? `0 6px 20px ${category.color}50` : 'none',
        transition: 'box-shadow 0.2s',
      }}
    >
      <span style={{ fontSize: 18 }}>{category.icon}</span>
      {category.label}
      {isActive && (
        <motion.div
          layoutId="tab-indicator"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 100,
            background: category.color,
            zIndex: -1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0].id)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const activeCategory = categories.find(c => c.id === activeTab)

  return (
    <section
      ref={ref}
      id="cardapio"
      style={{
        padding: 'clamp(64px, 10vw, 120px) 0',
        background: '#F2EDE8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}
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
          Cardápio Completo
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(32px, 6vw, 56px)',
          color: '#3D1F0A',
          lineHeight: 1.15,
        }}>
          Mais de 100 sabores
          <br />
          pra você escolher
        </h2>
      </motion.div>

      {/* Wholesale notice banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 24 }}
        style={{
          maxWidth: 1200,
          margin: '0 auto 24px',
          padding: '0 24px',
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(90deg, rgba(232,104,26,0.12), rgba(196,154,42,0.08))',
          border: '1px solid rgba(232,104,26,0.25)',
          borderRadius: 12,
          padding: '10px 18px',
        }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#E8681A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Info size={14} color="#fff" />
          </div>
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#3D1F0A',
            lineHeight: 1.4,
          }}>
            Valores de atacado válidos em compras acima de{' '}
            <span style={{ color: '#E8681A', fontWeight: 700 }}>R$ 60,00</span>
          </span>
        </div>
      </motion.div>

      {/* Tabs — scrollable horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, type: 'spring', stiffness: 150 }}
        style={{
          display: 'flex',
          gap: 10,
          overflowX: 'auto',
          padding: '0 24px 20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {categories.map((cat, i) => (
          <CategoryTab
            key={cat.id}
            category={cat}
            isActive={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            index={i}
          />
        ))}
      </motion.div>

      {/* Product cards grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          >
            {/* Category header */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginBottom: 24,
                padding: '20px 24px',
                background: `linear-gradient(135deg, ${activeCategory.color}18, ${activeCategory.color}06)`,
                borderRadius: 24,
                border: `1px solid ${activeCategory.color}25`,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                key={activeTab + '-img'}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                style={{ flexShrink: 0 }}
              >
                <img
                  src={categoryImages[activeTab]}
                  alt={activeCategory.label}
                  loading="lazy"
                  style={{
                    width: 88,
                    height: 88,
                    objectFit: 'cover',
                    borderRadius: 18,
                    boxShadow: `0 8px 24px ${activeCategory.color}35`,
                    border: '2px solid rgba(255,255,255,0.9)',
                    display: 'block',
                  }}
                />
              </motion.div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: 28,
                  color: '#3D1F0A',
                  marginBottom: 4,
                }}>
                  {activeCategory.label}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(61,31,10,0.6)' }}>
                  {activeCategory.lines.length} linhas disponíveis · Clique para ver os sabores
                </p>
              </div>

              <div style={{
                position: 'absolute',
                right: -8,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 100,
                opacity: 0.06,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {activeCategory.icon}
              </div>
            </motion.div>

            {/* Cards grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: 20,
            }}>
              <AnimatePresence>
                {activeCategory.lines.map((line, i) => (
                  <ProductCard
                    key={line.name}
                    line={line}
                    index={i}
                    categoryColor={activeCategory.color}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
