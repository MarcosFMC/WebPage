const d = document;

export function ConnectDetectionSystem(){


    const isOnLine = () =>{

        const $div = d.createElement('div');
        
        if(navigator.onLine){
            $div.textContent='Conexion Reestablecida'
            $div.classList.add('online');
            $div.classList.remove('offline');
        }
        else{
            $div.textContent='Conexion Perdida'
            $div.classList.add('offline');
            $div.classList.remove('online');
        }
        d.body.appendChild($div);

        setTimeout(() => {
            $div.remove();    
        }, 2000);
    }

    window.addEventListener('offline', ()=>isOnLine());

    window.addEventListener('online',  ()=>isOnLine());

}