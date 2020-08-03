import * as React from "react";
import { useHistory } from 'react-router-dom';
import Result from '../Routes/Result';

const initTimer = () => {
    const enterBtn = document.querySelector("#enterBtn");
    let timer = document.getElementById('timer');
    var seconds = 0;
    var minutes = 0;
    let isConnected = 0;
    async function timerstart(){
        var contador = null;
        console.log(isConnected);
        seconds = 1;
        contador = window.setInterval(function(){
            if(seconds == 59){
                printTimer(minutes, seconds);
                seconds = 0;
                minutes++;
                //inference();
                return;
            }
            if(enterBtn.innerHTML=="Enter"){
                timer.innerHTML = "It's Timer";
                window.clearInterval(contador);
                return;
            }
            if(minutes>=25){
                seconds = 0;
                minutes = 0;
                timer.innerHTML = "It's Timer";
                window.clearInterval(contador);
                return;
            }
            printTimer(minutes, seconds);
            seconds++;
                
        }, 1000)
    }
    async function printTimer(minutes, seconds){
        
        var show_min = 24 - minutes;
        var show_sec = (60 - seconds) % 60;
        if(show_min<10){
            show_min = "0"+show_min;
        }
        if(show_sec<10){
            show_sec = "0"+show_sec;
        }
        timer.innerHTML = show_min+":"+show_sec;
    }
    enterBtn.addEventListener("click",
        evt => {
          timerstart();
          evt.preventDefault();
        },
        false
    );
}
export default initTimer;


