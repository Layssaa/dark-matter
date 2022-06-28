import { useState } from "react";
import filter from "../../images/filter.png";
import filterStyle from "./filter.module.css";

export function Filter({ handleFilter }) {
  return (
    <>
      <img
        onClick={handleFilter}
        src={filter}
        className={filterStyle.filterIcon}
      />
    </>
  );
}

export function FilterOpen({ changeFilters, handleFilters }) {
  const [filters, setFilters] = useState({
    health: false,
    science: false,
    us: false,
    technology: false,
  });

  const changeInputValue = async (event) => {
    const {
      target: { checked, name },
    } = event;

    setFilters((prevState) => {
      const obj = { ...prevState, [name]: checked };
      const filtersChecked = Object.entries(obj)
        .map((elem) => {
          if (elem[1]) {
            return elem[0];
          }
        })
        .filter((elem) => {
          if (elem) {
            return elem;
          }
        });
      changeFilters(filtersChecked);
      return obj;
    });
  };

  return (
    <div className={filterStyle.filterContainer}>
      <span onClick={handleFilters} className={filterStyle.closePopUp}>
        X
      </span>
      <div className={filterStyle.inputContainers}>
        <label htmlFor="health">health</label>
        <input
          name="health"
          id="health"
          onChange={changeInputValue}
          type="checkbox"
        />
      </div>
      <div className={filterStyle.inputContainers}>
        <label htmlFor="science">science</label>
        <input
          name="science"
          id="science"
          type="checkbox"
          onChange={changeInputValue}
        />
      </div>
      <div className={filterStyle.inputContainers}>
        <label htmlFor="us">us</label>
        <input name="us" id="us" type="checkbox" onChange={changeInputValue} />
      </div>
      <div className={filterStyle.inputContainers}>
        {" "}
        <label htmlFor="technology">technology</label>
        <input
          name="technology"
          id="technology"
          type="checkbox"
          onChange={changeInputValue}
        />
      </div>
    </div>
  );
}
