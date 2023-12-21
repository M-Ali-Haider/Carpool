import './App.css'
import SignUp from './components/signup'
import Homepage from './components/homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Zeeyan' element={<SignUp />}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
