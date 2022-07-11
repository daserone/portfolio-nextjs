import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Ramirez | Front-End & Flutter Developer</title>
        <meta name="description" content="Daniel Ramirez portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
