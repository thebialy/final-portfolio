import React from "react"
import Project1 from "./images/project1.png"
import Project2 from "./images/project2.png"
import Project3 from "./images/project3.png"
import Project4 from "./images/project4.png"
import FinalProject from "./images/final-project.png"
import ProjectTemplate from "./project-template.js";

const Projects = ({props}) => {
  
  return(
        <div className="projectsContainer" id="projectsContainer" >
            <div className="item" id="askBill">
                <ProjectTemplate
                    name={"Ask Bill"}
                    git={"https://github.com/thebialy/Ask-Bill"}
                    live={"https://ask-bill-3ctnsup1w.vercel.app/"}
                    img={Project1}
                    alt={"Project1"}
                    about={"A simple application that uses a thrid party API to generate ideas for activities to do during quarantine."}
                    skills={"JS,Jquery,HTML,CSS"}
                />
            </div>
            <div className="item" id="myLouvre">
                <ProjectTemplate
                    name={"myLouvre"}
                    git={"https://github.com/thebialy/myLouvre"}
                    live={"https://my-louvre.herokuapp.com/"}
                    img={Project2}
                    alt={"Project2"}
                    about={"A MERN stack application that allows users to create an account and add pieces of art to their digital collection. Users are able to keep a running total of the combined value of their collection. Another feature allows users to see what their art looks like framed with a CSS generated frame."}
                    skills={"React, Express, MongoDB, Mongoose, NodeJS, HTML, CSS, BootStrap"}
                />
            </div>
            <div className="item" id="codex">
                <ProjectTemplate
                    name={"The CODEX"}
                    git={"https://github.com/mikegoolsby/codex_client"}
                    live={"https://reverent-kalam-023988.netlify.app/"}
                    img={Project3}
                    alt={"Project3"}
                    about={"A group project using react to create a frontend and backend. The application is to help get people prepared to enter a coding bootcamp."}
                    skills={"React,  "}
                />
            </div>
            <div className="item" id="askBill">
                <ProjectTemplate
                    name={"Ask Bill"}
                    git={"https://github.com/thebialy/Ask-Bill"}
                    live={"https://musing-sammet-88a7d5.netlify.app/dashboard"}
                    img={Project4}
                    alt={"Project4"}
                    about={"A simple application that uses a thrid party API to generate ideas for activities to do during quarantine."}
                    skills={"JS,Jquery,HTML,CSS"}
                />
            </div>
            <div className="item" id="askBill">
                <ProjectTemplate
                    name={"Ask Bill"}
                    git={"https://github.com/thebialy/Ask-Bill"}
                    live={"https://consolelog-capstone-project.vercel.app/"}
                    img={FinalProject}
                    alt={"FinalProject"}
                    about={"A simple application that uses a thrid party API to generate ideas for activities to do during quarantine."}
                    skills={"JS,Jquery,HTML,CSS"}
                />
            </div>
        </div>
        
    );
  }

export default Projects;