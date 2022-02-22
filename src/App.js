import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./ components/Header"
import FeedbackList from "./ components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from "./ components/FeedbackStats"
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import FeedbackForm from "./ components/FeedbackForm"
import AboutIconLink from './ components/AboutIconLink'
function App() {

    const [feedback , setFeedback] = useState (FeedbackData)

    const addFeedback = (newFeedback) => {
          newFeedback.id = uuidv4()
          setFeedback([newFeedback , ...feedback])
    }

    const deleteFeedback = (id) =>  {
       if(window.confirm('Are you sure u wanna delete ?')){
           setFeedback(feedback.filter((item)=> item.id !== id))
       }
    }

    return (
    <>
    <Router>

    
    <Header />
    <div className="container">
        <Routes>

        <Route exact path='/' element= {

            <>
                   <FeedbackForm handleAdd = {addFeedback}/>
                   <FeedbackStats feedback = {feedback}/>
                   <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}/>   
                   <AboutIconLink/>
            </>
        }>
 
        </Route>
        
        <Route path='/about' element={<AboutPage/>}/>
        </Routes>

    </div>

    </Router>
    </>
    )
}

export default App