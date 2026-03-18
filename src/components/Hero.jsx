import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />
      <div className="hero__blob hero__blob--4" aria-hidden="true" />
      <div className="hero__blob hero__blob--5" aria-hidden="true" />

      {/* Floating dots */}
      <div className="hero__dot hero__dot--1" aria-hidden="true" />
      <div className="hero__dot hero__dot--2" aria-hidden="true" />
      <div className="hero__dot hero__dot--3" aria-hidden="true" />
      <div className="hero__dot hero__dot--4" aria-hidden="true" />
      <div className="hero__dot hero__dot--5" aria-hidden="true" />

      <div className="hero__content">
        {/* Text side */}
        <div className="hero__text">
          <div className="hero__badge">
            <span>🌟</span>
            <span>100% Handmade with Love</span>
          </div>

          <h1 className="hero__title">
            Wrap the World in <span>Handmade Magic</span>
          </h1>

          <p className="hero__subtitle">
            Every stitch is a little piece of our heart. Discover beautifully crafted crochet
            creations — from cozy blankets to adorable amigurumi — made just for you. 🧶
          </p>

          <div className="hero__cta-group">
            <button
              className="hero__btn-primary"
              onClick={() => scrollTo('#catalogue')}
            >
              Shop Now 🛍️
            </button>
            <button
              className="hero__btn-secondary"
              onClick={() => scrollTo('#about')}
            >
              Our Story ✨
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Happy Customers</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ color: 'var(--mint)' }}>50+</span>
              <span className="hero__stat-label">Unique Designs</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ color: 'var(--lavender)' }}>5★</span>
              <span className="hero__stat-label">Rated Handmade</span>
            </div>
          </div>
        </div>

        {/* Visual side */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__showcase">
            {/* Main center card */}
            <div className="hero__main-card">
              <span className="hero__main-card-emoji">🧶</span>
              <span className="hero__main-card-label">ANMA Crochet</span>
            </div>

            {/* Mini product cards */}
            <div className="hero__mini-card hero__mini-card--1">
              <span className="hero__mini-card-emoji">🌈</span>
              <span className="hero__mini-card-text">Blankets</span>
            </div>
            <div className="hero__mini-card hero__mini-card--2">
              <span className="hero__mini-card-emoji">🐰</span>
              <span className="hero__mini-card-text">Amigurumi</span>
            </div>
            <div className="hero__mini-card hero__mini-card--3">
              <span className="hero__mini-card-emoji">👜</span>
              <span className="hero__mini-card-text">Accessories</span>
            </div>
            <div className="hero__mini-card hero__mini-card--4">
              <span className="hero__mini-card-emoji">🪴</span>
              <span className="hero__mini-card-text">Home Decor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
