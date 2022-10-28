import React from "react";
import Card from "./EduCard";
import Styles from "./Education.module.css";


const projectObj = [
  {
    
    title: "FULL-STACK WEB DEVELOPMENT",
    time: "April 2022 | Present",
    description:
      "MASAI SCHOOL BENGALURU, KA. ",
    
  },
  {
    title: "BACHELOR OF COMPUTER APPLICATION",
    time: "APRIL 2021 ",
    description:
      "SAVITRIBAI PHULE PUNE UNIVERSITY ",
  },
  {
    title: "INTERMEDIATE",
    time: "APRIL 2014",
    description:
      "SCHOLARS ABODE SCHOOL,PATNA ",
  },
];

function Education() {
  return (
    <div className={`${Styles.Education} section`}>
      <div>
        <h1 className="heading">Education</h1>
      </div>
      <div className={Styles.Education__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.github} target="_blank">
            <Card key={proj.title} {...proj} time={proj.time} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Education;
