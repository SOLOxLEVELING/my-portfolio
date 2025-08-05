// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project, onClick }) => {
  // This safety check prevents crashes if project data is missing.
  if (!project) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden 
                 transform hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-video overflow-hidden bg-gray-900">
        {/* This check prevents crashes if the imageUrl field is missing from your database */}
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
    </div>
  );
};

export default ProjectCard;
