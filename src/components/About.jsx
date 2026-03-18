import React from 'react'
import '../styles/About.css'

export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* LEFT: Visual / Decorative */}
        <div className="about__visual" aria-hidden="true">
          <div className="about__circle-bg" />
          <div className="about__ring about__ring--1" />
          <div className="about__ring about__ring--2" />

          <div className="about__main-emoji">
            <span className="about__main-emoji-icon">🧶</span>
            <span className="about__main-emoji-label">ANMA Crochet</span>
          </div>

          <div className="about__accent about__accent--1">🌸</div>
          <div className="about__accent about__accent--2">💜</div>
          <div className="about__accent about__accent--3">✨</div>
          <div className="about__accent about__accent--4">🌈</div>
        </div>

        {/* RIGHT: Story Text */}
        <div className="about__text">
          <span className="about__label">🌟 Our Story</span>

          <h2 className="about__title">
            Made with <span>Heart</span>,<br />Stitched with <span>Soul</span>
          </h2>

          <p className="about__story">
            <strong>ANMA Crochet</strong> was born in a cozy corner of a Bangalore apartment, where
            Anma — a self-taught crocheter with an unstoppable love for colours and yarn — began
            crafting little creations that made everyone around her smile.
          </p>
          <p className="about__story">
            What started as a hobby quickly turned into a calling.{' '}
            <strong>Every blanket, every tiny bunny, every bucket hat</strong> you see here carries
            hours of careful work, love-loaded stitches, and Anma's signature warmth. She sources
            the softest, most vibrant yarns she can find and pours herself into every single piece.
          </p>
          <p className="about__story">
            At ANMA Crochet, we believe handmade isn't just a product — it's a{' '}
            <strong>feeling</strong>. When you wrap a baby in one of our blankets or gift a friend an
            amigurumi, you're sharing something irreplaceable: a piece of someone's time, care, and
            creativity. That's our whole heart in every order. 🧡
          </p>

          {/* Value highlights */}
          <div className="about__highlights">
            <div className="about__highlight">
              <div className="about__highlight-icon">💛</div>
              <div className="about__highlight-body">
                <p className="about__highlight-title">100% Handmade</p>
                <p className="about__highlight-desc">Every item is crocheted by hand — no machines, no shortcuts, just love.</p>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon about__highlight-icon--2">🌿</div>
              <div className="about__highlight-body">
                <p className="about__highlight-title">Safe & Soft Materials</p>
                <p className="about__highlight-desc">Baby-safe, skin-friendly yarns. Gentle on little ones and the planet.</p>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon about__highlight-icon--3">🎁</div>
              <div className="about__highlight-body">
                <p className="about__highlight-title">Custom Orders Welcome</p>
                <p className="about__highlight-desc">Want a special colour or design? Just reach out — we love custom creations!</p>
              </div>
            </div>
          </div>

          <div className="about__cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get in Touch 💬
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
