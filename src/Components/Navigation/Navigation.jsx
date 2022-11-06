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
    </div>
  );
}

export default Navigation;
