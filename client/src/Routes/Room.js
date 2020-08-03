import React, { Component, useLayoutEffect } from 'react';
import initConference from './Conference';

const Room = () => {

    useLayoutEffect(() => {
      initConference();
    }, []);

    return (
        <div id="content">
            <h1 id="timer"></h1>
            <h6 id="console">Console</h6>
            <h6 id="facecnt">Facent</h6>
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
            <canvas id="myChart" width="400" height="400">Canvas</canvas>
        </div>
    )
};

export default Room;