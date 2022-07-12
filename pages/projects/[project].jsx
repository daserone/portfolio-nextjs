import React, { useEffect, useState } from "react";
import { INITIAL_PROJECTS } from "../../utils/projects";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../../components/Navbar";
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

function Project({ params }) {
  const test = INITIAL_PROJECTS.filter((s) => s.id == params.project);
  const [project, setProject] = useState(test[0]);
  console.log(project);
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <Navbar navColor={true}></Navbar>
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={project.image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{project.title}</h2>
          <h3>{project.techs.join(" / ")}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">More info</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.techs.map((tech) => (
                <p key={tech} className=" py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Project;
