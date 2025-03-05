import { BrowserRouter as Router, Routes,  } from "react-router-dom";
// import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
