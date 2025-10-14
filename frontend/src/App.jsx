import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./teammates/saraswati/Contact";
import Sustainability from "./teammates/manish/Sustainability";
import About from "./teammates/hanshika/About";
import Projects from "./teammates/rozy/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teammates/saraswati/Contact" element={<Contact />} />
        <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/teammates/rozy/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
