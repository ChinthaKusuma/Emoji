// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {text, count, onPlayAgain} = props
  const imgUrl =
    text === 'your Loose'
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
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
        <img src={imgUrl} alt="one" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
