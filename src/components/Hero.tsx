import './Hero.css'

interface HeroProps {
  onJoinClick: () => void
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>
      
      <div className="hero-content">
        <div className="hero-left">
          <h1>Learn Faster with AI-Powered Guidance</h1>
          <p className="hero-subheading">Stop struggling with outdated tutorials. MyGuide AI listens to your questions, analyzes your screen, and provides real-time, personalized guidance powered by advanced AI.</p>
          
          <button className="cta-button" onClick={onJoinClick}>Join the Waitlist</button>

          <div className="trust-badges">
            <div className="badge">
              <div className="badge-icon">✓</div>
              <span>AI-Powered Learning</span>
            </div>
            <div className="badge">
              <div className="badge-icon">✓</div>
              <span>Real-Time Guidance</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="mic-visual">
            <div className="mic-circle">
              <svg className="mic-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </div>
            <div className="waveform">
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
