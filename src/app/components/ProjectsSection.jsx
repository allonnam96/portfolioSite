"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Home Keeper",
    description: "designed to streamline the process of finding and booking contractors",
    image: "/_util/projectGif/HomeKeeper.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/allonnam96/HomeKeeper",
    previewUrl: "https://home-keeper.com/",
  },
  {
    id: 2,
    title: "Spotipie",
    description: "offers access to a vast library of music, podcasts, and other audio content, personalized to individual preferences",
    image: "/_util/projectGif/Spotipie.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/allonnam96/Spotipie",
    previewUrl: "https://spotipie.onrender.com",
  },
  {
    id: 3,
    title: "Path Following",
    description: "offers an immersive, space-themed visual journey where vehicles gracefully navigate a cosmic pathway",
    image: "/_util/projectGif/PathFollow.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/allonnam96/PathFollowSimulation",
    previewUrl: "https://allonnam96.github.io/PathFollowSimulation/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
