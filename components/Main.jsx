import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div data-aos="fade-down" data-aos-duration="800">
          <p className="uppercase text-sm tracking-widest ">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-[#5651e5]"> Daniel Ramirez</span>
          </h1>
          <h1 className="py-2">A Front-End Web & Mobile Developer</h1>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/danielramirez20/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://gitlab.com/josedramirez"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
        <ScrollIntoView selector="#about">
          <div className="mx-auto p-20">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default Main;
