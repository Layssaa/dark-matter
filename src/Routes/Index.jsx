import React, { useContext } from 'react';
import { Routes ,Route } from 'react-router-dom';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { routers } from './Routes';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map((route) => {
                    return (
                        <Route key={route.name} exact path={route.path} component={route.Component} isPrivate={route.isPrivate} />)
                })}
                {/* <Route component={() => <DashboardError />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;