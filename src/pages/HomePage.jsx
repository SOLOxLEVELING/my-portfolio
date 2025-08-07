// src/pages/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1
          className="
      text-5xl 
      sm:text-6xl md:text-8xl lg:text-9xl 
      font-bold tracking-tighter leading-tight font-[--font-display] fade-in-up text-shadow-md 
    "
          style={{ animationDelay: "200ms" }}
        >
          ADNAN
          <br />
          SHAIKH
        </h1>
      </section>

      <footer
        className="
    flex flex-col items-center gap-8 
    md:flex-row md:justify-between md:items-end 
    px-6 pb-6
  "
      >
        <div
          className="
            text-base text-gray-200 text-shadow-sm fade-in-up 
            /* On mobile, center the text */
            text-center 
            /* On desktop, align text to the left */
            md:text-left
          "
          style={{ animationDelay: "600ms" }}
        >
          <p>Full-Stack Web Development</p>
          <p>Video Editing</p>
          <p>Software Development</p>
        </div>

        <div
          className="
            showreel-container 
            /* Responsive size for the showreel button */
            w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]
          "
        >
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
          <button type="button" className="play-button">
            ▶
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
