// src/components/SocialSidebar.jsx
import React from "react";

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group" // Simplified for this approach
  >
    {/* The hover effect is now on the icon itself */}
    <div className="text-gray-500 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
      {children}
    </div>
  </a>
);

const SocialSidebar = () => {
  return (
    <div
      className="
        /* --- Mobile First Styles (default) --- */
        flex justify-center w-full pt-8 mt-auto 
        
        /* --- THE FIX: Desktop styles now create a fixed-width centering containerr --- */
        md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 md:z-10
        md:w-24 /* 1. Give the containerr a specific width */
        md:flex md:justify-center /* 2. Center the content (the nav) inside it */
      "
    >
      <nav className="flex flex-row md:flex-col items-center gap-8">
        <SocialLink href="https://github.com/SOLOxLEVELING" label="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-6 h-6 fill-current"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </SocialLink>

        <SocialLink
          href="https://www.linkedin.com/in/solo-leveling-793681263/"
          label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-.5-2.35-1.75-2.35S12.5 13 12.5 14.25V19h-3v-9h3V11c.75-1.25 2-1.75 3.25-1.75s3.25 1 3.25 3.25V19z" />
          </svg>
        </SocialLink>

        <SocialLink
          href="https://www.fiverr.com/users/adnan1652000"
          label="Fiverr"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
          </svg>
        </SocialLink>
      </nav>
    </div>
  );
};

export default SocialSidebar;
