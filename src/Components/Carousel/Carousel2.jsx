import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

function Carousel2() {
  return (
    <div className="carousel">
      <Card
        date="December 2022"
        name="RockaBuy"
        btn="Send Customized Rockets to the Moon."
        para1="● Developed a platform to send customized rockets to different regions on the Moon."
        para2="● Built using React+Vite.js, MongoDB as the database, Express as the backend framework."
        link="https://github.com/Himanshu-370/Rockabuy"
      />
      <Card
        date="August 2022"
        name="Learnwithmeinminutes"
        btn="Learn with me every day"
        para1="● Developed a platform to share/write your notes of every day classes all at one place."
        para2="● Worked on features like navigate pages using React DOM, state management."
        para3="● Used Next.js with React and simple CSS."
        link="https://github.com/Himanshu-370/learnwithmeinminutes"
      />
      <Card
        date="June 2022"
        name="We-Blog"
        btn="Discover stories, thinking from writers."
        para1="● Developed a platform to read and write blogs on any topic."
        para2="● Worked on features like Login/Logout using Firebase google authentication, create posts, navigate pages using React DOM."
        para3="● Built using React JS and Firebase authentication."
        link="https://github.com/Himanshu-370/We-Blog"
      />
    </div>
  );
}

export default Carousel2;
