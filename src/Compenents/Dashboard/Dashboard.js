import dashboardStyle from "./Dashboard.module.css"

export default function Dashboard(props) {

    return (
        <div className={dashboardStyle.Dashboard}>
            {props.children}
        </div>

    )
}