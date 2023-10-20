/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojisList1: true,
    emojis: [],
    count: 0,
    score: 0,

    card: false,
    text: ' ',
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    const {count, score} = this.state
    if (count > score) {
      this.setState({
        emojisList1: true,
        emojis: [],

        score: count,
        count: 0,

        card: false,
        text: ' ',
      })
    } else {
      this.setState({
        emojisList1: true,
        emojis: [],
        count: 0,
        score,

        card: false,
        text: ' ',
      })
    }
  }

  emojiChange = id => {
    const {emojis, text} = this.state
    const {emojisList} = this.props

    // const length1 = emojisList.length
    // const length2 = emojis.length

    this.setState(prevState => ({
      emojisList1: !prevState.emojisList1,
      emojis: [...prevState.emojis, id],
    }))
    const present = emojis.includes(id)
    if (!present) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
      if (emojis.length >= 11) {
        this.setState({
          card: true,
          text: 'Your Win',
        })
      }
    } else {
      this.setState({
        card: true,
        text: 'Your Loose',
      })
    }
  }

  render() {
    const shuffledEmojisList = this.getShuffledEmojisList()
    const {emojis, count, score, card, text} = this.state

    console.log(emojis)

    return (
      <div className="bgContainer">
        <NavBar count={count} score={score} />

        {card === false && (
          <ul className="container1">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                item={each}
                key={each.id}
                emojiChange={this.emojiChange}
              />
            ))}
          </ul>
        )}
        {card === true && (
          <WinOrLoseCard
            text={text}
            count={count}
            onPlayAgain={this.onPlayAgain}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
