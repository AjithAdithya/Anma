import React from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ product, onSelect }) {
  const { name, category, price, accentColor, image } = product

  return (
    <button
      className="photo-tile"
      onClick={() => onSelect(product)}
      aria-label={`${category} — ₹${price.toLocaleString('en-IN')}`}
    >
      {image
        ? <img src={image} alt={name} className="photo-tile__img" loading="lazy" decoding="async" />
        : <div className="photo-tile__placeholder">🧶</div>
      }
      <div className="photo-tile__overlay">
        <span className="photo-tile__overlay-cat">{category}</span>
        <span className="photo-tile__overlay-price">₹{price.toLocaleString('en-IN')}</span>
      </div>
    </button>
  )
}
