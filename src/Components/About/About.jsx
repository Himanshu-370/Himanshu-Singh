import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <div className="about-container">
        <div className="left">
          <img src="src\assets\img.jpg" alt="" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam
            eum totam animi eaque veritatis at ea iusto aspernatur accusamus
            provident architecto dolore fugit autem incidunt, quisquam repellat,
            sint, voluptatem sit aperiam. <br />
            <br />
            Voluptas blanditiis atque aliquam minus iste. Qui, aspernatur, ut,
            non vel vitae excepturi pariatur maiores rerum beatae dolore minus
            earum recusandae.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
