
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Home from './Pages/Homepage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import About from './Pages/About';
import Pricing from './Pages/Accounting';



function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/pricing" exact element={<Pricing/>} />


        <Route path="/contact" exact element={<Contact />} />


      </Routes>
      <Footer /> 
    </div>

  );
}

export default App;
