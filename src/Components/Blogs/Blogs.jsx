import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";

const projectObj = [
  {
    img:"http://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo_og_logo.jpg?v=1626764099",
    title: "bellavitaorganic",
    description:
    "Bellavitaorganic is a beauty product and we made a clone of its online retail platform.",
    blog:"https://medium.com/@akshaysuman129/clone-of-a-e-commerce-website-8b05e7cb52ae",
  },
  {
    img: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/03/cover.jpg?fit=1200%2C600&ssl=1",
    title: "Unsplash",
    description: "Online web application for searching and downloading photos .",
    github: "url__",
    blog:"https://medium.com/@akshaysuman129/cloning-of-unsplash-com-aa6ee8b566e5"
  },
];

function Blogs() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Blogs</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.blog} target="_blank">
            <Card key={proj.title} {...proj} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
