import logo from '../images/napoli-in-pizza-logo.png'
import { sections } from '../sections'
import './Splash.css'

// Branded entrance screen: logo + tappable choice cards.
function Splash({ onSelect }) {
  return (
    <div className="splash">
      <img src={logo} alt="Napoli in Pizza" className="splash__logo" />

      <div className="splash__cards">
        {sections.map(({ key, label, subtitle, icon }) => (
          <button key={key} className="splash__card" onClick={() => onSelect(key)}>
            <span className="splash__card-icon">{icon}</span>
            <span className="splash__card-text">
              <span className="splash__card-label">{label}</span>
              <span className="splash__card-sub">{subtitle}</span>
            </span>
            <span className="splash__card-arrow" aria-hidden="true">›</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Splash
