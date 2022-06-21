import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLeft, ButtonRight } from "../Compenents/Button/Button";
import Dashboard from "../Compenents/Dashboard/Dashboard";
import Header from "../Compenents/Header/Header";
import Main from "../Compenents/Main/Main";
import NavBar from "../Compenents/navbar/navbar";
import { SubName } from "../Compenents/Text/Text";
import React from 'react';

export function Home() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const goTo = (_url) => {
    console.log('go');
    navigate(_url);
  };

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
        <ButtonLeft onclick={() => goTo("/materials")} />
        <ButtonRight onclick={() => goTo("/news")} />
      </Dashboard>
      <SubName />
    </Main>
  );
}
