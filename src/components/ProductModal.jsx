import React, { useEffect, useState } from 'react'
import { trackEvent } from '../analytics'
import { useDMCountdown } from '../hooks/useDMCountdown'
import '../styles/ProductModal.css'

const INSTA_SVG = (
  <svg className="modal__insta-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

export default function ProductModal({ product, onClose }) {
  const [copied, setCopied] = useState(false)
  const { dmCopied, countdown, trigger: triggerDM } = useDMCountdown()

  useEffect(() => {
    trackEvent('product_viewed', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    })
  }, [product.id])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const shareLink = `${window.location.origin}${window.location.pathname}?item=${product.id}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
    } catch {
      const el = document.createElement('input')
      el.value = shareLink
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    trackEvent('share_link_copied', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    })
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleDM = () => {
    trackEvent('instagram_dm_clicked', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    })
    const message =
      `Hi! I'm interested in ordering this item from your crochet shop 🧶\n\n` +
      `Category: ${product.category}\n` +
      `Link: ${shareLink}\n\n` +
      `Could you share more details on availability? Thank you! 😊`
    triggerDM(message)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Image */}
        <div className="modal__image-wrap">
          {product.image
            ? <img src={product.image} alt={product.name} className="modal__image" />
            : <div className="modal__image-placeholder">🧶</div>
          }
        </div>

        {/* Details */}
        <div className="modal__body">
          <span className="modal__category" style={{ color: product.accentColor }}>
            {product.category}
          </span>
          <h2 className="modal__name">{product.name}</h2>
          {/* <p className="modal__price" style={{ color: product.accentColor }}>
            ₹{product.price.toLocaleString('en-IN')}
          </p> */}
          <p className="modal__desc">{product.description}</p>

          <div className="modal__actions">
            {dmCopied && (
              <div className="modal__dm-toast">
                <span>📋 Message copied — paste it when the DM opens!</span>
                <div className="modal__dm-toast-bar" />
              </div>
            )}
            <button
              className={`modal__btn modal__btn--dm${countdown !== null ? ' modal__btn--dm-counting' : ''}`}
              onClick={handleDM}
              disabled={countdown !== null}
            >
              {INSTA_SVG}
              {countdown !== null
                ? `Opening Instagram in ${countdown}…`
                : 'Order via Instagram DM'
              }
            </button>
            <button className="modal__btn modal__btn--share" onClick={handleCopy}>
              {copied ? '✅ Link Copied!' : '🔗 Copy Shareable Link'}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
