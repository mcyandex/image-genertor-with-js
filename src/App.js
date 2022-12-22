import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Footer } from "./components/Footer";
import { ImageGenerator } from "./components/ImageGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
