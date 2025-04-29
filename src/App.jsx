import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Booking from './components/Booking'
import PrivateEvents from './components/PrivateEvents'
import FindUs from './components/FindUs'
import Upcoming from './components/Upcoming'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
        <Route path="/private-events" element={<PrivateEvents />}></Route>
        <Route path="/find-us" element={<FindUs />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
