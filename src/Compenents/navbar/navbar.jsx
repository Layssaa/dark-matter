import navStyle from "./navbar.module.css";
import icon_instagram from "../../images/instagram.png";
import icon_email from "../../images/email.png";
import icon_pin from "../../images/pin.png";
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function NavBar() {
  const navigate = useNavigate();

  const goToPage = (_url) => {
    return navigate(_url);
  };

  return (
    <nav className={navStyle.navContainer}>
      <span onClick={() => goToPage("/")}>home</span>
      <span onClick={() => goToPage("/contact")}>contact us</span>
      <span onClick={() => goToPage("/help")}>help</span>

      <div className={navStyle.icons}>
        <a href="https://www.instagram.com/thedarkmatter0/" target="_blank" rel="noreferrer">
          <img src={icon_instagram} />
        </a>
        <a  href="mailto:estudosgerais000@gmail.com" target="_blank" rel="noreferrer">
          <img src={icon_email} />
        </a>
        <a href="https://www.instagram.com/thedarkmatter0/" target="_blank" rel="noreferrer">
          <img src={icon_pin} />
        </a>
      </div>

      <div className={navStyle.backgroundNav}></div>
    </nav>
  );
}
