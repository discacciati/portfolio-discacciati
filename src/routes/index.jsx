import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;