import React, { useState } from 'react'
import '../styles/Workshop.css'

const modules = [
  {
    icon: '🧶',
    title: 'Starting from Scratch',
    desc: 'Learn to hold the hook, make a slip knot, and chain stitch. The foundation of every crochet project.',
  },
  {
    icon: '🔄',
    title: 'Magic Loop Mastery',
    desc: 'Say goodbye to gaps! Master the magic loop — the cleanest start for all your circular amigurumi projects.',
  },
  {
    icon: '📖',
    title: 'Reading Crochet Patterns',
    desc: 'Decode abbreviations, stitch counts, and repeats. Turn any pattern into a clear, step-by-step guide.',
  },
  {
    icon: '💐',
    title: 'Flowers & Bouquets',
    desc: 'Craft beautiful crochet flowers that last forever. Build a full bouquet from individual petals.',
  },
  {
    icon: '🧸',
    title: 'Amigurumi Basics',
    desc: 'Shape, stuff, and assemble your first crochet doll. Learn safety eyes, invisible decrease, and finishing.',
  },
  {
    icon: '🎀',
    title: 'Finishing & Gifting',
    desc: 'Weave in ends neatly, block your pieces, and package your handmade creations beautifully.',
  },
]

const faqs = [
  {
    q: 'Do I need to bring my own supplies?',
    a: 'No! A starter kit (yarn + hook) is included in your workshop entry. Just bring your hands and a happy heart.',
  },
  {
    q: 'Is this suitable for complete beginners?',
    a: 'Absolutely. We start from the very first stitch. If you can hold a pen, you can crochet.',
  },
  {
    q: 'What will I make by the end?',
    a: 'You will leave with a finished crochet flower bouquet and the foundations to start your own amigurumi doll.',
  },
  {
    q: 'How many people are in each batch?',
    a: 'We keep batches small — maximum 10 people — so every student gets personal attention.',
  },
]

