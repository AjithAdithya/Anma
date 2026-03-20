import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalogue from './components/Catalogue'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalogue />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
