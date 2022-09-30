const d = document;

export function GeolocationSystem(id){

    const $gl = d.getElementById(id);


    const error = (err) =>{
        console.log(err);
        $gl.innerHTML = `<h2>Error code ${err.code}: ${err.message}</h2>`
    } 

    const success = (pos) =>{
       $gl.innerHTML = `<p>
       Tu posicion actual es:
       <br>
       <br>
       Latitud:<strong>${pos.coords.latitude}</strong><br>
       Longitud:<strong>${pos.coords.longitude}</strong><br>
       Precision:<strong>${pos.coords.accuracy} metros</strong>
        </p>`

       $gl.innerHTML += `<a href='https://www.google.es/maps/@${pos.coords.latitude},${pos.coords.longitude},20z' target='_blank'>Ver Mapa</a>`
    }

    navigator.geolocation.getCurrentPosition(success,error)
}