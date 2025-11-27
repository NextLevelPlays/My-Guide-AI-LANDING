import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-bg-glow"></div>

      <div className="how-header">
        <h2>How It Works</h2>
        <p className="how-subtitle">Four simple steps to instant guidance</p>
      </div>

      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-icon">🎤</div>
          <div className="step-title">Ask a Question</div>
          <div className="step-description">Speak your question naturally. "How do I create a pivot table?"</div>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-icon">🧠</div>
          <div className="step-title">AI Analyzes</div>
          <div className="step-description">MyGuide AI transcribes your voice and analyzes your screen.</div>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-icon">✨</div>
          <div className="step-title">Generate Guidance</div>
          <div className="step-description">AI generates personalized, step-by-step instructions.</div>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-icon">📖</div>
          <div className="step-title">Learn & Execute</div>
          <div className="step-description">Follow the guidance and complete your task faster.</div>
        </div>
      </div>

      <div className="result-box">
        <div className="result-title">✓ Result: You Learn Faster</div>
        <div className="result-description">No more wasted time searching. No more generic tutorials. Just personalized guidance tailored to your exact situation.</div>
      </div>
    </section>
  )
}
