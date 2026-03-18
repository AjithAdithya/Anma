import React from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ product }) {
  const { name, category, price, description, emoji, bgColor, accentColor } = product

  const handleOrder = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // Pre-fill the product interest — dispatch a custom event
      window.dispatchEvent(new CustomEvent('selectProduct', { detail: name }))
    }
  }

  return (
    <article className="product-card">
      {/* Category badge */}
      <span className="product-card__badge" style={{ color: accentColor }}>
        {category}
      </span>

      {/* Emoji image placeholder */}
      <div
        className="product-card__image"
        style={{ background: bgColor }}
        aria-label={name}
        role="img"
      >
        {emoji}
      </div>

      {/* Card body */}
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>

        <div className="product-card__footer">
          <span className="product-card__price" style={{ color: accentColor }}>
            ₹{price.toLocaleString('en-IN')}
          </span>
          <button className="product-card__btn" onClick={handleOrder}>
            Order Now 🛒
          </button>
        </div>
      </div>
    </article>
  )
}
