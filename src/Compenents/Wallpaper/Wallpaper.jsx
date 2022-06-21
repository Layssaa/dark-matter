import Man from "../../images/homem-vetruviano-branco.png";
import wallpaperStyle from "./Wallpaper.module.css"
import React from 'react';

export default function Wallpaper() {

    return (
       <img src={Man} className={wallpaperStyle.wallpaperDiv}/>

    )
}