import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="bg"></div>
        <div className="name">
          <h2>I'm himanshu singh, i am a</h2>
        </div>
        <div className="middle">
          <div className="one">
            <h1>Web Developer</h1>
          </div>
          <div className="and">
            <h1>&</h1>
          </div>
        </div>
        <div className="end">
          <div className="empty">
            <h1>a</h1>
          </div>
          <div className="two">
            <h1>Designer</h1>
          </div>
        </div>
        <div className="arrow">&darr;</div>
      </section>
    </>
  );
}

export default Hero;
