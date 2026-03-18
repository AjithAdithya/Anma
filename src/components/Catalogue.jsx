import React, { useState, useEffect } from 'react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import '../styles/Catalogue.css'

const PAGE_SIZE = 6

function sortProducts(list, sortBy) {
  const copy = [...list]
  if (sortBy === 'price-asc')  return copy.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') return copy.sort((a, b) => b.price - a.price)
  if (sortBy === 'category')   return copy.sort((a, b) => a.category.localeCompare(b.category))
  return copy
}

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [sortBy, setSortBy] = useState('default')
  const [page, setPage] = useState(1)

  // Open product from ?item=ID on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const itemId = params.get('item')
    if (itemId) {
      const found = products.find((p) => p.id === Number(itemId))
      if (found) setSelectedProduct(found)
    }
  }, [])

  // Reset to page 1 whenever filter or sort changes
  useEffect(() => { setPage(1) }, [activeCategory, sortBy])

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

  const handlePageChange = (newPage) => {
    setPage(newPage)
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filtered   = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)
  const sorted     = sortProducts(filtered, sortBy)
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const paginated  = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const rangeStart = (page - 1) * PAGE_SIZE + 1
  const rangeEnd   = Math.min(page * PAGE_SIZE, sorted.length)

  // Page number list with ellipsis for large sets
  const pageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages = new Set([1, totalPages, page, page - 1, page + 1].filter(p => p >= 1 && p <= totalPages))
    return [...pages].sort((a, b) => a - b)
  }

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

      {/* Controls: count + sort */}
      <div className="catalogue__controls">
        <p className="catalogue__count">
          {sorted.length > 0
            ? <>Showing <strong>{rangeStart}–{rangeEnd}</strong> of <strong>{sorted.length}</strong> {sorted.length === 1 ? 'item' : 'items'}{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}</>
            : 'No items found'
          }
        </p>
        <div className="catalogue__sort">
          <label className="catalogue__sort-label" htmlFor="sort-select">Sort by</label>
          <select
            id="sort-select"
            className="catalogue__sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="category">Category (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="catalogue__grid">
        {paginated.length > 0 ? (
          paginated.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={handleSelect} />
          ))
        ) : (
          <div className="catalogue__empty">
            <span className="catalogue__empty-emoji">🔍</span>
            <p className="catalogue__empty-text">No items found in this category yet!</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="catalogue__pagination">
          <button
            className="catalogue__page-btn catalogue__page-btn--nav"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            ← Prev
          </button>

          {pageNumbers().map((p, i, arr) => (
            <React.Fragment key={p}>
              {i > 0 && arr[i - 1] !== p - 1 && (
                <span className="catalogue__page-ellipsis">…</span>
              )}
              <button
                className={`catalogue__page-btn${page === p ? ' active' : ''}`}
                onClick={() => handlePageChange(p)}
                aria-label={`Page ${p}`}
                aria-current={page === p ? 'page' : undefined}
              >
                {p}
              </button>
            </React.Fragment>
          ))}

          <button
            className="catalogue__page-btn catalogue__page-btn--nav"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>
      )}

      {/* Lightbox modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </section>
  )
}
