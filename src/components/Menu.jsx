import { menu } from '../data/menu'
import './Menu.css'

// Tag → label/emoji shown as a small pill next to an item name.
const TAGS = {
  veg: { label: '🌱', title: 'Vegetariana' },
  piccante: { label: '🌶️', title: 'Piccante' },
}

// Build a URL-safe id from a category name, used for the sticky-nav anchors.
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// One item row: name (+ tag pills), dotted leader and optional price.
function MenuItem({ item, index }) {
  return (
    <li key={`${item.name}-${index}`} className="menu__item">
      <div className="menu__item-head">
        <span className="menu__item-name">
          {item.name}
          {item.tags?.map((t) => (
            <span key={t} className="menu__tag" title={TAGS[t]?.title}>
              {TAGS[t]?.label}
            </span>
          ))}
        </span>
        {item.price != null && (
          <>
            <span className="menu__dots" aria-hidden="true" />
            <span className="menu__price">€&nbsp;{item.price.toFixed(2)}</span>
          </>
        )}
      </div>
      {item.description && <p className="menu__desc">{item.description}</p>}
    </li>
  )
}

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

      {menu.map(({ category, items, groups }) => (
        <div key={category} id={slug(category)} className="menu__section">
          <h3 className="menu__category">{category}</h3>

          {/* Grouped categories (e.g. Pizze) render a separator per group;
              simple categories render their items directly. */}
          {groups
            ? groups.map((group) => (
                <div key={group.label} className="menu__group">
                  <h4 className="menu__group-title">{group.label}</h4>
                  <ul className="menu__list">
                    {group.items.map((item, i) => (
                      <MenuItem key={`${item.name}-${i}`} item={item} index={i} />
                    ))}
                  </ul>
                </div>
              ))
            : (
                <ul className="menu__list">
                  {items.map((item, i) => (
                    <MenuItem key={`${item.name}-${i}`} item={item} index={i} />
                  ))}
                </ul>
              )}
        </div>
      ))}
    </section>
  )
}

export default Menu
