import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nadbio from "../public/assets/nadbio.jpg";
import Dowinners from "../public/assets/dowinners.jpg";
import Sieni from "../public/assets/sieni.jpg";
import Portfolio from "../public/assets/portfolio.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="SIENI"
            backgroundImg={Sieni}
            projectUrl="/sieni"
            tech="Angular"
          />
          <ProjectItem
            title="Dowinners"
            backgroundImg={Dowinners}
            projectUrl="/dowinners"
            tech="Flutter"
          />
          <ProjectItem
            title="NADBIO Store"
            backgroundImg={Nadbio}
            projectUrl="/nadbio"
            tech="Flutter"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={Portfolio}
            projectUrl="/portfolio"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
