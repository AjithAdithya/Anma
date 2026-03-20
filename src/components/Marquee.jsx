import React from 'react'
import '../styles/Marquee.css'

const items = [
  '🧶 New Workshop — Learn to Crochet from Scratch',
  '✨ Limited Seats Available',
  '🎀 Beginner Friendly — No Experience Needed',
  '📅 Live Sessions Every Weekend',
  '💐 Make Flowers, Dolls & Bags from Day One',
  '🌟 100% Handmade Skills, Taught with Love',
]

export default function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="marquee-bar" role="marquee">
      <div className="marquee-bar__track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-bar__item">
            {item}
            <span className="marquee-bar__sep" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
