// src/App.jsx
import React, { useState } from "react"; // 1. Import useState
import { Routes, Route, Link } from "react-router-dom";
import GenerativeMeshCanvas from "./components/GenerativeMeshCanvas";
import ContactModal from "./components/ContactModal"; // 2. Import ContactModal
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  // 3. Add state to manage the modal's visibility
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GenerativeMeshCanvas />
      </div>

      <div className="absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)]"></div>

      <main className="relative z-10 flex flex-col min-h-screen p-8 md:p-12 text-white">
        <header className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
          <div className="flex-1">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/work" className="hover:text-gray-300 transition-colors">
              Work
            </Link>
          </div>
          <div className="flex-1 text-right">
            {/* 4. Change the contact link to a button that opens the modal */}
            <button
              onClick={() => setContactModalOpen(true)}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>

      {/* 5. Render the modal component */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
