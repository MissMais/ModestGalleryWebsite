import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const ScrollToTopOrHashElement = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [location]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTopOrHashElement />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;