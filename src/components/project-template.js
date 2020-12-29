
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
                <h4>
                    {this.props.about}
                </h4>
                <div>
                    <h4>Technologies used: <br/> {this.props.skills}</h4>                   
                </div>
            
            </div>

        </div>
        );
    }
}
export default ProjectTemplate;