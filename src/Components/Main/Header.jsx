import React from "react";
import Styles from "./Header.module.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Pic from "../../Resources/Icons/akshayPic.jpeg"
function Header() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);


  return (
    <div>
    <div className={`${Styles.Header}`}>
      <div className={Styles.Header__pic}>
        <img
          src={Pic}
          alt="profile"
        />
      </div>
      <div className={Styles.Header__content}>
        <h1>Hi I'm</h1>
        <h1>Akshay Suman</h1>
        <p>Full Stack Web <span ref={textRef}></span></p>
        <p>Email : akshaysuman1299@gmail.com</p>
        <p>Phone : 6204823734</p>
      </div>
    </div>
    </div>
  );
}

export default Header;
