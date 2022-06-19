import headerStyle from "./Header.module.css";
import logoComplete from "../../images/LogoComplete.svg";
import { useState } from "react";

export default function Header({ handleOpenMenu, menu }) {
  const [changeMenu, setChangeMenu] = useState({
    firstLine: headerStyle.lineOne,
    secondLine: headerStyle.lineTwo,
    menuPosition: headerStyle.menuImg,
  });

  const handleMenu = () => {
    console.log("handle");
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

  return (
    <header className={headerStyle.HeaderDiv}>
      <img src={logoComplete} className={headerStyle.logoMain} />

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
