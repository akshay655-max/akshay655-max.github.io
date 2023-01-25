import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";
import pic1 from "../../Images/animoto.png"

const projectObj = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy63jrGZY_ElYEec2N_q4OKpS_C_MU2JWNRg&usqp=CAU",
    title: "Sugarcosmetics.com",
    description: "Sugarcosmetics is a beauty product and we made a clone of its online retail platform.",
    tech:"Tech Stack :",
    used:"Redux | Express|React-Js|Mongoose|Node-Js|mongodb|Tailwind css|Heroku ",
    github: "https://github.com/sudiptadip/bent-stretch-1134-sugarcosmetics_clone",
    blog: " https://sugar-cosmetics-app.netlify.app/",
  },
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
    description: "Online web application for searching and downloading images .",
    tech:"Tech Stack :",
    used:"HTML | CSS | JavaScript | Local Storage",
    github: "https://github.com/Hartumpa/Unsplash-Clone-Project",
    blog: " https://precious-faun-cb3646.netlify.app/",
  },
  {
    img: "https://m.economictimes.com/thumb/msid-89666227,width-1200,height-900,resizemode-4,imgsize-1794000/startup-firstcry-funding_funding_thumb-image_ettech.jpg",
    title: "Firstcry.com",
    description: "First cry is a baby product and we made a clone of its online retail platform.",
    tech:"Tech Stack :",
    used:"Redux | Express|React-Js|Mongoose|Node-Js|mongodb|Tailwind css|Heroku ",
    github: "https://github.com/Codex-Swapnil1/overconfident-door-5197",
    blog: " https://sugar-cosmetics-app.netlify.app/",
  },

];

function Projects() {
  return (
    <section id="projects">
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
    </section>
  );
}

export default Projects;
