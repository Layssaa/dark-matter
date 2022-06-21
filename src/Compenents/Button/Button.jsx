/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from "react";
import buttonStyle from "./Button.module.css";

export function ButtonLeft({ onclick }) {
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
      onClick={onclick}
    >
      Materiais
      <span className={hoverBTN}></span>
    </button>
  );
}

export function ButtonRight({ onclick }) {
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
      onClick={onclick}
    >
      Notícias
      <span className={hoverBTN}></span>
    </button>
  );
}
