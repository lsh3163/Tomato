import * as React from "react";
import * as tf from '@tensorflow/tfjs';

const initJavis = () => {
    const enterBtn = document.querySelector("#enterBtn");
    const webcamElement = document.getElementById('myVideo');
    const cocoSsd = require('@tensorflow-models/coco-ssd');
    var seconds = 0;
    var minutes = 0;
    var face_cnt = 0;
    var time = 0;
    var data = new Array;
    var times = new Array;
    var Chart = require('chart.js');
    async function inferencestart(){
        var contador = null;
        seconds = 1;
        contador = window.setInterval(function(){
            if(seconds === 59){
                seconds = 0;
                minutes++;
                inference();
                return;
            }
            if(enterBtn.innerHTML==="Enter"){
                window.clearInterval(contador);
                return;
            }
            if(minutes>=25){
                seconds = 0;
                minutes = 0;
                window.clearInterval(contador);
                return;
            }
            seconds++;
                
        }, 1000)
    }
    async function inference(){
        console.log("Loading coco SSD...");
        time += 1;
        // Load the model.
        const model = await cocoSsd.load();
        const webcam = await tf.data.webcam(webcamElement);
        const img = await webcam.capture();
        const prediction = await model.detect(img);
        if(prediction.length===0){
            data.push(0.1);
            times.push(time);
        }
        else if(prediction.length > 0){
            face_cnt+=1;
            if(prediction[0].class==="person"){
                data.push(prediction[0].score);
                times.push(time);
            }
            else{
                data.push(0.1);
                times.push(time);
            }
        }
        document.getElementById("facenum").innerText = face_cnt;
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: times,
                datasets: [{
                    label: 'Your Pomodoro Score',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data
                }]
            },
            options: {}
        });

    }
    enterBtn.addEventListener("click",
        evt => {
          inferencestart();
          evt.preventDefault();
        },
        false
    );
}
export default initJavis;