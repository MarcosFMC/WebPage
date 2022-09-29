

const d = document;

export function ResponsiveSystem(id,mediaQuery,mobileContent,desktopContent){

    const $container = d.querySelector(id);

    let widthMatch = matchMedia(mediaQuery);

    const responsive = (e) =>{

        if(e.matches){
            $container.innerHTML = desktopContent;
        }
        else{
            $container.innerHTML = mobileContent;
        }
    }

    //si widthmatch es false estamos en celular
    //si es true estamos en la compu
    widthMatch.addListener(responsive);

    responsive(widthMatch)
}