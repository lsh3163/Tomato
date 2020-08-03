import React, { Component, useLayoutEffect } from 'react';
import Remon from "@remotemonster/sdk";
import initConference from './Conference';
import initTimer from './Timer'
import initJavis from './Report'
const Room = () => {

    useLayoutEffect(() => {
      initConference();
      initTimer();
      initJavis();
    }, []);

    return (
        <div id="content">
        <h3 id="timer">It's Timer</h3>
        <h3 id="console">It's Class</h3>
        <h3 id="facenum">It's Score</h3>
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
            className="remote-video center w-300 h-300"
            autoPlay
            muted
            controls
            playsInline
        ></video>
        <h6
            id="waitingTv"
            className="m-0 font-weight-bold text-primary"
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