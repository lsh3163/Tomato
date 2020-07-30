import React, { Component, useLayoutEffect } from 'react';
import Remon from "@remotemonster/sdk";
import initConference from './Conference';

const Room = () => {

    useLayoutEffect(() => {
      initConference();
    }, []);

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
    </div>
    )
};

export default Room;