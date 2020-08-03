import React from 'react';
import { Link, withRouter } from "react-router-dom";

export default () => (
    <div>
        <h1><Link to="/">Pomodoro</Link></h1>
        <Link to="/study">Study</Link>
    </div>
)