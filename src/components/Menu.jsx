import { menu } from '../data/menu'
import './Menu.css'

// Tag → label/emoji shown as a small pill next to an item name.
const TAGS = {
  veg: { label: '🌱', title: 'Vegetariana' },
  piccante: { label: '🌶️', title: 'Piccante' },
}

// Build a URL-safe id from a category name, used for the sticky-nav anchors.
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function Menu() {
  return (
    <section className="menu">
      <h2 className="menu__title">Il Menù</h2>

      {/* Sticky category nav — scrolls horizontally on small screens */}
      <nav className="menu__nav">
        {menu.map(({ category }) => (
          <a key={category} href={`#${slug(category)}`} className="menu__nav-link">
            {category}
          </a>
        ))}
      </nav>

      {menu.map(({ category, items }) => (
        <div key={category} id={slug(category)} className="menu__section">
          <h3 className="menu__category">{category}</h3>

          <ul className="menu__list">
            {items.map((item) => (
              <li key={item.name} className="menu__item">
                <div className="menu__item-head">
                  <span className="menu__item-name">
                    {item.name}
                    {item.tags?.map((t) => (
                      <span key={t} className="menu__tag" title={TAGS[t]?.title}>
                        {TAGS[t]?.label}
                      </span>
                    ))}
                  </span>
                  <span className="menu__dots" aria-hidden="true" />
                  <span className="menu__price">€&nbsp;{item.price.toFixed(2)}</span>
                </div>
                <p className="menu__desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Menu
