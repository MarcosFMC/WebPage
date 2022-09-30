
const d = document;

export function ScrollOpacitySystem(Btn){  
    
        if(window.scrollY > 500){
            d.querySelector(Btn).classList.add('is-active');
        }
        else{
            d.querySelector(Btn).classList.remove('is-active');
        }    
}