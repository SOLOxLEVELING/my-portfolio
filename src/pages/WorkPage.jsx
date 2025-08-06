// src/pages/WorkPage.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { motion } from "framer-motion";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Animation variants for each card item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const WorkPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Suggestion 2: Dynamic Card Loader
  const TOTAL_PROJECTS_TO_SHOW = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const projectSnapshot = await getDocs(projectsCollection);
        let projectsList = projectSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const placeholdersNeeded = Math.max(
          0,
          TOTAL_PROJECTS_TO_SHOW - projectsList.length
        );

        for (let i = 0; i < placeholdersNeeded; i++) {
          projectsList.push({ id: `placeholder-${i}`, isPlaceholder: true });
        }

        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="work" className="w-full max-w-6xl mx-auto py-24">
      <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest font-display">
        My Work
      </h2>
      {isLoading ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        // Suggestion 5: Section scroll-in effect
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            // The animation wrapper for each card
            // This is the corrected code
            // Change your code to this
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full" // 👈 This is the final, correct version.
            >
              <ProjectCard
                project={project}
                onClick={() =>
                  !project.isPlaceholder && setSelectedProject(project)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default WorkPage;
