import React, { Component } from 'react'

export default class Room extends Component {
    render() {
        return (
            <>
            <div>
                <video
                    id="myVideo"
                    class="remote-video center w-300 h-300"
                    autoPlay
                    muted
                    controls
                    playsInline
                >
                </video>
                <a id="enterBtn" href="#">
                    ENTER
                </a>
                <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@remotemonster/sdk"></script>
                <script src="./Conference.js"></script>
                Test
            </div>
            </>
        )
    }
}
