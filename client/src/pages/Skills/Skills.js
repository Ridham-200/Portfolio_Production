import React from 'react'
import "./Skills.css";
import { TechstackList}  from "../../utils/TechstackList";
import RubberBand from "react-reveal/RubberBand";
import Slide from "react-reveal/Slide";
const Skills = () => {
  return (
    <>
      <div className="container techstack" id="skills">
      <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
      <div className="row">
        {Object.entries(TechstackList).map(([category, techs]) => (
          <Slide left>
          <div key={category} className="col-md-6 col-lg-3">
            <div className="card m-2">
              <div className="card-header text-center font-weight-bold">
                {category}
              </div>
              <div className="card-body">
                {techs.map((tech) => (
                  <div key={tech._id} className="media d-flex align-items-center mb-2">
                    <tech.icon className="tech-icon me-2" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Slide>
        ))}
      </div>
    </div>
     
    </>
  )
}

export default Skills
