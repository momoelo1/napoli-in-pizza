import { sections } from '../sections'
import './BottomTabs.css'

// Persistent bottom navigation shown once the user is inside the app.
function BottomTabs({ active, onSelect }) {
  return (
    <nav className="tabs">
      {sections.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`tabs__btn${active === key ? ' tabs__btn--active' : ''}`}
          onClick={() => onSelect(key)}
        >
          <span className="tabs__icon">{icon}</span>
          <span className="tabs__label">{label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomTabs
