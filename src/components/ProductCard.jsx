import React, { useState } from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({ product, onSelect }) {
  const { name, category, price, description, accentColor, image } = product
  // Tall or wide photos are shown whole instead of being cropped to a square
  const [autoContain, setAutoContain] = useState(false)
  const fit = product.imageFit || (autoContain ? 'contain' : undefined)

  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      {/* Category badge */}
      <span className="product-card__badge" style={{ color: accentColor }}>
        {category}
      </span>

      {/* Product image */}
      <div className="product-card__image" aria-label={name}>
        {image
          ? <img src={image} alt={name} className={`product-card__img${fit === 'contain' ? ' product-card__img--contain' : ''}`} loading="lazy" decoding="async" style={fit ? { objectFit: fit } : undefined} onLoad={(e) => { const r = e.target.naturalHeight / e.target.naturalWidth; if (r > 1.2 || r < 0.83) setAutoContain(true) }} />
          : <span className="product-card__img-placeholder">🧶</span>
        }
      </div>

      {/* Card body */}
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>

        <div className="product-card__footer">
          {/* <span className="product-card__price" style={{ color: accentColor }}>
            ₹{price.toLocaleString('en-IN')}
          </span> */}
          <button
            className="product-card__btn"
            onClick={(e) => { e.stopPropagation(); onSelect(product) }}
          >
            <span className="product-card__btn-full">Order Now 🛒</span>
            <span className="product-card__btn-noicon">Order Now</span>
            <span className="product-card__btn-short">Order</span>
            <span className="product-card__btn-icon">🛒</span>
          </button>
        </div>
      </div>
    </article>
  )
}
