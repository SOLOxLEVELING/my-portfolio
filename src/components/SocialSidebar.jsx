// src/components/SocialSidebar.jsx
import React from "react";

const SocialSidebar = () => {
  return (
    // 3. Responsive UX: `hidden md:block` hides the sidebar on small screens
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
      <nav className="flex flex-col gap-6">
        {/* GitHub Link */}
        <a
          href="https://github.com/SOLOxLEVELING"
          target="_blank"
          rel="noopener noreferrer"
          // 1. Hover Lift + Glow Animation: Added `hover:-translate-y-1` and `transition-all`
          className="group flex items-center gap-4 text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-6 h-6 fill-current"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-widest">
            GitHub
          </span>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/solo-leveling-793681263/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-.5-2.35-1.75-2.35S12.5 13 12.5 14.25V19h-3v-9h3V11c.75-1.25 2-1.75 3.25-1.75s3.25 1 3.25 3.25V19z" />
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-widest">
            LinkedIn
          </span>
        </a>

        {/* Fiverr Link */}
        <a
          href="https://www.fiverr.com/users/adnan1652000"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M18.75 6.75h-3.75V3h-1.5v3.75h-3V3h-1.5v3.75h-3V3H4.5v5.25h6.375c.412 0 .75.338.75.75s-.338.75-.75.75H4.5v1.5h5.25c.412 0 .75.338.75.75s-.338.75-.75.75H4.5v1.5h5.25c.412 0 .75.338.75.75s-.338.75-.75.75H4.5V21h1.5v-3.75h3.75c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25h-2.25v-1.5h2.25c1.24 0 2.25-1.01 2.25-2.25S13.49 6.75 12.25 6.75h-2.25V5.25h3.75v1.5Z" />
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-widest">
            Fiverr
          </span>
        </a>
      </nav>
    </div>
  );
};

export default SocialSidebar;
