/* eslint-disable react/prop-types */
import cartStyle from "./Cart.module.css";
import React from "react";

export function Cart({ title, url, section, multimedia, abstract }) {
  return (
    <div className={cartStyle.cartContainer}>
      <span className={cartStyle.sectionType}>{section}</span>
      <div className={cartStyle.imageContainer}>
        {multimedia ? (
          <img src={multimedia[0].url} className={cartStyle.cartImage} />
        ) : (
          <></>
        )}
      </div>
      <a href={url} target="_blank">
        <h2 className={cartStyle.title}>{title}</h2>
      </a>
      <p className={cartStyle.description}>{abstract}</p>
    </div>
  );
}
