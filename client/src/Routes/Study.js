import React, { Component } from 'react'

export default class Study extends Component {
    render() {
        return (
            <div>
                <ui>
                    <li>
                        <a href="/room">Create Room</a>
                    </li>
                    <li>
                        <a href="/joinroom">Join Room</a>
                    </li>
                </ui>
            </div>
        )
    }
}