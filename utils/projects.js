import Nadbio from "../public/assets/3.png";
import Dowinners from "../public/assets/dowinners.jpg";
import Sieni from "../public/assets/sieni.jpg";
import Portfolio from "../public/assets/portfolio.png";
import Streetgym from "../public/assets/streetgym.png";
import Mitim from "../public/assets/mitim.jpg";

export const INITIAL_PROJECTS = [
  {
    title: "SIENI",
    description:
      "SIENI is an innovative system that aims to facilitate compliance with Standards and establish, implement or maintain a relevant Management System that every organization must have. It has different integrated tools and its own Mail system.",
    techs: ["Angular", "HTML5", "CSS3", "Bootstrap", "Typescript"],
    image: Sieni,
    url: "http://goalempresas.com/infosieni.html",
    id: 1,
  },
  {
    title: "NADBIO Store",
    description:
      "Mobile app made with flutter and dart, this app uses a mix of rest apis such as wordpress,woocommerce,teachlr and consists of different modules, one to show blogs, an e-commerce, show courses and events. ",
    techs: ["Flutter", "Dart"],
    image: Nadbio,
    url: "https://nadbio.com/",
    id: 2,
  },
  {
    title: "Dowinners",
    description:
      "Mobile app made with flutter and dart, This application is a sports social network that connects scouts, academies, coaches and athletes",
    techs: ["Flutter", "Dart"],
    image: Dowinners,
    url: "https://play.google.com/store/apps/details?id=com.dowinners.app",
    id: 3,
  },
  {
    title: "Portfolio",
    description:
      "Responsive Web Portfolio for myself, made it with React and Tailwind CSS",
    techs: ["React", "Next.js", "Javascript", "Taillwind CSS", "HTML & CSS"],
    image: Portfolio,
    url: "",
    id: 4,
  },
  {
    title: "Streetgym Program",
    description:
      "Hybryd Web and Mobile(IOs,Android) Application, made with Angular and Ionic framework. This application was made for a personal trainer to share his workouts and diet plans with his clients",
    techs: ["Angular", "Typescript", "Bootstrap", "HTML & CSS", "Ionic"],
    image: Streetgym,
    url: "https://general.streetgymprogram.com",
    id: 5,
  },
  {
    title: "MITIM",
    description:
      "Mobile app made with flutter and dart. For this application i made the integration of Firebase and  Google API'S like Google maps and Google Calendar, also i created a chat screen with communication between firebase users.",
    techs: ["Flutter", "Dart", "Firebase", "Google Maps", "Google Calendar"],
    image: Mitim,
    url: "",
    id: 6,
  },
];
