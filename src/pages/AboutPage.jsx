// src/pages/AboutPage.jsx
import React from "react";

// You can place your photo in the `public` folder and reference it like this,
// or import it if you have it in your `src/assets` folder.
const myPhoto = "/profile-photo.jpg";

const AboutPage = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      {/* The "Frosted Glass" Panel */}
      <div className="w-full max-w-4xl bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 mt-24">
        <h2
          className="text-4xl font-bold text-center mb-10 uppercase tracking-widest font-display fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          About Me
        </h2>

        {/* New Two-Column Layout */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {/* Column 1: Photo */}
          <div className="flex-shrink-0">
            <img
              src={"https://i.redd.it/zqoyv8stvzv61.png"}
              alt="Adnan Shaikh"
              // These classes make the photo circular and grayscale to match the site's aesthetic
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20"
            />
          </div>

          {/* Column 2: Bio Text (Now left-aligned for readability) */}
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed text-left">
            <p>
              Hello! I'm Adnan Shaikh, a passionate Full-Stack Developer with a
              keen eye for design and a love for creating seamless, dynamic user
              experiences. My journey into web development started with a simple
              curiosity about how websites work, and it has since evolved into a
              full-fledged passion for building elegant and efficient solutions
              to complex problems.
            </p>
            <p>
              With a strong foundation in both front-end and back-end
              technologies, I specialize in bringing ideas to life using modern
              tools like React, Node.js, and Three.js. I thrive on challenges
              and am constantly exploring new technologies to push the
              boundaries of what's possible on the web. This portfolio itself is
              a testament to that spirit, built from the ground up to be both a
              showcase and a technical demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
