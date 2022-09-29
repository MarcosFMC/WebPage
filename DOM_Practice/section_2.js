
const d = document;

let x = 0;
let y = 0;



export function MovementSystem(element,background,e){
   
        const $elementLimit = d.querySelector(element).getBoundingClientRect();
        const $backgroundLimit = d.querySelector(background).getBoundingClientRect();

        switch (e.key) {
            case 'ArrowUp':
                if($elementLimit.top > $backgroundLimit.top) y--;
                e.preventDefault();
                break;

            case 'ArrowDown':
                if($elementLimit.bottom < $backgroundLimit.bottom) y++;
                e.preventDefault();
                break;    

            case 'ArrowLeft':
                if($elementLimit.left > $backgroundLimit.left) x--;
                e.preventDefault();
                break;

            case 'ArrowRight':
                if($elementLimit.right < $backgroundLimit.right) x++; 
                e.preventDefault();
                break;

            default:
                break;
        }   

        d.querySelector(element).style.transform = `translate(${x*10}px,${y*10}px)`;
    
}


export function ShortcutsSystem(e){        
        if(e.altKey && e.key.match('a')){
            alert('Haz lanzado una alerta');
        }
        if(e.altKey && e.key.match('p')){
            prompt('Haz lanzado un aviso');
        }
        if(e.altKey && e.key.match('c')){
            confirm('Haz lanzado una confirmacion');
        }
}