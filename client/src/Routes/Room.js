import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';

export default class Room extends Component {
    render() {
        return (
            <div id="content">
                <div>
                    <h6>
                    Other Videos
                    </h6>
                </div>
                <main>
                    <div id="otherVideos"></div>
                </main>
                <h6>
                    Local Video
                </h6>
                <video
                    id="myVideo"
                    class="remote-video center w-300 h-300"
                    autoplay
                    muted
                    controls
                    playsinline
                ></video>
                <h6
                    id="waitingTv"
                    class="m-0 font-weight-bold text-primary"
                >waiting</h6>
                <div>
                    <div>
                        <span>
                        <a id="enterBtn" href="#">ENTER</a>
                        </span>
                    </div>
                </div>

                <ScriptTag type="text/javascript" src="https://webrtc.github.io/adapter/adapter-latest.js"></ScriptTag>
                <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/@remotemonster/sdk"></ScriptTag>
                <ScriptTag type="text/javascript" src="./Conference.js"></ScriptTag>
            </div>
        )
    }
}