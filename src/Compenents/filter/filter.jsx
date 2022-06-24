import filter from "../../images/filter.png";
import filterStyle from "./filter.module.css";

export function Filter(props) {
  return (
    <>
      <img src={filter} className={filterStyle.filterIcon} />
    </>
  );
}

export function FilterOpen({ handleFilter }) {
  return (
    <>
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
    </>
  );
}
