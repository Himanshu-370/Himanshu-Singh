import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="left">
          <img src="src\assets\img.jpg" alt="Himanshu Singh" />
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1 className="head">About Me</h1>
          <br />
          <h3>
            I am a driven and passionate web development student pursuing my
            undergraduate at Shiv Nadar University. I have gained valuable
            experience through coursework in web design and development, as well
            as through internships at companies such as CvOwl.
            <br />
            <br />I am excited about the opportunity to apply my skills and
            knowledge to real-world projects as a professional web developer.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
