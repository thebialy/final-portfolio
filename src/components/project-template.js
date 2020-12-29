
import React from "react";

class ProjectTemplate extends React.Component {
    render(){
        return(
        <div className="project-div">
            <h1> {this.props.name} </h1>

            <div className="project-info">
                <div className="img-div">
                    <img
                        src={this.props.img}
                        alt={this.props.alt}
                    />
                </div>
                <div className="div-btn">
                    <a href={this.props.git}>
                    GitHub Page
                    </a>
                
                
                    <a href={this.props.live}>
                    Live App
                    </a>
                </div>
                <div>
                    {this.props.about}
                </div>
                <div>
                    <h4>Skills used:</h4>
                    {this.props.skills}
                </div>
            
            </div>

        </div>
        );
    }
}
export default ProjectTemplate;