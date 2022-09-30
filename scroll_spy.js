const d = document;


export function DesktopPanel(){

    const $sections = d.querySelectorAll('.section');

    const $sectionsToHover = d.querySelectorAll('.desktop-menu-container a');

    const options = {
        threshold: 0.5
    };

    const cb = (entries,observer)=>{

       entries.forEach(entry => {
        if(entry.isIntersecting ===true){
            $sectionsToHover.forEach(element => {

                element.parentNode.classList.remove('is-active');
                element.classList.remove('is-active');

                if(entry.target.children[0].textContent === element.textContent){
                    element.parentNode.classList.add('is-active');
                    element.classList.add('is-active');
                }
            });

            // console.log(entry.target.children[0].textContent);
        }
       });
    }
       
    let observer = new IntersectionObserver(cb,options);

    $sections.forEach(e=>{
        observer.observe(e);
    })

    // observer.observe(d.querySelector('#section1'));

}