"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "eStore v1",
    description: "Ecommerce store using Nexjs with authentication and admin controls",
    image: "estore.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/estore_v1",
    previewUrl: "https://estore-v1.netlify.app/",
  },
  {
    id: 2,
    title: "Company Portfolio",
    description: "A portfolio website for a company based in UAE using Nextjs",
    image: "starline-general.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/starline_general_trading",
    previewUrl: "https://starlinegeneral.netlify.app/",
  },
  {
    id: 3,
    title: "Your News",
    description: "A react news app",
    image: "news-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/react-news",
    previewUrl: "https://react-news-s7xdd.netlify.app/",
  },
  {
    id: 4,
    title: "Age Calculator",
    description: "Android app made using Kotlin",
    image: "android.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/s7xdd/AgeCounter",
    previewUrl: "https://github.com/s7xdd/AgeCounter",
  },
  {
    id: 5,
    title: "Express JWT Auth Template",
    description: "Authentication template with email verification",
    image: "mern-auth.png",
    tag: ["All", "Api"],
    gitUrl: "/",
    previewUrl: "/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-4">
        My Projects
      </h2>
      <div className="text-white mb-5 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Api"
          isSelected={tag === "Api"}
        />
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
