import navStyle from "./navbar.module.css"
import icon_instagram from "../../images/instagram.png"
import icon_email from "../../images/email.png"
import icon_pin from "../../images/pin.png"

export default function NavBar(){
    return(
        <nav className={navStyle.navContainer}>
            <span>home</span>
            <span>contact us</span>
            <span>help</span>

            <div className={navStyle.icons}>
                <img src={icon_instagram}/>
                <img src={icon_email}/>
                <img src={icon_pin}/>
            </div>

            <div className={navStyle.backgroundNav}>

            </div>

        </nav>
    )
} 