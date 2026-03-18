import React, { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import '../styles/Catalogue.css'

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="catalogue" className="catalogue">
      {/* Header */}
      <div className="catalogue__header">
        <h2 className="section-title">Our Catalogue 🧶</h2>
        <p className="section-subtitle">
          Every piece is made with patience, passion, and a whole lot of yarn love.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="catalogue__filters" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`catalogue__filter-btn${activeCategory === cat ? ' active' : ''}`}
            data-cat={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat === 'All' && '✨ '}
            {cat === 'Blankets' && '🌈 '}
            {cat === 'Amigurumi' && '🐰 '}
            {cat === 'Clothing' && '👗 '}
            {cat === 'Accessories' && '👜 '}
            {cat === 'Home Decor' && '🪴 '}
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="catalogue__count">
        Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
      </p>

      {/* Grid */}
      <div className="catalogue__grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="catalogue__empty">
            <span className="catalogue__empty-emoji">🔍</span>
            <p className="catalogue__empty-text">No items found in this category yet!</p>
          </div>
        )}
      </div>
    </section>
  )
}
