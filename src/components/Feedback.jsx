import { useState } from 'react'
import './Feedback.css'

// ── Email delivery config ───────────────────────────────────────────────
// Using Web3Forms (free, no backend). Get a key at https://web3forms.com
// and paste it below. Until then, submitting shows a "not configured" notice.
const WEB3FORMS_ACCESS_KEY = 'b97da326-6471-4f13-a4e7-a29b5b3c2c8e'
// ────────────────────────────────────────────────────────────────────────

function Feedback() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const submit = async (e) => {
    e.preventDefault()
    if (rating === 0) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nuova recensione ${rating}★ — Napoli in Pizza`,
          from_name: name || 'Cliente anonimo',
          rating: `${rating} / 5`,
          message: message || '(nessun commento)',
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  // ── Thank-you screen ──
  if (status === 'success') {
    return (
      <section className="feedback">
        <h2 className="feedback__title">Grazie! 🍕</h2>
        <p className="feedback__thanks">
          La tua recensione è stata inviata. Grazie per averci aiutato a migliorare!
        </p>
      </section>
    )
  }

  const active = hover || rating

  return (
    <section className="feedback">
      <h2 className="feedback__title">Lascia una recensione</h2>
      <p className="feedback__sub">Com'è andata la tua esperienza?</p>

      <form className="feedback__form" onSubmit={submit}>
        {/* Star rating */}
        <div className="feedback__stars" role="radiogroup" aria-label="Valutazione">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              className={`feedback__star${n <= active ? ' feedback__star--on' : ''}`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${n} ${n === 1 ? 'stella' : 'stelle'}`}
              aria-pressed={n === rating}
            >
              ★
            </button>
          ))}
        </div>

        <input
          className="feedback__input"
          type="text"
          placeholder="Il tuo nome (facoltativo)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="feedback__textarea"
          placeholder="Raccontaci la tua esperienza…"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {status === 'error' && (
          <p className="feedback__msg feedback__msg--err">
            Ops, invio non riuscito. Riprova più tardi.
          </p>
        )}

        <button
          type="submit"
          className="feedback__submit"
          disabled={rating === 0 || status === 'sending'}
        >
          {status === 'sending' ? 'Invio…' : 'Invia recensione'}
        </button>
        {rating === 0 && <p className="feedback__hint">Tocca le stelle per dare un voto</p>}
      </form>
    </section>
  )
}

export default Feedback
