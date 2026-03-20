import React from 'react'
import { categories } from '../data/products'
import '../styles/Footer.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo3.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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
            
            <img src={logo2} alt="ANMA Crochet wordmark" className="footer__logo-wordmark" />
          </div>

          <p className="footer__tagline">
            Handcrafted with love, one stitch at a time. Every piece tells a story of warmth,
            colour, and creativity. 🌈
          </p>

          <div className="footer__socials">
            <a
              className="footer__social-link footer__social-link--insta"
              href="https://instagram.com/_anma_crochet"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 @_anma_crochet
            </a>
            <a
              className="footer__social-link footer__social-link--email"
              href="mailto:rkmadhu0509@gmail.com"
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


      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2024 <span>ANMA Crochet</span>. All rights reserved. Made with{' '}
          <span>❤️</span> in India.
        </p>
        
      </div>
    </footer>
  )
}
