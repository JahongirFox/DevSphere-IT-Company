import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Main from './Pages/Home/Main/Main';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import OurWorks from './Pages/Our-Works/Works/Works';
import Project from './Components/Project/Project';

function App() {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Layout><Main /><Project /></Layout>} />
              <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
              <Route path="/works" element={<Layout><OurWorks /><Project /></Layout>} />
          </Routes>
    </Router>
  );
}

export default App;
