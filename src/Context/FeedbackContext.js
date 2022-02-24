import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is Feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is Feedback 2',
      rating: 7,
    },
    {
      id: 3,
      text: 'this is Feedback 3',
      rating: 6,
    },
  ])

  //delete a feedback

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure u wanna delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //add a feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
