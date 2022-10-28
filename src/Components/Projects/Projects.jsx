import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";
import pic1 from "../../Images/animoto.png"

const projectObj = [
  {
    img: "http://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo_og_logo.jpg?v=1626764099",
    title: "Bellavitaorganic.com",
    description:
      "Bellavitaorganic is a beauty product and we made a clone of its online retail platform.",
    tech:"Tech Stack :",
    used:"HTML | CSS | JavaScript | Local Storage",
    github: "https://github.com/Shimbhu77/taboo-mine-9522",
    blog: "https://elegant-lily-59df11.netlify.app/",
  },
  {
    img: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/03/cover.jpg?fit=1200%2C600&ssl=1",
    title: "Unsplash.com",
    description: "Online web application for booking Hotels and Homes .",
    tech:"Tech Stack :",
    used:"HTML | CSS | JavaScript | Local Storage",
    github: "https://github.com/Hartumpa/Unsplash-Clone-Project",
    blog: " https://precious-faun-cb3646.netlify.app/",
  },
];

function Projects() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Projects</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          // <a href={proj.github} target="_blank">
            <Card key={proj.title} {...proj} tech={proj.tech} used={proj.used} />
          // </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
