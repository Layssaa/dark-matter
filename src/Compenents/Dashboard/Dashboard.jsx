/* eslint-disable react/prop-types */
import dashboardStyle from "./Dashboard.module.css"
import React from 'react';

export default function Dashboard(props) {

    return (
        <div className={dashboardStyle.Dashboard}>
            {props.children}
        </div>

    )
}