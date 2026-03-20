import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo3.png'

const navLinks = [
  { label: 'Home',      href: '#home',      route: '/'          },
  { label: 'Catalogue', href: '#catalogue', route: '/'          },
  { label: 'Workshop',  href: null,         route: '/workshop'  },
  { label: 'About',     href: '#about',     route: '/'          },
  { label: 'Contact',   href: '#contact',   route: '/'          },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)

    // Workshop — always navigate to its own route
    if (!link.href) {
      navigate(link.route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Hash link — if already on home, just scroll; otherwise go home first then scroll
    if (location.pathname === '/') {
      const target = document.querySelector(link.href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(link.href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="/" onClick={handleLogoClick}>
          <img src={logo2} alt="ANMA Crochet wordmark" className="header__logo-wordmark" />
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`header__nav-link${location.pathname === link.route && link.route === '/workshop' ? ' active' : ''}`}
              href={link.href || link.route}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header__nav-link header__nav-cta"
            href="#catalogue"
            onClick={(e) => handleNavClick(e, { href: '#catalogue', route: '/' })}
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
            href={link.href || link.route}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="header__nav-link header__nav-cta"
          href="#catalogue"
          onClick={(e) => handleNavClick(e, { href: '#catalogue', route: '/' })}
          style={{ textAlign: 'center', marginTop: '0.25rem' }}
        >
          Shop Now ✨
        </a>
      </nav>
    </header>
  )
}
