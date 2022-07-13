import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-white dark:bg-[#1f1f1f]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </h2>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 ">
            Front-End & Mobile developer with 3+ years of experience building
            and maintaining responsive websites and hybrid apps. Proficient with
            HTML,CSS,Javascrip,Typescript,Angular,React,Flutter; I also have
            working knowledge of Adobe Illustrator,Photoshop and Xd.
          </p>
          <p className="py-2 ">
            In 2019 I started working with HTML and CSS to make a small business
            website for a family member. What I thought was just a few small
            work turned into a love for programming.
          </p>
          <p className="py-2 ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with React JS, Flutter,Angular and learning new
            technologies in my free time.
          </p>
          <p className="py-2">
            I consider myself a super curious person, committed, responsible,
            proactive and always willing to learn something new, in addition, I
            have the ability to be a person who adapts and learns from any
            subject in a very short time.
          </p>
          <p className="py-2">
            I am always ready for new challenges, if you need help or want me to
            be part of your team, do not hesitate to write to me!
          </p>
          <Link href="/#projects">
            <p className="py-2  underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
