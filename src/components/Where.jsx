import { contact } from '../data/info'
import './Where.css'

function Where() {
  return (
    <section className="where">
      <h2 className="where__title">{contact.title}</h2>

      <div className="where__block">
        <span className="where__label">📍 Indirizzo</span>
        <p className="where__value">{contact.address}</p>
        <a className="where__btn" href={contact.mapsUrl} target="_blank" rel="noreferrer">
          Apri in Maps
        </a>
      </div>

      <div className="where__block">
        <span className="where__label">📞 Telefono</span>
        <p className="where__value">
          <a className="where__phone" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
            {contact.phone}
          </a>
        </p>
      </div>

      <div className="where__block">
        <span className="where__label">🕒 Orari</span>
        <ul className="where__hours">
          {contact.hours.map((h) => (
            <li key={h.days} className="where__hours-row">
              <span>{h.days}</span>
              <span>{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Where
