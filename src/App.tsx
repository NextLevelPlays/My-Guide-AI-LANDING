import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <div className="app">
      <Hero onJoinClick={() => setWaitlistOpen(true)} />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Waitlist isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  )
}

export default App
