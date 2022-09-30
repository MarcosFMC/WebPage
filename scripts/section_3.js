
export function TimerSystem(timer,date,message){

    const $d = document;
    const $timer = $d.querySelector(timer);

    let $targetDate = new Date(date);

    let interval = setInterval(() => {

        let $currentDate = new Date();

        let diff = new Date($targetDate.getTime() - $currentDate.getTime());
        
        $timer.innerHTML = `<h2>Faltan: ${diff.getUTCMonth()} meses ${diff.getUTCDate()-1} dias ${diff.getUTCHours()} horas ${diff.getUTCMinutes()} minutos ${diff.getUTCSeconds()} segundos</h2>`
        
        if(diff.getTime() <= 0){
            clearInterval(interval);
            $timer.innerHTML = `<h2>${message}</h2>`;
        }
    },1000)   


}