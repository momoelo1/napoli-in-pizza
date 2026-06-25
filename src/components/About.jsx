import { about } from '../data/info'
import './About.css'

function About() {
  return (
    <section className="about">
      <h2 className="about__title">{about.title}</h2>
      {about.paragraphs.map((p, i) => (
        <p key={i} className="about__text">{p}</p>
      ))}
    </section>
  )
}

export default About
