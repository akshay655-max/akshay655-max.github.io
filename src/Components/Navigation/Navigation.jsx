import React from "react";
import Styles from "./Navigation.module.css";

function Navigation({ Link, router }) {
  
  return (
    <div className={Styles.Navigation}>
      <div className={Styles.Navigation__logo}>
        <img
          className={Styles.logo}
          // src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg"
          // alt=""
        />
      </div>
      <div className={Styles.Navigation__items}>
        {router.map((item,i) => (
           <div key={i}>
            <Link activeClass="activeTab" spy={true} smooth={true} to={item.to}>
              {item.to}
            </Link>
          </div>
        ))}
        <div className={Styles.Navigation__resume}>
          <a
            href="https://drive.google.com/u/0/uc?id=1Ld9CosppHixztNO4UCDEamp37E1Zi8JN&export=download"
            
            
          >
            Resume
          </a>
        </div>
      </div>
      {/* <div className={`mobile-links ${active ? "active" : ""}`}>


<a className="link" onClick={() => setActive(!active)} href="#home">
  Home
</a>
<a className="link" onClick={() => setActive(!active)} href="#about">
  About
</a>
<a
  className="link"
  onClick={() => setActive(!active)}
  href="#skills"
>
  Skill
</a>
<a className="link" onClick={() => setActive(!active)} href="#projects">
  Projects
</a>
<a className="link" onClick={() => setActive(!active)} href="#contact">
conctact
</a>
<a className="link" href="https://drive.google.com/file/d/1rdnlLBUJtzV89PklADzML3YjBRPEhQSv/view?usp=sharing">
  Resume
  </a>
</div> */}
    </div>
  );
}

export default Navigation;
