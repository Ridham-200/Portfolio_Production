import React from 'react'
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Resume from "../../assets/docs/Resume_Season_Placement (2).pdf";
import Slide from "react-reveal/Slide";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
     <div className="container-fluid home-container" id="home">
     <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
     <div className="container home-content"> 
      <Slide right>
<h2>
👋 Hi I'm Ridham 
</h2>
<h1>
  I am a
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Competitive Programmer!",
                    "Software Engineer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            </Slide>
            <Slide bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=918360273286"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>

             
              <a className="btn btn-cv" href={Resume} download="Resume_Season_Placement (2).pdf">
              My Resume
            </a>
            </div>
            </Slide>
     </div>

     </div>
    </>
  )
}

export default Home
