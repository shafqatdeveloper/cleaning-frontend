import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Footer from './Components/Footer'
import ServicesPage from './Pages/Services/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App