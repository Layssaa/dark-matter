import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { News, Materials, Home } from "../Pages/Index";
import { Pages } from "./Routes"


export function RoutesSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        {Pages.map((route) => {
          const ComponentRender = route.component;

          return (
            <Route
              key={route.name}
              exact
              path={route.path}
              element={<ComponentRender />}
            />
          );
        })}
        {/* <Route component={() => <DashboardError />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

