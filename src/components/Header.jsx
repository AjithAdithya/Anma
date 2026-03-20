import React, { useState, useEffect } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo3.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          
          <img src={logo2} alt="ANMA Crochet wordmark" className="header__logo-wordmark" />
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="header__nav-link"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header__nav-link header__nav-cta"
            href="#catalogue"
            onClick={(e) => handleNavClick(e, '#catalogue')}
          >
            Shop Now ✨
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="header__hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className={`header__mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="header__nav-link"
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="header__nav-link header__nav-cta"
          href="#catalogue"
          onClick={(e) => handleNavClick(e, '#catalogue')}
          style={{ textAlign: 'center', marginTop: '0.25rem' }}
        >
          Shop Now ✨
        </a>
      </nav>
    </header>
  )
}
