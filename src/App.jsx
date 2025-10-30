import { lazy, Suspense } from 'react'
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <Mentoria />
      <Pricing />
      <Guarantee />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
