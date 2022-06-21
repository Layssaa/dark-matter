/* eslint-disable react/prop-types */
import dashboard from "./Main.module.css";
import React from "react";

export default function Main(props) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={dashboard.DivMain}>
      {/* // eslint-disable-next-line react/prop-types */}
      {/* // eslint-disable-next-line react/prop-types */}
      {props.children}
    </div>
  );
}
