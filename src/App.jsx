// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import GenerativeMeshCanvas from "./components/GenerativeMeshCanvas";
import ContactModal from "./components/ContactModal";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import SocialSidebar from "./components/SocialSidebar"; // <-- 1. IMPORT
import "./App.css";

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Updated style for NavLinks with better contrast
  const navLinkStyles = ({ isActive }) => {
    const baseClasses = "transition-colors duration-300 hover:text-cyan-400";
    // CHANGED: text-gray-500 is now text-gray-400
    const statusClasses = isActive ? "text-white" : "text-gray-400";
    return `${baseClasses} ${statusClasses}`;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="relative min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GenerativeMeshCanvas />
      </div>
      <div className="absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)]"></div>

      <main className="relative z-10 flex flex-col min-h-screen p-8 md:p-12 text-white">
        <header className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase border-b border-white/10 pb-4">
          <div>
            <NavLink
              to="/"
              className={navLinkStyles}
              onClick={closeMobileMenu}
              end
            >
              Home
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/work" className={navLinkStyles}>
              Work
            </NavLink>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-gray-400 hover:text-cyan-400 transition-colors font-semibold tracking-widest uppercase"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
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
        {/* 2. ADD THE SIDEBAR COMPONENT HERE */}
        <SocialSidebar />
      </main>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center md:hidden">
          <button onClick={closeMobileMenu} className="absolute top-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8 text-2xl uppercase tracking-widest">
            <NavLink
              to="/about"
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/work"
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              Work
            </NavLink>
            <button
              onClick={() => {
                closeMobileMenu();
                setContactModalOpen(true);
              }}
              className="text-gray-500 hover:text-cyan-400 transition-colors font-semibold tracking-widest uppercase"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default App;
