import { useState } from "react";
import { ButtonLeft, ButtonRight } from "../Compenents/Button/Button";
import Dashboard from "../Compenents/Dashboard/Dashboard";
import Header from "../Compenents/Header/Header";
import Main from "../Compenents/Main/Main";
import NavBar from "../Compenents/navbar/navbar";
import { SubName } from "../Compenents/Text/Text";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    if (!menu) {
      return setMenu(true);
    }
    return setMenu(false);
  };

  return (
    <Main>
      <Header menu={menu} handleOpenMenu={handleOpenMenu} />
      {menu ? <NavBar /> : <></>}

      <Dashboard>
        <ButtonLeft />
        <ButtonRight />
      </Dashboard>
      <SubName />
    </Main>
  );
}
