"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "eStore v1",
    description: "Ecommerce store using Nexjs and Framer Motion with authentication and admin controls",
    image: "estore.png",
    tools: "Nextjs, App Router, Context Api,  Axios, Bcrypt, Framer-motion, Mongoose, Chartjs, Tailwindcss",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/estore_v1",
    previewUrl: "https://estore-v1.netlify.app/",
  },
  {
    id: 2,
    title: "Starline Company Portfolio",
    description: "A portfolio website for a company based in UAE using Nextjs and Tailwindcss",
    image: "starline-general.png",
    tools: "Nextjs, Tailwind CSS, React Router, Framer-motion",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/starline_general_trading",
    previewUrl: "https://starlinegeneral.netlify.app/",
  },

  {
    id: 3,
    title: "Your News",
    description: "A react news app showcasing global news with categories implementing GNews Public API.",
    image: "news-app.png",
    tools: "React, Vitejs, Axios, React-Bootstrap, Redux",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/react-news",
    previewUrl: "https://react-news-s7xdd.netlify.app/",
  },
  {
    id: 4,
    title: "Blog App",
    description: "A blog application implementing authentication and CRUD operations.",
    image: "blog1.png",
    tools: "React, Vitejs, Axios, React Bootstrap",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/blog",
    previewUrl: "https://blog-s7xdd.onrender.com/",
  },
  {
    id: 5,
    title: "Express JWT Auth Template",
    description: "Authentication template with email verification for Nodejs server",
    image: "mern-auth.png",
    tools: "Nodejs, Express, Bcrypt, JWT, MongoDB, Nodemailer",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/s7xdd/express_auth",
    previewUrl: "https://github.com/s7xdd/express_auth",
  },
  {
    id: 6,
    title: "Fashion store - Front end",
    description: "Authentication template with email verification for Nodejs server",
    image: "fashion1.png",
    tools: "React, Vitejs, TailwindCSS",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/s7xdd/fashion-store",
    previewUrl: "https://fashionstore-s7xdd.netlify.app/",
  },
  {
    id: 7,
    title: "Age Calculator",
    description: "Android app made using Kotlin",
    image: "android.png",
    tools: "Kotlin",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/s7xdd/AgeCounter",
    previewUrl: "https://github.com/s7xdd/AgeCounter",
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
              tools={project.tools}
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
