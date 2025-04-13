import React from 'react'
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
    return (
      <>
        <div className=" education" id="education">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2022 - 2026"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h4 className="vertical-timeline-element-title">Dr. B R Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar)</h4>
              <h5 className="vertical-timeline-element-subtitle">
              Bachelor of Technology in Computer Science and Engineering
              </h5>
              <hr/>
              <h5 className="vertical-timeline-element-subtitle">
              CGPA : 8.23
              </h5>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2020 - 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h4 className="vertical-timeline-element-title">Sidana International School,Amritsar </h4>
              <h5 className="vertical-timeline-element-subtitle">
              Senior Secondary School (XII)
              </h5>
              <hr/>
              <h5 className="vertical-timeline-element-subtitle">
              Percentage :94.6
              </h5>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </>
    );
  };

export default Education
