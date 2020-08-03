import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Study extends Component {
    render() {
        return (
            <div>
                <ui>
                    <li>
                        <Link to="/room">Create Room</Link>
                    </li>
                    <li>
                        <Link to="/joinroom">Join Room</Link>
                    </li>
                </ui>
            </div>
        )
    }
}