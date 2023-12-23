import './App.css'
import SignUp from './components/signup'
import Login from './components/login';
import Homepage from './components/homepage'
import Map from './components/map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Carpool' element={<SignUp />}></Route>
        <Route path='/Carpool/login' element={<Login/>}></Route>
        <Route path='/Carpool/homepage' element={<Homepage/>}></Route>
        <Route path='/Carpool/map' element={<Map/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
