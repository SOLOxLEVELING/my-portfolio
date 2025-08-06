// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;

  // === PLACEHOLDER ===
  if (project.isPlaceholder) {
    return (
      <motion.div
        className="relative overflow-hidden bg-white/5 border border-dashed border-white/10 rounded-xl 
                   min-h-[300px] flex flex-col items-center justify-center p-4 
                   transition duration-300 hover:shadow-md hover:border-white/20 group"
        whileHover={{ scale: 1.02 }}
        title="More projects coming soon!" // Tooltip
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
        <p className="text-gray-400 font-semibold text-sm z-10">Coming Soon</p>
      </motion.div>
    );
  }

  // === REAL PROJECT ===
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden 
                 h-full flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="aspect-video overflow-hidden bg-gray-900">
        {project.imageUrl && (
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 flex-grow">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
