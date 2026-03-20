import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Marquee from './components/Marquee'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkshopPage from './pages/WorkshopPage'

function App() {
  return (
    <BrowserRouter>
      <Marquee />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<WorkshopPage />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </BrowserRouter>
  )
}

export default App
