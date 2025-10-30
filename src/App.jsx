import { lazy, Suspense, useEffect, useState } from 'react'
import './index.css'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import Features from './components/Features'
import Mentoria from './components/Mentoria'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowRest(true), 230000) // 3min50s
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Hero showCTA={showRest} />
      {showRest && (
        <>
          <Problems />
          <Solution />
          <Features />
          <Mentoria />
          <Pricing />
          <Guarantee />
          <CTA />
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  )
}

export default App
