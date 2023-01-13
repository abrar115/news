import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componnents/Home";
import About from "./componnents/About";
import Articles from "./componnents/Articles";
import Contact from "./componnents/Contact";
import Publish from "./componnents/Publish";
import NewsDetail from "./componnents/NewsDetail";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/publish" element={<Publish />} />
        <Route exact path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
