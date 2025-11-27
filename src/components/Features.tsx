import './Features.css'

export default function Features() {
  return (
    <section className="features">
      <div className="features-bg-glow"></div>

      <div className="features-content">
        <div className="features-left">
          <h2>Key Features</h2>

          <div className="feature">
            <div className="feature-number">1</div>
            <div className="feature-content-box">
              <div className="feature-title">Voice Recording</div>
              <div className="feature-description">Click the microphone button and ask your question naturally. MyGuide AI captures every word with crystal-clear audio quality.</div>
              <div className="feature-highlight">
                <div className="highlight-dot"></div>
                <span>Real-time waveform visualization</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="feature-number">2</div>
            <div className="feature-content-box">
              <div className="feature-title">AI Transcription</div>
              <div className="feature-description">Your voice is instantly converted to text using advanced speech recognition. Accurate, fast, and understands context.</div>
              <div className="feature-highlight">
                <div className="highlight-dot"></div>
                <span>Powered by OpenAI Whisper</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="feature-number">3</div>
            <div className="feature-content-box">
              <div className="feature-title">Screen Analysis</div>
              <div className="feature-description">MyGuide AI analyzes your screen to understand exactly what you're working on. Context-aware guidance that actually helps.</div>
              <div className="feature-highlight">
                <div className="highlight-dot"></div>
                <span>GPT-4 Vision powered</span>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="feature-number">4</div>
            <div className="feature-content-box">
              <div className="feature-title">Step-by-Step Guidance</div>
              <div className="feature-description">Receive personalized, step-by-step instructions tailored to your specific situation. Clear, actionable, and easy to follow.</div>
              <div className="feature-highlight">
                <div className="highlight-dot"></div>
                <span>AI-generated in real-time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-right">
          <div className="visual-feature">
            <div className="visual-icon">🎤</div>
            <div className="visual-label">Voice Input</div>
            <div className="visual-sublabel">Ask naturally</div>
          </div>

          <div className="visual-feature">
            <div className="visual-icon">✨</div>
            <div className="visual-label">AI Processing</div>
            <div className="visual-sublabel">Instant analysis</div>
          </div>

          <div className="visual-feature">
            <div className="visual-icon">📊</div>
            <div className="visual-label">Screen Context</div>
            <div className="visual-sublabel">Sees what you see</div>
          </div>

          <div className="visual-feature">
            <div className="visual-icon">📝</div>
            <div className="visual-label">Guidance Output</div>
            <div className="visual-sublabel">Step-by-step help</div>
          </div>
        </div>
      </div>
    </section>
  )
}
