import { useState } from "react";
import buttonStyle from "./Button.module.css";

export function ButtonLeft(props) {
  const [hoverBTN, setHoverBTN] = useState("");

  const handleClassName = () => {
    if (hoverBTN == "") {
      return setHoverBTN(buttonStyle.animatedLeft);
    }
    return setHoverBTN("");
  };

  return (
    <button
      className={buttonStyle.Left}
      onMouseEnter={handleClassName}
      onMouseLeave={handleClassName}
    >
      Materiais
      <span className={hoverBTN}></span>
    </button>
  );
}

export function ButtonRight(props) {
  const [hoverBTN, setHoverBTN] = useState("");

  const handleClassName = () => {
    if (hoverBTN == "") {
      return setHoverBTN(buttonStyle.animatedLeft);
    }
    return setHoverBTN("");
  };

  return (
    <button
      className={buttonStyle.Right}
      onMouseEnter={handleClassName}
      onMouseLeave={handleClassName}
    >
      Notícias
      <span className={hoverBTN}></span>
    </button>
  );
}
