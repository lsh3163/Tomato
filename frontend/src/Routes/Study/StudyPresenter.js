import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import "./Study.css";
import logo from "./assets/single.jpg";
import logo2 from "./assets/multi.jpg";

export default function SelectStudy() {
    return (
        <Container maxwidth="sm">
            <div className="title"><h1>Single vs Multi?</h1></div>
            <div className="row">
                <div className="column">
                    <div className="container">
                        <a href="/multiroom"><img src={logo} alt="Avatar" className="image"/>
                        <div className="middle"><div className="text">Single Mode</div></div></a>
                    </div>
                </div>
                <div className="column">
                    <div className="container">
                        <a href="/listroom"><img src={logo2} alt="Avatar" className="image"/>
                        <div className="middle"><div className="text">Multi Mode</div></div></a>
                    </div>
                </div>
            </div>
            
        </Container>
        
    );
}