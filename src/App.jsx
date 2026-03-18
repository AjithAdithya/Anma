import React from 'react'
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
    </>
  )
}

export default App
