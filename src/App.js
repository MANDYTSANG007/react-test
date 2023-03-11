import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
        <Footer />
      </Router>
      </>
  );
}

export default App;
