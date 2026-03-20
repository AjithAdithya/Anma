import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Marquee from './components/Marquee'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalogue from './components/Catalogue'
import About from './components/About'
import Contact from './components/Contact'
import Workshop from './components/Workshop'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Marquee />
      <Header />
      <main>
        <Hero />
        <Catalogue />
        <About />
        <Contact />
        <Workshop />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
