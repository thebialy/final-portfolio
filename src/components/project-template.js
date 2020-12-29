
import React from "react";

class ProjectTemplate extends React.Component {
    render(){
        return(
        <>

        <h1> {this.props.name} </h1>
        <h3>
            <a target="_blank" href={this.props.git}>
            GitHub Page
            </a>
        </h3>
        <h3>
            <a target="_blank" href={this.props.live}>
            Live App
            </a>
            <div>
            <h4>About</h4>
            {this.props.about}
            </div>
            <div>
            <h4>Skills</h4>
            {this.props.skills}
            </div>
        </h3>
        <img
            src={this.props.img}
            alt={this.props.alt}
        ></img>
        </>
        );
    }
}
export default ProjectTemplate;