import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import '../src/assets/style/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutRental from './pages/AboutRental';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutRental" element={<AboutRental/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
