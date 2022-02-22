import Card from "./Shared/Card"
import { useState } from "react"
import Button from "./Shared/Button"
import RatingSelect from "./RatingSelect"

const FeedbackForm = ({handleAdd}) => {

    const [text , setText] = useState()
    const [btnDisable,setBtnDisabled] = useState(true)
    const [message , setMessage] = useState()
    const [rating , setRating] = useState(10)

    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
      // prettier-ignore
        } else if (value.trim().length < 10) { // 👈 check for less than 10
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }

      const handleSubmit = (e) => {
          e.preventDefault()
        if(text.trim().length>10) {
            const newFeedBack = {
                text,
                rating
            }
            handleAdd(newFeedBack)
        }
       
      }
  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How would you rate your service with us ? </h2>
              <RatingSelect select ={(rating) => setRating(rating)}/>
              <div className="input-group">
                  <input onChange ={handleTextChange}type="text" placeholder="write a review" value={text} />
                  <Button isDisabled={btnDisable} type="submit">Send</Button>
              </div>
              {message && <div className="message">{message}</div>}
          </form>
      </Card>

  )
}

export default FeedbackForm