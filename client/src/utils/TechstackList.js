import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiGithub,
  SiFirebase,
  SiExpress,
  SiCplusplus,
   SiC, 
    SiPython, 
     SiRedux,
      SiPostman  
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
export const TechstackList = {
  Frontend: [
    { _id: 1, name: "HTML", icon: BsFiletypeHtml },
    { _id: 2, name: "CSS", icon: BsFiletypeCss },
    { _id: 3, name: "Bootstrap", icon: BsBootstrap },
    { _id: 4, name: "JavaScript", icon: SiJavascript },
    { _id: 5, name: "TypeScript", icon: SiTypescript },
    { _id: 6, name: "React", icon: SiReact },
    { _id: 7, name: "Next.js", icon: TbBrandNextjs },
    { _id: 16, name: "Redux", icon: SiRedux },
    { _id: 17, name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  Backend: [
    { _id: 8, name: "Node.js", icon: FaNodeJs },
    { _id: 9, name: "Express.js", icon: SiExpress },
    { _id: 10, name: "MongoDB", icon: SiMongodb },
    { _id: 11, name: "MySQL", icon: SiMysql },
    { _id: 18, name: "Firebase", icon: SiFirebase },
  ],
  ProgrammingLanguages: [
    { _id: 12, name: "C++", icon: SiCplusplus },
    { _id: 13, name: "C", icon: SiC },
    { _id: 14, name: "Java", icon: FaJava },
    { _id: 15, name: "Python", icon: SiPython },
  ],
  Tools: [
    { _id: 19, name: "GitHub", icon: SiGithub },
    { _id: 20, name: "Figma", icon: SiFigma },
    { _id: 21, name: "VS Code", icon: VscVscode },
    { _id: 22, name: "Postman", icon: SiPostman },
  ],
};
  