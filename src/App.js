import Header from './ components/Header'
import FeedbackList from './ components/FeedbackList'
import FeedbackStats from './ components/FeedbackStats'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from './ components/FeedbackForm'
import AboutIconLink from './ components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
