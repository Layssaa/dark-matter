import dashboardStyle from "./Dashboard.module.css"

export default function List(props) {

    return (
        <div className={dashboardStyle.List}>
            {props.children}
        </div>

    )
}