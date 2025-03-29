import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
      <Router>
        <Navbar/>
          <Routes>
              {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        {/* <Footer/> */}
      </Router>
  )
}

export default App
