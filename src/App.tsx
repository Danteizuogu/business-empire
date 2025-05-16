import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import { useState } from 'react'
import Leaderboard from './components/Leaderboard'

function App() {
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  return (
    <div className="landing-page">
      <AnimatedBackground />
      <div className="content">
        <div className="content-wrapper">
          <h1 className="title">Business Empire</h1>
          <div className="button-group">
            <button className="premium-button play">Play</button>
            <button className="premium-button how-to">How to Play</button>
            <button 
              className="premium-button leaderboard" 
              onClick={() => setShowLeaderboard(!showLeaderboard)}
            >
              Leaderboard
            </button>
          </div>
          <p className="portfolio-link">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Find more tools and games here
            </a>
          </p>
          {showLeaderboard && <Leaderboard />}
        </div>
      </div>
    </div>
  )
}

export default App
