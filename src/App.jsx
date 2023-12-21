import './App.css'
import SignUp from './components/signup'
import Homepage from './components/homepage'
import Map from './components/map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/carpool' element={<SignUp />}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/map' element={<Map/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
