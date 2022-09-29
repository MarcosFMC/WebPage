
const d = document;

export function ClockSystem(clock,startBtn,stopBtn){

    let clockInterval;
    
    d.addEventListener('click', (e) =>{

    if(e.target.matches(startBtn)){
        clockInterval = setInterval(() => {
            let $timeString = new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML = `<h2>${$timeString}</h2>`;
        }, 1000);

        e.target.disabled = true;
    }

    if(e.target.matches(stopBtn)){
        clearInterval(clockInterval);
        d.querySelector(clock).innerHTML = '';
        d.querySelector(startBtn).disabled = false;
    }
})
}

export function AlarmSystem(audio,startBtn,stopBtn){

    let timeOut;
    const $audio = d.createElement('audio');
    $audio.src = audio;
    
    addEventListener('click', (e)=>{
        if(e.target.matches(startBtn)){
            timeOut = setTimeout(() => {
                $audio.play();
            }, 2000);
            e.target.disabled = true;  
        }

        if(e.target.matches(stopBtn)){
            clearInterval(timeOut); 
            d.querySelector(startBtn).disabled = false;
            $audio.pause();
            $audio.currentTime = 0;     
       }
    })
}