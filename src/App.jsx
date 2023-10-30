import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashbaord from './pages/Dashbaord'
import P2p from './pages/P2p'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashbaord />} />
        <Route path='p2p' element={<P2p />} />
      </Routes>

      
    </>
  )
}

export default App
