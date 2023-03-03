import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componnents/Home";
import About from "./componnents/About";
import Articles from "./componnents/Articles";
import Contact from "./componnents/Contact";
import Publish from "./componnents/Publish";
import NewsDetail from "./componnents/NewsDetail";
import Loading from "./componnents/Loading";
function App() {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 5000);
  }, []);
  return (
    <>
      {load ? (
        <div className="loading">
          <Loading />
          <h1>loading ...</h1>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
