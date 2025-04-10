import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Home/Main/Main'
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Main />} /> 
        <Route path="/aboutus" element={<AboutUs />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;