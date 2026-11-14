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
              className="footer__social-link footer__social-link--wa"
              href="https://wa.me/918438355257"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +91 84383 55257
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
