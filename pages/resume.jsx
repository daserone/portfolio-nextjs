import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Daniel Ramirez | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web and mobile developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#5651e5] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Daniel Ramirez</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/danielramirez20/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://gitlab.com/josedramirez"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Mobile Development
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Mobile Developer</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span> Angular
            <span className="px-2">|</span> Flutter
            <span className="px-2">|</span>React
            <span className="px-2">|</span> React-Native
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Expertos de la web C.A.</span>
            <span className="px-2">|</span>Barquisimeto, Venezuela
          </p>
          <p className="py-1 italic">
            MID/SR Front-End Developer (2021 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked as part of a development team on the design and
              implementation of web and mobile applications, including current
              technologies and modern programming languages such as
              Angular,React,Flutter Typescript,Html and CSS.
            </li>
            <li>
              Development and design of a hybrid application called NADBIO
              Store.
            </li>
            <li>
              Development and design of a hybrid application called Dowinners.
            </li>
            <li>
              Development and design of several admind panels for multiple
              clients.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CADI F1</span>
            <span className="px-2">|</span>Barquisimeto, Venezuela
          </p>
          <p className="py-1 italic">
            Jr Front-end developer | Web Designer (2019 - 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked as part of a development team on the design and
              implementation of software applications, including current
              technologies and modern programming languages such as
              Angular,Ionic, Typescript,Html and CSS.
            </li>
            <li>
              Participated in the creation and maintenance of a Web platform
              called SIENI for GoalEmpresas.
            </li>
            <li>
              Development and design of a hybrid application called Streetgym
              Program.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Centro Cauchos el Valle C.A.</span>
            <span className="px-2">|</span>Barinas, Venezuela
          </p>
          <p className="py-1 italic">
            Graphic designer | Web Designer (2018 – 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Creation of designs for company social networks with Adobe
              Illustrator and Photoshop
            </li>
            <li>
              Creation of company Website and e-commerce with HTML,CSS and
              Bootstrap in wordpress.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
