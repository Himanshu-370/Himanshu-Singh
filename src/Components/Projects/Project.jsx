import React from "react";
import "./Project.css";
import "../Card/Card.css";
import Carousel2 from "../Carousel/Carousel2";

function Project() {
  return (
    <section className="about-container work-container">
      <div className="right col project-right">
        <Carousel2 />
      </div>
      <div className="left col project-left" style={{ alignItems: "center" }}>
        <div className="left-head">
          <h1 className="head">personal</h1>
        </div>
        <div className="right-head">
          <h1 className="head">projects</h1>
        </div>
      </div>
    </section>
  );
}

export default Project;
