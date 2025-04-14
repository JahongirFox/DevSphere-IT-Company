import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Main from './Pages/Home/Main/Main';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import OurWorks from './Pages/Our-Works/Works/Works';
import Contact from './Pages/Contact/Contact';
import Project from './Components/Project/Project';
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place ScrollToTop inside Router to monitor route changes */}

      <Routes>
        <Route path="/" element={<Layout><Main /><Project /></Layout>} />
        <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
        <Route path="/works" element={<Layout><OurWorks /><Project /></Layout>} />
        <Route path="/contactus" element={<Layout><Contact /><Project /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
