import React, { useState } from "react";

import ProjectItem from "./ProjectItem";
import { INITIAL_PROJECTS } from "../utils/projects";

const Projects = () => {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  return (
    <div id="projects" className="w-full bg-white dark:bg-[#1f1f1f]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              backgroundImg={project.image}
              projectUrl={project.url}
              techs={project.techs}
              id={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
