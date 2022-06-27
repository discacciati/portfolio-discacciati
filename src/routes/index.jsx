import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../components/aboutme";
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
            <Route path="/#about">
                <AboutMe />
            </Route>
        </Switch>
    );
};

export default Routes;