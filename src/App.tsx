import './App.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter, 
  faLinkedin, 
  faReddit, 
  faGithub, 
  faQuora, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons'
import Leaderboard from './components/Leaderboard'
import GoogleAd from './components/GoogleAd'

function App() {
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  return (
    <div className="landing-page">
      <div className="page-container">
        <div className="ad-space">
          <GoogleAd adUnit="ad-unit-left" width={300} height={600} />
        </div>
        <div className="main-content">
          <div className="content-wrapper">
            <div className="hero-section">
              <h1 className="title">Business Empire</h1>
              <div className="action-buttons">
                <button className="action-btn primary">Play</button>
                <button className="action-btn secondary">How to Play</button>
                <button 
                  className="action-btn tertiary" 
                  onClick={() => setShowLeaderboard(!showLeaderboard)}
                >
                  Leaderboard
                </button>
              </div>
            </div>
            <div className="portfolio-section">
              <a href="#" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                <span>Find more tools and games</span>
                <span className="arrow">→</span>
              </a>
            </div>
            {showLeaderboard && <Leaderboard />}
          </div>
        </div>
        <div className="ad-space">
          <GoogleAd adUnit="ad-unit-right" width={300} height={600} />
        </div>
      </div>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:dante.izuogu@proton.me" className="email-link">
              dante.izuogu@proton.me
            </a>
          </div>
          <div className="footer-right">
            <a href="https://twitter.com/danteizuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/danteizuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://reddit.com/u/danteizuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faReddit} />
            </a>
            <a href="https://github.com/danteizuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://quora.com/profile/Dante-Izuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faQuora} />
            </a>
            <a href="https://facebook.com/danteizuogu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
