import './Problem.css'

export default function Problem() {
  return (
    <section className="problem">
      <div className="problem-bg-glow"></div>

      <div className="problem-content">
        <div className="problem-left">
          <h2>The Problem:<br />Learning Software is Broken</h2>

          <div className="problem-item">
            <div className="problem-icon">📺</div>
            <div className="problem-text">
              <div className="problem-title">Outdated Tutorials</div>
              <div className="problem-description">Most tutorials are months or years old. Software updates, but tutorials don't.</div>
            </div>
          </div>

          <div className="problem-item">
            <div className="problem-icon">❓</div>
            <div className="problem-text">
              <div className="problem-title">Generic Answers</div>
              <div className="problem-description">One-size-fits-all solutions don't work. Your situation is unique, but tutorials treat everyone the same.</div>
            </div>
          </div>

          <div className="problem-item">
            <div className="problem-icon">⏱️</div>
            <div className="problem-text">
              <div className="problem-title">Wasted Time</div>
              <div className="problem-description">You waste hours searching for answers, watching irrelevant content, and trying things that don't work.</div>
            </div>
          </div>

          <div className="problem-item">
            <div className="problem-icon">😤</div>
            <div className="problem-text">
              <div className="problem-title">Frustration & Burnout</div>
              <div className="problem-description">Learning feels impossible. People give up before they even start.</div>
            </div>
          </div>
        </div>

        <div className="problem-right">
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">73%</div>
              <div className="stat-label">of people give up learning new software within the first week</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4.2 hrs</div>
              <div className="stat-label">average time wasted searching for answers per task</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">89%</div>
              <div className="stat-label">say tutorials don't match their specific situation</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">$2.1B</div>
              <div className="stat-label">annual cost of lost productivity due to poor software training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
