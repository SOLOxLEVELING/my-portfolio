// src/pages/AboutPage.jsx
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      {/* 1. Reduce Glow Bleed: Increased background opacity from bg-black/20 to bg-black/40 */}
      <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 mt-24">
        <h2
          className="text-4xl font-bold text-center mb-10 uppercase tracking-widest font-display fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          About Me
        </h2>

        {/* 5. Responsiveness: The `flex-col md:flex-row` classes already ensure the layout stacks on mobile */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {/* Column 1: Photo */}
          <div className="flex-shrink-0">
            <img
              src={"https://i.redd.it/zqoyv8stvzv61.png"}
              alt="A profile headshot of Adnan Shaikh"
              // 4. Avatar Animation: Added hover and transition classes
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Column 2: Bio Text */}
          {/* 3. Typography: The `leading-relaxed` class was already correctly applied for good line-height */}
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
              tools like{" "}
              {/* 2. Highlight Technologies: Wrapped key terms in styled spans */}
              <span className="text-cyan-400 font-semibold">React</span>,{" "}
              <span className="text-cyan-400 font-semibold">Node.js</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Three.js</span>. I
              thrive on challenges and am constantly exploring new technologies
              to push the boundaries of what's possible on the web. This
              portfolio itself is a testament to that spirit, built from the
              ground up to be both a showcase and a technical demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
