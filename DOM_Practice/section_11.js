
const d = document;

export function PrizeDraw(selector,button)
{       
    const $button = d.querySelector(button);

    addEventListener('click',e=>{

        if(e.target === $button){

            const $objects = d.querySelectorAll(selector);

            const randomObject = Math.floor($objects.length * Math.random());
            
            alert(`El ganador del sorteo es: ${$objects[randomObject].textContent}`);
        }
    })
    
}