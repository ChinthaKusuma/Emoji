// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {text, count, onPlayAgain} = props

  const playAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="container12">
      <div className="con12">
        <h1 className="heading">{text}</h1>
        <p className="para12">Best Score</p>
        <p className="para13">{count}/12</p>
        <button className="btn21" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="con1">
        {text === 'You Won' && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        )}
        {text === 'You Lose' && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        )}
      </div>
    </div>
  )
}
export default WinOrLoseCard
