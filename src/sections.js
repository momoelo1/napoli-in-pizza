import Menu from './components/Menu'
import About from './components/About'
import Where from './components/Where'
import Feedback from './components/Feedback'

// Shared definition of the site's sections, used by the splash entrance,
// the bottom tab bar and App's view switcher. One source of truth for nav.
export const sections = [
  { key: 'menu',  label: 'Menù',       subtitle: 'Le nostre pizze',     icon: '🍕', Component: Menu },
  { key: 'about', label: 'Chi siamo',  subtitle: 'La nostra storia',    icon: '👨‍🍳', Component: About },
  { key: 'where', label: 'Dove siamo', subtitle: 'Vieni a trovarci',    icon: '📍', Component: Where },
  { key: 'feedback', label: 'Recensioni', subtitle: 'Dicci com\'è andata', icon: '⭐', Component: Feedback },
]
