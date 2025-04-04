import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Main from './Pages/Home/Main/Main'
import AboutPage from './Pages/About/AboutPages/AboutPage'

function App() {

  return (
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App
