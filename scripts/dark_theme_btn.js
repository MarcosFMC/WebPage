
const d = document;

export function DarkThemeSystem(Btn, darkModeClass){  

    const darkElements = d.querySelectorAll('[data-dark]')

    const $btn = d.querySelector(Btn);    

    
    const darkMode = () =>{
    $btn.children[0].classList.add('uil-sun')
            
    darkElements.forEach(element => {
        element.classList.add(darkModeClass);
    })};

    const lightMode = () =>{
        $btn.children[0].classList.remove('uil-sun')
                
        darkElements.forEach(element => {
             element.classList.remove(darkModeClass);
        });  
    }

    d.addEventListener('click', e =>{

    if(e.target.matches(Btn) || e.target.matches(`${Btn} *`)){

        if($btn.children[0].classList.contains('uil-sun') === false){
            darkMode();
            localStorage.setItem('theme','dark');
        }    
        else{
            lightMode();
            localStorage.setItem('theme','light');
        }       
    }
    
    })

    d.addEventListener('DOMContentLoaded', e =>{

        if(localStorage.getItem('theme') === null) localStorage.setItem('theme','light');

        if(localStorage.getItem('theme') === 'light') lightMode();

        if(localStorage.getItem('theme') === 'dark')  darkMode();
        
    })
   
}

