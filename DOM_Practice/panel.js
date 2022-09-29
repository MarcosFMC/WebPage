
const d = document;

export function OpenPanelSystem(panel, Btn, panelLink){

    d.addEventListener('click', (e) =>{

    if(e.target.matches(Btn) || e.target.matches(`${Btn} *`) )
    {
        d.querySelector(panel).classList.toggle('is-active');
        d.querySelector(`${Btn} *`).classList.toggle('uil-times-circle');
    }

    if(e.target.matches(panelLink)){
        d.querySelector(panel).classList.toggle('is-active');
        d.querySelector(`${Btn} *`).classList.toggle('uil-times-circle');
    }
})
}


export function ResponsivePanelSystem(){

    let widthMatch = matchMedia(('(max-width: 800px)'));

    const $panelButton = d.querySelector('.open-panel-btn');

    const $spaceElement = d.querySelector('.desktop-menu-space');

    const $panelResponsive = d.querySelector('.desktop-panel');

    if(widthMatch.matches){
        $panelButton.classList.add('is-active');
        $spaceElement.classList.add('display-none');
        $panelResponsive.classList.remove('is-active');
        //si es true estoy en el celu

    }
    else{
        $panelButton.classList.remove('is-active');
        $spaceElement.classList.remove('display-none');
        $panelResponsive.classList.add('is-active')
        //si es false estoy en la compu
    }

    const onResponsive = e =>{
        if(widthMatch.matches){
            $panelButton.classList.add('is-active');
            $spaceElement.classList.add('display-none');
            $panelResponsive.classList.remove('is-active');
            //si es true estoy en el celu

        }
        else{
            $panelButton.classList.remove('is-active');
            $spaceElement.classList.remove('display-none');
            $panelResponsive.classList.add('is-active')
            //si es false estoy en la compu
        }
    }

    widthMatch.addListener(onResponsive)
}
