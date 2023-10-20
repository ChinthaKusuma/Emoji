// Write your code here.
import './index.css'

const NavBar = props => {
  // eslint-disable-next-line
  const {item, count, score} = props
  return (
    <div className="nav_bar">
      <div className="one">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="img1"
          alt="logo"
        />
        <p className="para">Emoji Game</p>
      </div>
      <div className="one">
        <p className="para">Score: {count}</p>
        <p className="para">Top Score: {score}</p>
      </div>
    </div>
  )
}
export default NavBar
