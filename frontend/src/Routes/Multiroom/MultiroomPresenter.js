import React, { useLayoutEffect } from 'react';
import { Container, Grid, Paper, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import "./Multiroom.css";

const Room = () => {
    
    return (
        <Container>
            <div className="timer "id="timer">Pomodoro</div>
            <div class="controls__range">
                <input type="range" id="jsRange" min="15" max="25" value="20" step="1"/>
            </div>
            <div id="otherVideos"></div>
            <p>Your Pomodoro score is <div id="facenum"></div></p>
            <div id="enterBtn" href="#">ENTER</div>
            <video id="myVideo" className="remote-video" autoPlay muted controls playsInline></video>
            <canvas id="myChart"></canvas>
        </Container>
    )
};

export default Room;