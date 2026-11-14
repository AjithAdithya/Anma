import React from 'react'
import Hero from '../components/Hero'
import Catalogue from '../components/Catalogue'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Catalogue />
      <Reviews />
      <About />
      <Contact />
    </>
  )
}
