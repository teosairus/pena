import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header";
import Home from "../Home";
import AboutUs from "../AboutUs";

import "./app.css";
import Contact from "../Contact";
import Courses from "../Courses";
import NotFound from "../NotFound";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
