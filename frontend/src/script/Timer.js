const initTimer = (props) => {
    const enterBtn = document.querySelector("#enterBtn");
    let timer = document.getElementById('timer');
    var seconds = 0;
    var minutes = 0;
    let isConnected = 0;
    let left_time = 25;
    
    function speakstart(){
        var msg = new SpeechSynthesisUtterance();
        msg.text = "인성 문제 있어?";
        window.speechSynthesis.speak(msg);
    }
    async function timerstart(){
        var contador = null;
        console.log(isConnected);
        seconds = 1;
        contador = window.setInterval(function(){
            if(seconds === 59){
                printTimer(minutes, seconds);
                seconds = 0;
                minutes++;
                speakstart();
                return;
            }
            if(enterBtn.innerHTML === "Enter"){
                timer.innerHTML = "00:00";
                window.clearInterval(contador);
                return;
            }
            else if(minutes>=left_time){
                seconds = 0;
                minutes = 0;
                timer.innerHTML = "00:00";
                
                window.clearInterval(contador);
                window.location = '/result';
                return;
            }
            else{
                printTimer(minutes, seconds);
            }
            seconds++;
        }, 1000)
    }
    async function printTimer(minutes, seconds){
        console.log(minutes, seconds);
        var show_min = left_time - minutes - 1;
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
          // speakstart();
          evt.preventDefault();
        },
        false
    );
}
export default initTimer;