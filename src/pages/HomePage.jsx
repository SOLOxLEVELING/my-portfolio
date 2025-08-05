// src/pages/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    // This is the main flex container for the page. It's a vertical column that fills the available height.
    <div className="flex flex-col h-full">
      {/* This section now contains your main content. 'flex-grow' is the key.
          It tells this section to expand and take up all available empty space,
          which naturally pushes the footer down to the bottom.
          The other flex classes center your text within this expanded space.
      */}
      <section className="flex-grow flex flex-col justify-center items-center text-center">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight font-display fade-in-up text-shadow-md mt-48"
          style={{ animationDelay: "200ms" }}
        >
          ADNAN
          <br />
          SHAIKH
        </h1>

        <div
          className="mt-8 flex justify-center space-x-8 text-sm fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="https://github.com/SOLOxLEVELING"
            className="text-gray-300 hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-shadow-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/solo-leveling-793681263/"
            className="text-gray-300 hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-shadow-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://www.fiverr.com/users/adnan1652000"
            className="text-gray-300 hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-shadow-sm"
          >
            Fiverr
          </a>
        </div>
      </section>

      {/* The footer now naturally sits at the bottom because the section above it has expanded. */}
      <footer className="flex justify-between items-end">
        <div className="text-sm text-gray-300 text-shadow-sm">
          <p>Full-Stack Web Development</p>
          <p>Video Editing</p>
          <p>Software Development</p>
        </div>

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
    </div>
  );
};

export default HomePage;
