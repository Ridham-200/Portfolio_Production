import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <div className="quote-box">
        <blockquote>
          "Any fool can write code that a computer can understand.  
          Good programmers write code that humans can understand."  
          <br /> — Martin Fowler
        </blockquote>
      </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am a passionate Computer Science undergraduate at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar), driven by a strong commitment to building efficient, scalable, and impactful software solutions.

With a keen interest in full-stack development and data-driven applications, I enjoy solving complex problems and continuously learning new technologies. My projects reflect my dedication to creating real-world solutions that enhance user experiences and optimize processes
              </p>
            </div>
          </div>
        </div>
    </Jump>
       
    </>
  )
}

export default About
