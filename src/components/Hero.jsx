import React, { useState, useEffect, useRef } from 'react'
import '../styles/Hero.css'

import dollImg      from '../assets/Dolls/20240324_143112.jpg'
import bouquetImg   from '../assets/Flowers & Bouquets/10.jpg'
import keychainImg  from '../assets/Keychains/20240712_120255.jpg'
import bagImg       from '../assets/Bags/20231113_230941.jpg'
import flowerPotImg from '../assets/Flower Pots/20260307_155413.jpg'

const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    product: 'Crochet Doll',
    rating: 5,
    text: "Ordered a custom doll for my daughter's birthday and it was absolutely perfect! The detail and quality is stunning. Will definitely be ordering more!",
    image: dollImg,
  },
  {
    id: 2,
    name: 'Riya M.',
    product: 'Flower Bouquet',
    rating: 5,
    text: "The crochet bouquet I got as a gift was so beautiful — people kept asking if it was real! Love that it will last forever. 100% recommend.",
    image: bouquetImg,
  },
  {
    id: 3,
    name: 'Ananya K.',
    product: 'Keychain',
    rating: 5,
    text: "Got matching keychains for me and my bestie. The quality is incredible for the price. Shipped quickly and packaged so cutely! 🎀",
    image: keychainImg,
  },
  {
    id: 4,
    name: 'Divya R.',
    product: 'Crochet Bag',
    rating: 5,
    text: "This bag gets so many compliments every time I carry it. It's sturdy, spacious and unique. Totally worth every rupee!",
    image: bagImg,
  },
  {
    id: 5,
    name: 'Meera T.',
    product: 'Flower Pot Cover',
    rating: 5,
    text: "My home corner looks like a cozy little garden now. The pot covers fit perfectly and the colours are even better in person. 🪴",
    image: flowerPotImg,
  },
]

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
            Wrap the World in <span>Handmade Magic</span>
          </h1>

          <p className="hero__subtitle">
            Every stitch is a little piece of our heart. Discover beautifully crafted crochet
            creations — from cozy blankets to adorable amigurumi — made just for you. 🧶
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
              <span className="hero__stat-num" style={{ color: 'var(--mint)' }}>150+</span>
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