export default function Workshop() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email) setSubmitted(true)
  }

  return (
    <section id="workshop" className="workshop">

      {/* ── HERO ── */}
      <div className="workshop__hero">
        <div className="workshop__hero-blob workshop__hero-blob--1" aria-hidden="true" />
        <div className="workshop__hero-blob workshop__hero-blob--2" aria-hidden="true" />

        <div className="workshop__hero-inner">
          <div className="workshop__hero-text">
            <span className="workshop__level-badge">🌱 Level: Total Beginner</span>

            <h1 className="workshop__hero-title">
              Master the <span>Magic Loop</span>
            </h1>

            <p className="workshop__hero-desc">
              Stop struggling with holes in your projects. Learn the professional secret to starting
              perfect amigurumi, hats, and coasters — in a single hands-on session. 🧶
            </p>

            <div className="workshop__hero-ctas">
              <a className="workshop__btn-primary" href="#workshop-entry">
                Reserve Your Hook 🪝
              </a>
              <a className="workshop__btn-secondary" href="#workshop-modules">
                View Syllabus →
              </a>
            </div>

            <div className="workshop__hero-pills">
              <span className="workshop__pill">📅 Every Weekend</span>
              <span className="workshop__pill">👥 Max 10 Seats</span>
              <span className="workshop__pill">⏱ 4 Hours</span>
            </div>
          </div>

          <div className="workshop__hero-visual">
            <div className="workshop__hero-card workshop__hero-card--main">
              <span className="workshop__hero-card-emoji">🧶</span>
              <p className="workshop__hero-card-label">Live Hands-On Session</p>
            </div>
            <div className="workshop__hero-card workshop__hero-card--sm workshop__hero-card--top">
              <span>💐</span>
              <p>Flowers</p>
            </div>
            <div className="workshop__hero-card workshop__hero-card--sm workshop__hero-card--bot">
              <span>🧸</span>
              <p>Amigurumi</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT'S INSIDE ── */}
      <div className="workshop__inside" id="workshop-modules">
        <div className="workshop__section-header">
          <h2 className="section-title">What's Inside the Workshop?</h2>
          <p className="section-subtitle">Four hours of focused, whimsical learning.</p>
        </div>

        <div className="workshop__inside-layout">
          <div className="workshop__modules-grid">
            {modules.map((m) => (
              <div className="workshop__module-card" key={m.title}>
                <span className="workshop__module-icon">{m.icon}</span>
                <div>
                  <h4 className="workshop__module-title">{m.title}</h4>
                  <p className="workshop__module-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="workshop__meta-card">
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Duration</span>
              <span className="workshop__meta-value">4 Hours</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Level</span>
              <span className="workshop__meta-value">Beginner</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Format</span>
              <span className="workshop__meta-value">In-Person</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Kit</span>
              <span className="workshop__meta-value">Included ✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MASTERPIECE ── */}
      <div className="workshop__masterpiece">
        <div className="workshop__masterpiece-text">
          <h2 className="workshop__masterpiece-title">Your Final Masterpiece</h2>
          <p className="workshop__masterpiece-desc">
            Walk away with a finished crochet flower bouquet and the foundations to build
            your very own amigurumi — created entirely from scratch, by you. 🌸
          </p>
          <ul className="workshop__masterpiece-list">
            <li>✅ Crochet flower bouquet (take home)</li>
            <li>✅ Amigurumi starter — ready to finish at home</li>
            <li>✅ Printed pattern booklet</li>
            <li>✅ Lifetime access to our stitch video library</li>
          </ul>
        </div>

        <div className="workshop__masterpiece-gallery">
          <div className="workshop__gallery-card workshop__gallery-card--lg">
            <span>💐</span>
            <p>Crochet Bouquet</p>
          </div>
          <div className="workshop__gallery-card">
            <span>🧸</span>
            <p>Amigurumi Doll</p>
          </div>
          <div className="workshop__gallery-card">
            <span>🪴</span>
            <p>Pot Cover</p>
          </div>
        </div>
      </div>

      {/* ── INSTRUCTOR ── */}
      <div className="workshop__instructor">
        <div className="workshop__instructor-avatar">
          <span className="workshop__instructor-emoji">👩‍🎨</span>
          <div className="workshop__instructor-badge">10+ Years Crafting</div>
        </div>

        <div className="workshop__instructor-bio">
          <span className="workshop__instructor-tag">Meet Your Instructor</span>
          <h2 className="workshop__instructor-name">The ANMA Crochet Studio</h2>
          <p className="workshop__instructor-desc">
            ANMA Crochet was born from a love of yarn, color, and the joy of making something
            beautiful from scratch. With over a decade of crocheting experience and hundreds of
            happy customers, we now bring our craft to life in hands-on workshops — one stitch
            at a time. 🌈
          </p>
          <p className="workshop__instructor-quote">
            "Crochet isn't just a hobby; it's a way of weaving patience and love into something
            tangible. We can't wait to help you start your journey!"
          </p>
          <div className="workshop__instructor-stats">
            <div className="workshop__instructor-stat">
              <span>500+</span><p>Students</p>
            </div>
            <div className="workshop__instructor-stat">
              <span>50+</span><p>Designs</p>
            </div>
            <div className="workshop__instructor-stat">
              <span>5★</span><p>Rated</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── ENTRY + FORM ── */}
      <div className="workshop__entry" id="workshop-entry">
        <div className="workshop__pricing-card">
          <h3 className="workshop__pricing-title">Workshop Entry</h3>
          <p className="workshop__pricing-sub">Everything you need to master the loom</p>
          <div className="workshop__pricing-amount">₹999 <span>/ seat</span></div>

          <ul className="workshop__pricing-list">
            <li>✅ 4 hours of live, in-person instruction</li>
            <li>✅ Complete crochet starter kit (Yarn + Hook)</li>
            <li>✅ Printed pattern booklet</li>
            <li>✅ Lifetime access to video stitch library</li>
            <li>✅ Certificate of completion</li>
          </ul>

          <div className="workshop__pricing-next">
            📅 Next Class: <strong>Saturday @ 10:00 AM</strong>
          </div>
        </div>

        <div className="workshop__form-card">
          <h3 className="workshop__form-title">Secure Your Spot</h3>

          {!submitted ? (
            <form className="workshop__form" onSubmit={handleSubmit}>
              <div className="workshop__field">
                <label className="workshop__label">Full Name</label>
                <input
                  className="workshop__input"
                  type="text"
                  placeholder="Your creative name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="workshop__field">
                <label className="workshop__label">Email Address</label>
                <input
                  className="workshop__input"
                  type="email"
                  placeholder="crafty@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="workshop__form-btn">
                Confirm Registration 🎉
              </button>
              <p className="workshop__form-note">Limited to 10 participants per session.</p>
            </form>
          ) : (
            <div className="workshop__form-success">
              <span>🎉</span>
              <h4>You're registered!</h4>
              <p>We'll send your confirmation and class details to <strong>{form.email}</strong> shortly.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="workshop__faq">
        <h3 className="workshop__faq-title">Common Questions</h3>
        <div className="workshop__faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`workshop__faq-item${openFaq === i ? ' open' : ''}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="workshop__faq-q">
                <span>{faq.q}</span>
                <span className="workshop__faq-icon">{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && <p className="workshop__faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
