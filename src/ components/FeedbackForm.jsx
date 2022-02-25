import Card from "./Shared/Card"
import { useState ,useEffect,useContext } from "react"
import Button from "./Shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../Context/FeedbackContext"

const FeedbackForm = () => {
   
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
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
        if(text.trim().length>=10) {
            const newFeedBack = {
                text,
                rating
            }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id,newFeedBack)
        }else{
          addFeedback(newFeedBack)
        }
        }
       
      }

      useEffect(()=>{
        if(feedbackEdit.edit === true)
        {
          setBtnDisabled(false);
          setText(feedbackEdit.item.text);
          setRating(feedbackEdit.item.rating);
        }
      },[feedbackEdit])
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