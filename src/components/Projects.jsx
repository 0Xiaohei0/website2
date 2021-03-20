import React, { Component } from "react";
//import "./Projects.css";
import GetProjectData from "./../ProjectData/ProjectData";

class Projects extends Component {
  state = {
    projects: GetProjectData(),
  };
  render() {
    return (
      <div className="d-flex m-3">
        {this.state.projects.map((p) => (
          <div key={p.title} className="card m-3" style={{ width: "18rem" }}>
            <img
              src={p.image}
              className="img-fluid card-img-top"
              alt="project screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.description}</p>
              <a href={p.link} className="btn btn-primary">
                Project page
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;

//   <div className="project__container">
//     <img src={p.image}></img>
//     <button type="button" className="btn btn--outline">
//       Project Page
//     </button>
//   </div>
