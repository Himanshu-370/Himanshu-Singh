import React from "react";
import Card from "../Card/Card";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements-container" id="achievements">
      <h1 className="head">Achievements</h1>
      <div className="content">
        <Card
          date="December 2022"
          name="Design-a-thon"
          btn="Major League Hacking"
          para1="● Secured 2nd position in Design-a-thon hackathon organized by Major League Hacking (owned by GitHub)."
          link="https://devpost.com/software/rockabuy-as6d1x?ref_content=my-projects-tab&ref_feature=my_projects"
        />
        <Card
          date="April 2022"
          name="Front-a-thon"
          btn="Breeze '22"
          para1="● Secured 2nd position in front-a-thon hackathon organized during Breeze technical fest in Shiv Nadar University."
          link="https://github.com/Himanshu-370/Front-a-Thon"
        />
        <Card
          date="October 2020"
          name="International Mars Hackathon"
          btn="Mars Society South Asia"
          para1="● Secured 8th position with team “Ekyam” in the global event worldwide."
        />
      </div>
    </section>
  );
}

export default Achievements;
