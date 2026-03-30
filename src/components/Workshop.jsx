import { useState } from 'react'
import { useDMCountdown } from '../hooks/useDMCountdown'
import '../styles/Workshop.css'

const levels = [
  {
    icon: '🌱',
    label: 'Beginner',
    desc: 'No experience needed. Learn to hold the hook, chain stitch, and build your very first piece from scratch.',
  },
  {
    icon: '🌿',
    label: 'Intermediate',
    desc: 'Know the basics? Level up with more complex stitches, pattern reading, and shaping techniques.',
  },
  {
    icon: '🌸',
    label: 'Advanced',
    desc: 'Master amigurumi, intricate colour work, and finishing techniques that make your pieces stand out.',
  },
]

const whatYouLearn = [
  { icon: '🧶', text: 'Learn crochet basics step-by-step at your own level' },
  { icon: '💪', text: 'Gain the confidence to start projects on your own' },
  { icon: '🎁', text: 'Begin creating your very first handmade piece' },
]

const languages = ['Tamil', 'Telugu', 'English', 'Hindi']

const faqs = [
  {
    q: 'Do I need to buy my own supplies?',
    a: 'Yes — students are required to purchase their own crochet kit and yarn before the class. We have linked the exact ones we recommend below so you can order them in advance.',
  },
  {
    q: 'I have never crocheted before. Is this for me?',
    a: 'Absolutely! The beginner session is designed for complete newcomers. If you can hold a pen, you can crochet. We start from the very first stitch.',
  },
  {
    q: 'How long is each session?',
    a: 'Each session is 1 to 1.5 hours — focused and hands-on so you actually make progress without feeling overwhelmed.',
  },
  {
    q: 'What languages are the classes taught in?',
    a: 'Classes are available in Tamil, Telugu, English, and Hindi — whichever is most comfortable for you.',
  },
  {
    q: 'How do I book a slot?',
    a: 'Slots fill up quickly since we keep batches small for personal attention. DM us on Instagram to reserve your spot.',
  },
]

const DM_MESSAGES = {
  general:
    `Hi! 🧶 I'm interested in your online crochet workshop!\n\n` +
    `Could you share details on the next available slot and how to reserve my seat?\n\n` +
    `Thank you! 😊`,
  Beginner:
    `Hi! 🌱 I'm a complete beginner and I'd love to join your beginner crochet workshop!\n\n` +
    `Could you let me know the next available slot and how to confirm my seat?\n\n` +
    `Thank you! 😊`,
  Intermediate:
    `Hi! 🌿 I know the crochet basics and I'd love to join your intermediate crochet workshop!\n\n` +
    `Could you share details on what's covered and the next available batch?\n\n` +
    `Thank you! 😊`,
  Advanced:
    `Hi! 🌸 I have crochet experience and I'd love to join your advanced crochet workshop!\n\n` +
    `Could you share details on what's covered and the next available slot?\n\n` +
    `Thank you! 😊`,
}

function DMToast({ dmCopied }) {
  if (!dmCopied) return null
  return (
    <div className="workshop__dm-toast">
      <span>📋 Message copied — paste it when the DM opens!</span>
      <div className="workshop__dm-toast-bar" />
    </div>
  )
}

