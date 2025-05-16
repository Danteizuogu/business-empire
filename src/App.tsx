import './App.css'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="landing-page">
      <AnimatedBackground />
      <div className="content">
        <div className="content-wrapper">
          <h1 className="title">Business Empire</h1>
          <div className="button-group">
            <button className="premium-button play">Play</button>
            <button className="premium-button how-to">How to Play</button>
            <button className="premium-button leaderboard">Leaderboard</button>
          </div>
          <p className="portfolio-link">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Find more tools and games here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
