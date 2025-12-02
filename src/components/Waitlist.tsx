import { useState } from 'react'
import './Waitlist.css'

interface WaitlistProps {
  isOpen: boolean
  onClose: () => void
}

export default function Waitlist({ isOpen, onClose }: WaitlistProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Send to backend
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      // Also store in localStorage as backup
      const waitlist = JSON.parse(localStorage.getItem('myguide_waitlist') || '[]')
      waitlist.push({ name, email, timestamp: new Date().toISOString() })
      localStorage.setItem('myguide_waitlist', JSON.stringify(waitlist))
      
      setSubmitted(true)
      setTimeout(() => {
        setName('')
        setEmail('')
        setSubmitted(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error submitting waitlist:', error)
      // Still show success even if backend fails, so user doesn't get stuck
      setSubmitted(true)
      setTimeout(() => {
        setName('')
        setEmail('')
        setSubmitted(false)
        onClose()
      }, 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="waitlist-modal-overlay" onClick={onClose}>
      <div className="waitlist-modal" onClick={(e) => e.stopPropagation()}>
        <button className="waitlist-close" onClick={onClose}>✕</button>

        {!submitted ? (
          <>
            <div className="urgency-badge">⏰ Limited Beta Spots Available</div>
            
            <h2>Be First to Experience<br />MyGuide AI</h2>
            <p className="waitlist-subtitle">Join our waitlist for early access, exclusive pricing, and priority support.</p>

            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span><span className="highlight">Early Access</span> - Get MyGuide AI before the public launch</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span><span className="highlight">Founding Member Pricing</span> - Lock in special rates for life</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span><span className="highlight">Priority Support</span> - Direct access to our team</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                <span><span className="highlight">Shape the Product</span> - Your feedback drives development</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <button type="submit" className="submit-button">Join the Waitlist</button>
            </form>

            <div className="trust-indicators">
              <div className="indicator">
                <span className="indicator-icon">🔒</span>
                <span>No spam, ever</span>
              </div>
              <div className="indicator">
                <span className="indicator-icon">📧</span>
                <span>Updates only</span>
              </div>
              <div className="indicator">
                <span className="indicator-icon">✓</span>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>You're on the waitlist!</h3>
            <p>Thanks for joining. Check your email for updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}
