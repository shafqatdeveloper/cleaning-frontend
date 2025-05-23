import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Projects from './Pages/Projects/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
          </Routes>
    </>
  )
}

export default App