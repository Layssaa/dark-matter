import Wallpaper from "../Wallpaper/Wallpaper"
import dashboard from "./Main.module.css"

export default function Main(props){
    return(
        <>
        <div className={dashboard.DivMain}>
            {props.children}
        </div>
        </>
    )
}