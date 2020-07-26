import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from '../Routes/Home';
import Study from '../Routes/Study';
import Room from '../Routes/Room';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/study" exact component={Study} />
            <Route path="/room" exact component={Room} />
            <Redirect from="*" to="/" /> 
        </Switch>
    </Router>
);