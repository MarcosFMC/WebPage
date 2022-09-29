
export function CameraDetectionSystem(){

  const video = document.getElementById("video");

        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch(err =>{
              const $div = document.createElement('div');
              $div.innerHTML = `<h2> No te carga la camara boludito</h2>`;
              video.insertAdjacentElement("beforebegin",$div)
              });    
}