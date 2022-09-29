
const d = document;

const ua = window.navigator.userAgent;

export function DeviceDetectionSystem(id){

    const $container = d.getElementById(id); 
    
    const isMobile={
        android: ()=>ua.match(/android/i),
        ios:     ()=>ua.match(/iphone|ipad|ipod/i),
        windows: ()=>ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows()
        }

    };
    const isDesktop={
        linux:   () => ua.match(/linux/i),
        mac:     () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows()
        }

    };
    const isBrowser={
        chrome: ()=>ua.match(/chrome/i),
        safari: ()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:  ()=>ua.match(/opera|opera mini/i),
        ie:     ()=>ua.match(/msie|iemobile/i),
        edge:   ()=>ua.match(/edge/i),
        any: function(){
            return this.chrome() ||
             this.safari() ||
             this.firefox()||
             this.opera()  ||
             this.ie()     ||
             this.edge() 
        }
    };

    $container.innerHTML = 
    `User Agent: ${ua}<br>
    Plataforma: ${isMobile.any()||isDesktop.any()}<br>
    Navegador: ${isBrowser.any()}`


    if(isMobile.any()){
        $container.innerHTML += '<br><br>Este texto solo se ve si estas en un Movil'
    }
    if(isDesktop.any()){
        $container.innerHTML += '<br><br>Este texto solo se ve si estas en un Computadora'
    }
}