import React from "react";
import GradientCanvas from "./components/GradientCanvas";
import GenerativeMeshCanvas from "./components/GenerativeMeshCanvas"; // <-- IMPORT NEW
import "./App.css";

function App() {
  return (
    // Main container for the whole page
    <div className="relative min-h-screen text-white font-sans">
      {/* The animated gradient background */}
      {/* Canvas Container: Positioned to fill the background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GenerativeMeshCanvas />
      </div>

      {/* The UI content, layered on top of the canvas */}
      <main className="relative z-10 flex flex-col min-h-screen p-8 md:p-12">
        {/* Header Navigation */}
        <header className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
          <div className="flex-1">
            <a href="#work" className="hover:text-gray-300 transition-colors">
              Work
            </a>
          </div>
          <div className="flex-1 text-center">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
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

        {/* Main Content Area */}
        <section className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-8xl ... font-bold tracking-tighter font-display fade-in-up">
            ADNAN
            <br />
            SHAIKH
          </h1>
          <div
            className="mt-6 flex space-x-6 text-sm leading-tight font-display fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#"
              className="hover:brightness-125 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:brightness-125 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:brightness-125 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Fiverr
            </a>
          </div>
        </section>

        {/* Footer / Corner elements */}
        <footer className="flex justify-between items-end">
          <div className="text-sm">
            <p>Full-Stack Web Development</p>
            <p>Video Editing</p>
            <p>Software Development</p>
          </div>

          {/* Showreel Button - requires a bit of custom CSS for the circular text */}
          <div className="showreel-container">
            <svg viewBox="0 0 100 100" className="circular-text">
              <path
                id="circlePath"
                fill="none"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
              <text>
                <textPath xlinkHref="#circlePath">
                  PLAY SHOWREEL • PLAY SHOWREEL •
                </textPath>
              </text>
            </svg>
            <div className="play-button">▶</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
