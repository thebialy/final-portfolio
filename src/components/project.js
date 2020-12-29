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
        </div>
    );
  }

export default Projects;