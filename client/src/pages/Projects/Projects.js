import React from 'react'
import "./Projects.css";
import Spin from "react-reveal/Spin";

const projects = [
  {
    id: 1,
    title: "JOB HUNT - A JOB PORTAL",
    image: "/job_portal.png",
    category: "Full Stack",
    technologies: ["React Js", "MongoDB", "Node Js", "Express Js", "Redux","TailwindCSS"],
    description: "A job portal platform with secure user authentication, dynamic job listings, and efficient interaction between recruiters and job seekers for a smooth hiring process. Users can search, and apply for job opportunities, while Recruiter posts jobs and responds to applications.",
    live: "https://github.com/Ridham-200/Job-portal.git",
  },
  {
    id: 2,
    title: "Chat Mate - Chat Application",
    image: "/chat_app.png",
    category: "Full Stack",
    technologies: ["React Js", "Socket.io", "Node.js", "Express", "MongoDB"],
    description: "A real-time chat application featuring secure user authentication, individual and group messaging, and seamless communication with instant updates and responsive design.",
    github: "https://github.com/Ridham-200/chat-app-yt.git",
    live: "https://github.com/Ridham-200/chat-app-yt.git",
  },
  {
    id: 3,
    title: "MediLink - Doctor Appointment App",
    image: "/final.png",
    category: "Frontend",
    technologies: ["React Js", "MongoDB", "Node Js", "Express Js", "Redux","TailwindCSS"],
    description: "A full-featured doctor appointment platform with secure authentication for users, doctors, and admins. Users can book appointments, apply for doctor roles, and manage bookings, while doctors and admins handle approvals, profile updates.",
    github: "https://github.com/Ridham-200/DOCAPP.git",
    live: "https://github.com/Ridham-200/DOCAPP.git",
  },
  {
    id: 4,
    title: " Taskify - A Todos App",
    image: "/Todos.png",
    category: "Full Stack",
    technologies: ["React Js", "Redux","TailwindCSS"],
    description:"TaskMate is a sleek and intuitive to-do app that lets you effortlessly add, edit, and delete tasks. Stay organized and boost your productivity with real-time updates and a user-friendly interface designed to simplify your daily planning.",
    github: "https://github.com/Ridham-200/TODO-LOCAL.git",
    live: "https://github.com/Ridham-200/TODO-LOCAL.git",
  },
  {
    id: 5,
    title: "Secure_Gen - A Password Generator",
    image: "/edit.png",
    category: "Full Stack",
    technologies: ["React Js","HTML","CSS"],
    description: "A fast and user-friendly password generator that creates strong, custom passwords based on desired length, characters, and numbers — with one-click copy to clipboard for ultimate convenience and security.",
    github: "https://github.com/Ridham-200/password_gen.git",
    live: "https://github.com/Ridham-200/password_gen.git",
  },
];

const Projects = () => {
  return (
    <>
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Here are my recent projects with live links and source code.
      </p>
      <div className="row" id="ads">
        {projects.map((project) => (
          <Spin>
          <div key={project.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card project-card">
              <div className="card-image">
                {/* <span className="card-notify-badge">{project.category}</span> */}
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-image-overly text-center mt-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="card-detail-badge">{tech}</span>
                ))}
              </div>
              <div className="card-body d-flex flex-column">
                <div className="ad-title text-center">
                  <h6 className="text-uppercase">{project.title}</h6>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="mt-auto text-center">
                  <a className="ad-btn" href={project.github} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  <a className="ad-btn" href={project.live} target="_blank" rel="noopener noreferrer">
                    Live App
                  </a>
                </div>
              </div>
            </div>
          </div>
          </Spin>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;

