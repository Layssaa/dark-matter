/* eslint-disable react/prop-types */
import cartStyle from "./Cart.module.css";
import React from 'react';

export function Cart({ title, image, description }) {
  return (
    <div className={cartStyle.cartContainer}>
      <img src={image} className={cartStyle.cartImage} />
      <h2 className={cartStyle.title}>{title}</h2>
      <p className={cartStyle.description}>{description}</p>
    </div>
  );
}
