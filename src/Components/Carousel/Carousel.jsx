import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

function Carousel() {
  return (
    <div className="carousel">
      <Card
        date="October 2022 - present"
        name="CvOwl"
        btn="Web Developer"
        para1="● Worked on a team to develop and maintain a web application that helps job seekers create professional resumes and cover letters."
        para2="● Collaborated with the design team to revamp the old website into a new user-friendly and intuitive interface and increase site engagement by 15%."
        para3="● Tech Stack used HTML, CSS, JavaScript and Bootstrap."
      />
      <Card
        date="August 2022 - October 2022"
        name="Social Summer of Code 2022"
        btn="Web Developer"
        para1="● Collaborated with a team of 4 developers and a mentor to develop features like loading screen, authentication etc"
        para2="● Managed to have 5 pull requests merged."
        para3="● Tech Stack used React JS, Bootstrap, Firebase."
      />
      <Card
        date="January 2022 - April 2022"
        name="GDSC- Shiv Nadar University"
        btn="UI Designer"
        para1="● Collaborated with a team of 2 designers and a developers to develop a treasure hunt app Labyrinth for Technical Fest Breeze'22"
        para2="● Developed the Home screen UI of Labyrinth."
        para3="● Tools used Figma."
      />
    <Card
        date="October 2022 - present"
        name="CvOwl"
        btn="Web Developer"
        para1="● Worked on a team to develop and maintain a web application that helps job seekers create professional resumes and cover letters."
        para2="● Collaborated with the design team to revamp the old website into a new user-friendly and intuitive interface and increase site engagement by 15%."
        para3="● Tech Stack used HTML, CSS, JavaScript and Bootstrap."
      />
      <Card
        date="August 2022 - October 2022"
        name="Social Summer of Code 2022"
        btn="Web Developer"
        para1="● Collaborated with a team of 4 developers and a mentor to develop features like loading screen, authentication etc"
        para2="● Managed to have 5 pull requests merged."
        para3="● Tech Stack used React JS, Bootstrap, Firebase."
      />
      <Card
        date="January 2022 - April 2022"
        name="GDSC- Shiv Nadar University"
        btn="UI Designer"
        para1="● Collaborated with a team of 2 designers and a developers to develop a treasure hunt app Labyrinth for Technical Fest Breeze'22"
        para2="● Developed the Home screen UI of Labyrinth."
        para3="● Tools used Figma."
      />
    </div>
  );
}

export default Carousel;
