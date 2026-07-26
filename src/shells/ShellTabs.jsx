import { useState } from 'react'
import logo from '../images/napoli-in-pizza-logo.png'
import Splash from '../components/Splash'
import BottomTabs from '../components/BottomTabs'
import { sections } from '../sections'

// Pattern A — branded splash entrance, then persistent bottom tabs.
function ShellTabs() {
  // null = splash entrance; otherwise a section key
  const [view, setView] = useState(null)

  if (view === null) {
    return <Splash onSelect={setView} />
  }

  const ActiveSection = sections.find((s) => s.key === view).Component

  return (
    <div className="app fade-in">
      <header className="app__header">
        <button className="app__home" onClick={() => setView(null)} aria-label="Home">
          <img src={logo} alt="Napoli in Pizza" className="logo" />
        </button>
      </header>

      <main className="app__main">
        <div key={view} className="fade-in">
          <ActiveSection />
        </div>
      </main>

      <BottomTabs active={view} onSelect={setView} />
    </div>
  )
}

export default ShellTabs
