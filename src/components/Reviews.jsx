import React from 'react'
import { reviews } from '../data/reviews'
import '../styles/Reviews.css'

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__header">
        <h2 className="section-title">Customer Reviews 💕</h2>
        <p className="section-subtitle">
          Kind words from the lovely people who bring our creations home.
        </p>
      </div>

      <div className="reviews__grid">
        {reviews.map((r) => (
          <article key={r.id} className="reviews__card">
            {r.image && <img className="reviews__img" src={r.image} alt={r.product} loading="lazy" />}
            <div className="reviews__body">
              <div className="reviews__stars" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}
              </div>
              <p className="reviews__text">"{r.text}"</p>
              <div className="reviews__footer">
                <div className="reviews__avatar">{r.name.charAt(0)}</div>
                <div>
                  <p className="reviews__name">{r.name}</p>
                  <p className="reviews__product">Bought: {r.product}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
