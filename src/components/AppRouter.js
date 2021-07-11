import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, ProfileRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {authRoutes.map(({ path, Component }) => {
        return <Route key={path} component={Component} path={path} exact />;
      })}
      {ProfileRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
