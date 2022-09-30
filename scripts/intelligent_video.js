const d = document

export function IntelligentVideoSystem(video){

    const $intelligentVideo = d.querySelector(video);


    const cb = (entries,observer) => {
       
        entries.forEach(entry => {

            if(entry.isIntersecting){
                $intelligentVideo.play();
            }
            else{
                $intelligentVideo.pause();
            }
        });

    }

    const observer = new IntersectionObserver(cb,{
        threshold:1
    });
    observer.observe($intelligentVideo);

    d.addEventListener('visibilitychange', e =>{

        if (document.visibilityState === 'visible') {

          } else {
            $intelligentVideo.pause();
          }
      
    })
}