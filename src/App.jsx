import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Home/Main/Main'
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import OurWorks from './Pages/Our-Works/Works/Works'
import Project from './Components/Project/Project'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Main />} /> 
        <Route path="/aboutus" element={<AboutUs />} />  
        <Route path="/works" element={<OurWorks />} />  
      </Routes>
      <Project/>
      <Footer />
    </Router>
  );
}

export default App;