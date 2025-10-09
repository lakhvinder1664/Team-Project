import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./teammates/saraswati/Contact";
import Projects from "./teammates/rozy/Projects";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teammates/saraswati/Contact" element={<Contact />} />
        <Route path="/teammates/rozy/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
