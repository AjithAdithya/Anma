import React, { useState, useEffect } from 'react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import '../styles/Catalogue.css'

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Open product from ?item=ID on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const itemId = params.get('item')
    if (itemId) {
      const found = products.find((p) => p.id === Number(itemId))
      if (found) setSelectedProduct(found)
    }
  }, [])

  const handleSelect = (product) => {
    setSelectedProduct(product)
    const url = new URL(window.location)
    url.searchParams.set('item', product.id)
    window.history.pushState({}, '', url)
  }

  const handleClose = () => {
    setSelectedProduct(null)
    const url = new URL(window.location)
    url.searchParams.delete('item')
    window.history.pushState({}, '', url)
  }

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
            {cat === 'Bags' && '👜 '}
            {cat === 'Clips' && '🎀 '}
            {cat === 'Crochet Beanie' && '🧢 '}
            {cat === 'Dolls' && '🧸 '}
            {cat === 'Earrings' && '💎 '}
            {cat === 'Flower Pots' && '🪴 '}
            {cat === 'Flowers & Bouquets' && '💐 '}
            {cat === 'Gajra' && '🌸 '}
            {cat === 'Keychains' && '🔑 '}
            {cat === 'Magnets' && '🧲 '}
            {cat === 'Sweater' && '🧥 '}
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="catalogue__count">
        Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
      </p>

      {/* Photo grid */}
      <div className="catalogue__grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={handleSelect} />
          ))
        ) : (
          <div className="catalogue__empty">
            <span className="catalogue__empty-emoji">🔍</span>
            <p className="catalogue__empty-text">No items found in this category yet!</p>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </section>
  )
}
