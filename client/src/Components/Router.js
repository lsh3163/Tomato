import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Home from '../Routes/Home/';
import Study from '../Routes/Study';
import Room from '../Routes/Room';
import Signin from '../Routes/SignIn';
import JoinRoom from '../Routes/JoinRoom';
import Result from '../Routes/Result/';
import Login from '../Routes/Login';
import Register from '../Routes/Register';
import UserContext from './UserContext';
import Axios from 'axios';

export default () => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(()=>{
        const checkLoggedIn = async()=>{
            let token = localStorage.getItem("auth-token");
            if(token === null){
                localStorage.setItem("auth-token", "");
                token = "";
            }
            console.log(token);
            const tokenRes = await Axios.post(
                "http://localhost:5050/users/tokenIsValid",
                null,
                {
                    headers: {
                        "x-auth-token": token
                    }
                }
            );
            console.log(tokenRes.data);
            if(tokenRes.data){
                const userRes = await Axios.get(
                    "http://localhost:5050/users/",
                    {
                        headers: {
                            "x-auth-token": token
                        }
                    }
                )
                setUserData({
                    token,
                    user: userRes.data,
                })
            }
        }
        checkLoggedIn();
    }, [])

    return(
        <Router>
            <UserContext.Provider value={{userData, setUserData}}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/study" exact component={Study} />
                    <Route path="/room" exact component={Room} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/joinroom" exact component={JoinRoom} />
                    <Route path="/result" exact component={Result} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Redirect from="*" to="/" /> 
                </Switch>
            </UserContext.Provider>
        </Router>
    );
}