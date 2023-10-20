// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiChange, item} = props
  const {id} = item
  const onClickEmoji = () => {
    emojiChange(id)
  }

  const {emojiUrl, emojiName} = item
  return (
    <li>
      <button className="btn1" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
