// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GenerativeMeshCanvas from "./components/GenerativeMeshCanvas";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage"; // <-- 1. IMPORT THE NEW PAGE
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GenerativeMeshCanvas />
      </div>

      <div className="absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)]"></div>

      <main className="relative z-10 flex flex-col min-h-screen p-8 md:p-12 text-white">
        <header className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
          <div className="flex-1">
            <Link to="/work" className="hover:text-gray-300 transition-colors">
              Work
            </Link>
          </div>
          <div className="flex-1 text-center">
            {/* 2. UPDATE THE LINK TO POINT TO /about */}
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div>
          <div className="flex-1 text-right">
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </header>

        {/* THIS IS THE ONLY CHANGE. The div's only job is to grow. */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />{" "}
            {/* <-- 3. ADD THE NEW ROUTE */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
