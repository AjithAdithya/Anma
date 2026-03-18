import React, { useState, useEffect } from 'react'
import { products } from '../data/products'
import '../styles/Contact.css'

const productNames = ['Select a product...', ...products.map((p) => p.name)]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Listen for product selection from ProductCard
  useEffect(() => {
    const handler = (e) => {
      setForm((prev) => ({ ...prev, product: e.detail }))
      // Small delay so scroll animation completes first
    }
    window.addEventListener('selectProduct', handler)
    return () => window.removeEventListener('selectProduct', handler)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleReset = () => {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h2 className="section-title">Order / Contact Us 💌</h2>
        <p className="section-subtitle">
          Ready to order or have questions? We'd love to hear from you!
        </p>
      </div>

      <div className="contact__inner">

        {/* LEFT: Contact Info */}
        <div className="contact__info">
          <div>
            <h3 className="contact__info-title">Let's Connect!</h3>
            <p className="contact__info-subtitle">
              Fill in the form or reach out directly. We reply within 24 hours and love chatting
              about all things crochet! 🧶
            </p>
          </div>

          <div className="contact__info-cards">
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--email">📧</div>
              <div>
                <p className="contact__info-label">Email Us</p>
                <p className="contact__info-value">
                  <a href="mailto:hello@anmacrochet.com">hello@anmacrochet.com</a>
                </p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--insta">📸</div>
              <div>
                <p className="contact__info-label">Instagram</p>
                <p className="contact__info-value">
                  <a
                    href="https://instagram.com/anmacrochet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @anmacrochet
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--hours">⏰</div>
              <div>
                <p className="contact__info-label">Response Hours</p>
                <p className="contact__info-value">Mon–Sat, 10 AM – 7 PM IST</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--coral-pastel), var(--lavender-pastel))',
              fontSize: '3.5rem',
              boxShadow: 'var(--shadow-md)',
              animation: 'float 5s ease-in-out infinite',
            }}>
              🧶
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray)' }}>
              Handmade just for you ✨
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact__form-wrap">
          {!submitted ? (
            <>
              <h3 className="contact__form-title">Send an Order / Enquiry</h3>
              <p className="contact__form-subtitle">
                Tell us what you need and we'll get back to you with details!
              </p>

              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {/* Row: Name + Email */}
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row: Phone + Product */}
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="contact__input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="product">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      className="contact__select"
                      value={form.product}
                      onChange={handleChange}
                    >
                      {productNames.map((p) => (
                        <option key={p} value={p === 'Select a product...' ? '' : p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="contact__form-group">
                  <label className="contact__label" htmlFor="message">
                    Your Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    placeholder="Tell us what you'd like — custom colours, sizes, quantities, gifting needs... anything!"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={loading || !form.name || !form.email || !form.message}
                >
                  {loading ? (
                    <>Sending... ⏳</>
                  ) : (
                    <>Send Message 💌</>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="contact__success">
              <span className="contact__success-emoji">🎉</span>
              <h3 className="contact__success-title">Message Sent!</h3>
              <p className="contact__success-text">
                Thank you, <strong>{form.name}</strong>! We've received your message and will get
                back to you within 24 hours. We can't wait to create something beautiful for you!
                🧶💕
              </p>
              <button
                className="btn btn-secondary contact__success-btn"
                onClick={handleReset}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
