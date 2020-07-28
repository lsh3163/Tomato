import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from '../Routes/Home';
import Study from '../Routes/Study';
import Room from '../Routes/Room';
import Signin from '../Routes/SignIn';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/study" exact component={Study} />
            <Route path="/room" exact component={Room} />
            <Route path="/signin" exact component={Signin} />
            <Redirect from="*" to="/" /> 
        </Switch>
    </Router>
);