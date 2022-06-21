import headerStyle from "./Header.module.css";
import logoComplete from "../../images/LogoComplete.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

// eslint-disable-next-line react/prop-types
export default function Header({ handleOpenMenu }) {
  const [changeMenu, setChangeMenu] = useState({
    firstLine: headerStyle.lineOne,
    secondLine: headerStyle.lineTwo,
    menuPosition: headerStyle.menuImg,
  });
  const navigate = useNavigate();

  const handleMenu = () => {
    if (
      changeMenu.firstLine === headerStyle.lineOne &&
      changeMenu.secondLine === headerStyle.lineTwo
    ) {
      handleOpenMenu();
      return setChangeMenu({
        firstLine: headerStyle.xModeLineOne,
        secondLine: headerStyle.xModeLineTwo,
        menuPosition: headerStyle.xMenu,
      });
    }
    handleOpenMenu();
    return setChangeMenu({
      firstLine: headerStyle.lineOne,
      secondLine: headerStyle.lineTwo,
      menuPosition: headerStyle.menuImg,
    });
  };

  const goToHome = () => {
    return navigate("/");
  };

  return (
    <header className={headerStyle.HeaderDiv}>
      <img
        src={logoComplete}
        className={headerStyle.logoMain}
        onClick={goToHome}
        alt="Logo do site, uma maçã roxa com as palavras Dark Matter"
      />

      <div
        className={changeMenu.menuPosition}
        onClick={handleMenu}
        // onMouseLeave={handleMenu}
      >
        <span className={changeMenu.firstLine}></span>
        <span className={changeMenu.secondLine}></span>
      </div>
      {/* <img src={menu} className={headerStyle.menuImg}/> */}
    </header>
  );
}
