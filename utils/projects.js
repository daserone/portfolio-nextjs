import Nadbio from "../public/assets/nadbio.jpg";
import Dowinners from "../public/assets/dowinners.jpg";
import Sieni from "../public/assets/sieni.jpg";
import Portfolio from "../public/assets/portfolio.png";
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
    description: "description",
    techs: ["React", "Next.js", "Javascript", "Taillwind.css"],
    image: Portfolio,
    url: "",
    id: 4,
  },
];
