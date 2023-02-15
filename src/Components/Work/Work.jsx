import React from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import "./Work.css";
import "../Card/Card.css";

function Work() {
  return (
    <section className="about-container work-container" id="work">
      <div className="left col">
        <div className="left-head">
          <h1 className="head">work</h1>
        </div>
        <div className="right-head">
          <h1 className="head">experience</h1>
        </div>
      </div>
      <div className="right col">
        <Carousel />
      </div>
    </section>
  );
}

export default Work;
