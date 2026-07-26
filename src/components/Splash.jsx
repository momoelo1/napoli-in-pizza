import { motion } from 'framer-motion'
import logo from '../images/napoli-in-pizza-logo.png'
import { sections } from '../sections'
import './Splash.css'

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

// Branded entrance screen: logo + tappable choice cards, animated in on mount.
function Splash({ onSelect }) {
  return (
    <div className="splash">
      <motion.img
        src={logo}
        alt="Napoli in Pizza"
        className="splash__logo"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <motion.div className="splash__cards" variants={cardList} initial="hidden" animate="show">
        {sections.map(({ key, label, subtitle, icon }) => (
          <motion.button
            key={key}
            className="splash__card"
            variants={cardItem}
            onClick={() => onSelect(key)}
          >
            <span className="splash__card-icon">{icon}</span>
            <span className="splash__card-text">
              <span className="splash__card-label">{label}</span>
              <span className="splash__card-sub">{subtitle}</span>
            </span>
            <span className="splash__card-arrow" aria-hidden="true">›</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

export default Splash
