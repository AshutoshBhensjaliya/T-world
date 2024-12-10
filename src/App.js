import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import './App.css';
import Login_SignUp from './Components/Login_SignUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Sign Up" element={<Login_SignUp/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;
