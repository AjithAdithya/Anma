import React, { useState, useEffect, useRef } from 'react'
import '../styles/Hero.css'
import { reviews } from '../data/reviews'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [paused, current])

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
            Little Things <span>Handmade with Love</span>
          </h1>

          <p className="hero__subtitle">
            Discover thoughtfully handcrafted crochet flowers, adorable plushies, personalised
            gifts and keepsakes made especially for you.
          </p>

          <div className="hero__cta-group">
            <button className="hero__btn-primary" onClick={() => scrollTo('#catalogue')}>
              Shop Now 🛍️
            </button>
            <button className="hero__btn-secondary" onClick={() => scrollTo('#about')}>
              Our Story ✨
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">200+</span>
              <span className="hero__stat-label">Happy Customers</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ color: 'var(--mint)' }}>300+</span>
              <span className="hero__stat-label">Unique Designs</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ color: 'var(--lavender)' }}>5★</span>
              <span className="hero__stat-label">Rated Handmade</span>
            </div>
          </div>
        </div>

        {/* Carousel side */}
        <div
          className="hero__visual"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero__carousel">

            {/* Review card — key forces fade-in on every change */}
            <div key={current} className="hero__review-card">
              <div className="hero__review-card-inner">
                {reviews[current].image && (
                  <img
                    className="hero__review-thumb"
                    src={reviews[current].image}
                    alt={reviews[current].product}
                  />
                )}
                <div className="hero__review-card-text">
                  <div className="hero__review-stars">
                    {'★'.repeat(reviews[current].rating)}
                  </div>
                  <p className="hero__review-text">"{reviews[current].text}"</p>
                </div>
              </div>
              <div className="hero__review-footer">
                <div className="hero__review-avatar">
                  {reviews[current].name.charAt(0)}
                </div>
                <div>
                  <p className="hero__review-name">{reviews[current].name}</p>
                  <p className="hero__review-product">Bought: {reviews[current].product}</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="hero__carousel-controls">
              <button
                className="hero__carousel-arrow"
                onClick={prev}
                aria-label="Previous review"
              >
                ‹
              </button>

              <div className="hero__carousel-dots" role="tablist">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    className={`hero__carousel-dot${i === current ? ' active' : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Review ${i + 1}`}
                    aria-selected={i === current}
                  />
                ))}
              </div>

              <button
                className="hero__carousel-arrow"
                onClick={next}
                aria-label="Next review"
              >
                ›
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
