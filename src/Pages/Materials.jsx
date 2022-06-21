import { useEffect, useState } from "react";
import { reqAllMaterials } from "../server/requests";
import { Cart } from "../Compenents/Cart/Cart";
import List from "../Compenents/Dashboard/List";
import Header from "../Compenents/Header/Header";
import Main from "../Compenents/Main/Main";
import NavBar from "../Compenents/navbar/navbar";
import React from "react";

export function Materials() {
  const [menu, setMenu] = useState(false);
  const [listMaterials, setListMaterials] = useState([]);

  const handleOpenMenu = () => {
    if (!menu) {
      return setMenu(true);
    }
    return setMenu(false);
  };

  const reqMaterial = async () => {
    try {
      const { data } = await reqAllMaterials();
      setListMaterials(data);
    } catch (error) {
      console.log(listMaterials);
    }
  };

  useEffect(() => {
    reqMaterial();
  }, []);

  return (
    <Main>
      <Header menu={menu} handleOpenMenu={handleOpenMenu} />
      {menu ? <NavBar /> : <></>}
      <List>
        {listMaterials.length !== 0 ? (
          listMaterials.map((elem) => {
            return <Cart key={elem.id} {...elem} />;
          })
        ) : (
          <></>
        )}
      </List>
    </Main>
  );
}
