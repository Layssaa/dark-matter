import { useEffect, useState } from "react";
import { Cart } from "../Compenents/Cart/Cart";
import List from "../Compenents/Dashboard/List";
import Header from "../Compenents/Header/Header";
import Main from "../Compenents/Main/Main";
import NavBar from "../Compenents/navbar/navbar";
import imgExample from "../images/math-2.png";

export function News() {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    if (!menu) {
      return setMenu(true);
    }
    return setMenu(false);
  };

  const reqMaterial = () => {
    console.log("req news");
  };

  useEffect(() => {
    reqMaterial();
  }, []);

  return (
    <Main>
      <Header menu={menu} handleOpenMenu={handleOpenMenu} />
      {menu ? <NavBar /> : <></>}
      <List>
        {newComponents.map((elem) => {
          return <Cart key={elem.id} {...elem} />;
        })}
      </List>
    </Main>
  );
}

const newComponents = [
  {
    id: 1,
    title: "Title One",
    image: imgExample,
    description: "Exemplo de descrição",
  },
];
