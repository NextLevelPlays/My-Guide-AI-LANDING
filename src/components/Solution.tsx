import './Solution.css'

export default function Solution() {
  return (
    <section className="solution">
      <div className="solution-bg-glow-1"></div>
      <div className="solution-bg-glow-2"></div>

      <div className="solution-content">
        <h2>Introducing MyGuide AI</h2>
        <p className="solution-subtitle">Real-time, personalized guidance powered by advanced AI. Ask a question. Get instant help. Learn faster.</p>

        <div className="benefits">
          <div className="benefit">
            <div className="benefit-icon">🎤</div>
            <div className="benefit-title">Voice-Powered</div>
            <div className="benefit-description">Just speak your question. No typing. No searching. AI understands your exact situation.</div>
          </div>

          <div className="benefit">
            <div className="benefit-icon">🧠</div>
            <div className="benefit-title">AI-Powered Analysis</div>
            <div className="benefit-description">MyGuide AI sees your screen and understands what you're working on. Context matters.</div>
          </div>

          <div className="benefit">
            <div className="benefit-icon">⚡</div>
            <div className="benefit-title">Instant Guidance</div>
            <div className="benefit-description">Get step-by-step instructions in seconds. No more wasted time searching.</div>
          </div>
        </div>

        <p className="solution-tech">Built with <span className="highlight">OpenAI Whisper</span>, <span className="highlight">GPT-4 Vision</span>, and <span className="highlight">ElevenLabs</span> for the most advanced learning experience.</p>
      </div>
    </section>
  )
}
