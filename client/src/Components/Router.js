import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Home from '../Routes/Home';
import Study from '../Routes/Study';
import Room from '../Routes/Room';
import Signin from '../Routes/SignIn';
import JoinRoom from '../Routes/JoinRoom';
import Result from '../Routes/Result';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/study" exact component={Study} />
            <Route path="/room" exact component={Room} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/joinroom" exact component={JoinRoom} />
            <Route path="/result" exact component={Result} />
            <Redirect from="*" to="/" /> 
        </Switch>
    </Router>
);