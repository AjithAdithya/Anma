import React, { useState } from 'react'
import { categories } from '../data/products'
import '../styles/Footer.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      {/* Background blobs */}
      <div className="footer__blob footer__blob--1" aria-hidden="true" />
      <div className="footer__blob footer__blob--2" aria-hidden="true" />

      <div className="footer__grid">

        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-emoji">🧶</span>
            <span className="footer__logo-text">ANMA Crochet</span>
          </div>

          <p className="footer__tagline">
            Handcrafted with love, one stitch at a time. Every piece tells a story of warmth,
            colour, and creativity. 🌈
          </p>

          <div className="footer__socials">
            <a
              className="footer__social-link footer__social-link--insta"
              href="https://instagram.com/anmacrochet"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 @anmacrochet
            </a>
            <a
              className="footer__social-link footer__social-link--email"
              href="mailto:hello@anmacrochet.com"
            >
              📧 Email Us
            </a>
          </div>

          <div className="footer__badges">
            <span className="footer__badge">✋ Handmade</span>
            <span className="footer__badge">🇮🇳 Made in India</span>
            <span className="footer__badge">💝 Made with Love</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="footer__link"
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="footer__categories">
          <h4 className="footer__col-title">Categories</h4>
          <div className="footer__links">
            {categories.filter((c) => c !== 'All').map((cat) => (
              <a
                key={cat}
                className="footer__link"
                href="#catalogue"
                onClick={(e) => { e.preventDefault(); scrollTo('#catalogue') }}
              >
                → {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer__col-title">Stay Updated ✨</h4>
          <div className="footer__newsletter">
            <p className="footer__newsletter-text">
              Get notified about new designs, special offers, and crochet inspiration!
            </p>

            {!subscribed ? (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="footer__newsletter-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Newsletter email"
                />
                <button type="submit" className="footer__newsletter-btn">
                  Join 🎉
                </button>
              </form>
            ) : (
              <p style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--mint)',
                background: 'rgba(107,203,119,0.1)',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(107,203,119,0.2)',
              }}>
                🎉 You're subscribed! Thanks for the love!
              </p>
            )}

            <p style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>
              No spam, just crochet love. Unsubscribe anytime.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 <span>ANMA Crochet</span>. All rights reserved. Made with{' '}
          <span>❤️</span> in India.
        </p>
        <div className="footer__bottom-links">
          <span className="footer__bottom-link">Privacy Policy</span>
          <span className="footer__bottom-link">Terms of Service</span>
          <span className="footer__bottom-link">Shipping Info</span>
        </div>
      </div>
    </footer>
  )
}