export default function Workshop() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeLevel, setActiveLevel] = useState(null)

  const heroDM  = useDMCountdown()
  const levelDM = useDMCountdown()
  const bookDM  = useDMCountdown()

  const handleLevelDM = (label) => {
    setActiveLevel(label)
    levelDM.trigger(DM_MESSAGES[label])
  }

  return (
    <section id="workshop" className="workshop">

      {/* ── HERO ── */}
      <div className="workshop__hero">
        <div className="workshop__hero-blob workshop__hero-blob--1" aria-hidden="true" />
        <div className="workshop__hero-blob workshop__hero-blob--2" aria-hidden="true" />

        <div className="workshop__hero-inner">
          <div className="workshop__hero-text">
            <span className="workshop__level-badge">🧵 @_anma_crochet</span>

            <h1 className="workshop__hero-title">
              Learn Crochet <span>from Home</span>
            </h1>

            <p className="workshop__hero-desc">
              Always wanted to learn crochet but didn't know where to start?
              This is your sign to begin 💙
            </p>

            <div className="workshop__hero-ctas">
              <div className="workshop__dm-wrap">
                <DMToast dmCopied={heroDM.dmCopied} />
                <button
                  className={`workshop__btn-primary${heroDM.countdown !== null ? ' workshop__btn--counting' : ''}`}
                  onClick={() => heroDM.trigger(DM_MESSAGES.general)}
                  disabled={heroDM.countdown !== null}
                >

                  {heroDM.countdown !== null ? `Opening Instagram in ${heroDM.countdown}…` : 'DM to Reserve Your Slot'}
                </button>
              </div>
              <a className="workshop__btn-secondary" href="#workshop-levels">
                View Levels →
              </a>
            </div>

            <div className="workshop__hero-pills">
              <span className="workshop__pill">⏱ 1 – 1.5 hrs / class</span>
              <span className="workshop__pill">💰 ₹300 per class</span>
              <span className="workshop__pill">🌿 Limited Slots</span>
            </div>
          </div>

          <div className="workshop__hero-visual">
            <div className="workshop__hero-card workshop__hero-card--main">
              <span className="workshop__hero-card-emoji">🧶</span>
              <p className="workshop__hero-card-label">Live Guided Session</p>
            </div>
            <div className="workshop__hero-card workshop__hero-card--sm workshop__hero-card--top">
              <span>🌱</span>
              <p>Beginner</p>
            </div>
            <div className="workshop__hero-card workshop__hero-card--sm workshop__hero-card--bot">
              <span>🌸</span>
              <p>Advanced</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT YOU'LL LEARN ── */}
      <div className="workshop__learn">
        <div className="workshop__section-header">
          <h2 className="section-title">What You'll Learn</h2>
          <p className="section-subtitle">Focused, beginner-friendly learning from the comfort of home.</p>
        </div>

        <div className="workshop__learn-grid">
          {whatYouLearn.map((item) => (
            <div className="workshop__learn-card" key={item.text}>
              <span className="workshop__learn-icon">{item.icon}</span>
              <p className="workshop__learn-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="workshop__languages">
          <span className="workshop__languages-label">🌐 Classes available in:</span>
          {languages.map((lang) => (
            <span className="workshop__lang-pill" key={lang}>{lang}</span>
          ))}
        </div>
      </div>

      {/* ── LEVELS ── */}
      <div className="workshop__levels" id="workshop-levels">
        <div className="workshop__section-header">
          <h2 className="section-title">Pick Your Level</h2>
          <p className="section-subtitle">Beginner, intermediate, and advanced — we meet you where you are.</p>
        </div>

        <div className="workshop__levels-grid">
          {levels.map((lvl) => {
            const isActive = activeLevel === lvl.label && levelDM.countdown !== null
            return (
              <div className="workshop__level-card" key={lvl.label}>
                <span className="workshop__level-icon">{lvl.icon}</span>
                <h4 className="workshop__level-title">{lvl.label}</h4>
                <p className="workshop__level-desc">{lvl.desc}</p>
                <div className="workshop__dm-wrap">
                  <DMToast dmCopied={activeLevel === lvl.label && levelDM.dmCopied} />
                  <button
                    className={`workshop__level-btn${isActive ? ' workshop__btn--counting' : ''}`}
                    onClick={() => handleLevelDM(lvl.label)}
                    disabled={isActive}
                  >
  
                    {isActive ? `Opening Instagram in ${levelDM.countdown}…` : 'Book this Level →'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── MATERIALS ── */}
      <div className="workshop__materials">
        <div className="workshop__materials-inner">
          <div className="workshop__materials-text">
            <h2 className="workshop__materials-title">Materials You'll Need</h2>
            <p className="workshop__materials-desc">
              Students are required to purchase their own kit before the class.
              Here are the exact products we recommend — tried and tested:
            </p>
            <div className="workshop__materials-links">
              <a
                className="workshop__material-btn"
                href="https://amzn.in/d/0halSOyQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                🪝 Crochet Starter Kit → Amazon
              </a>
              <a
                className="workshop__material-btn workshop__material-btn--secondary"
                href="https://magicneedles.in/products/aran-kotton-6-ply-yarn-by-hobby-store-light-cream-545"
                target="_blank"
                rel="noopener noreferrer"
              >
                🧶 Recommended Yarn → Magic Needles
              </a>
            </div>
          </div>
          <div className="workshop__materials-card">
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Duration</span>
              <span className="workshop__meta-value">1 – 1.5 Hours</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Price</span>
              <span className="workshop__meta-value">₹300 / class</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Format</span>
              <span className="workshop__meta-value">Online 🏠</span>
            </div>
            <div className="workshop__meta-divider" />
            <div className="workshop__meta-item">
              <span className="workshop__meta-label">Slots</span>
              <span className="workshop__meta-value">Limited ⚡</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOOK ── */}
      <div className="workshop__book" id="workshop-entry">
        <div className="workshop__book-inner">
          <div className="workshop__book-text">
            <span className="workshop__book-tag">⚡ First few students only</span>
            <h2 className="workshop__book-title">Ready to Start Your Crochet Journey?</h2>
            <p className="workshop__book-desc">
              Batches fill up quickly — we keep them small so every student gets personal attention.
              DM us on Instagram to check availability and reserve your slot.
            </p>
            <ul className="workshop__book-list">
              <li>✅ Beginner-friendly — no experience needed</li>
              <li>✅ 1 – 1.5 hour guided live session</li>
              <li>✅ Available in Tamil, Telugu, English & Hindi</li>
              <li>✅ Personal attention in every batch</li>
            </ul>
          </div>

          <div className="workshop__book-cta">
            <div className="workshop__book-price">
              ₹300 <span>per class</span>
            </div>
            <div className="workshop__dm-wrap workshop__dm-wrap--full">
              <DMToast dmCopied={bookDM.dmCopied} />
              <button
                className={`workshop__book-btn${bookDM.countdown !== null ? ' workshop__btn--counting' : ''}`}
                onClick={() => bookDM.trigger(DM_MESSAGES.general)}
                disabled={bookDM.countdown !== null}
              >
                {bookDM.countdown !== null ? `Opening Instagram in ${bookDM.countdown}…` : 'DM us on Instagram'}
              </button>
            </div>
            <p className="workshop__book-note">@_anma_crochet · Limited slots available</p>
          </div>
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
