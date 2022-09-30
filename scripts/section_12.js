
const d = document;

export function ResponsiveSliderSystem(img,left,right)
{       
    const imgs = d.querySelectorAll(img);

    const $left = d.querySelector(left);

    const $right = d.querySelector(right);

    let currentIndex = 0;

    addEventListener('click', e =>{

        if(e.target.matches(left) || e.target.matches(`${left} *`)){  

            e.preventDefault();
            if(currentIndex > 0){
                imgs[currentIndex].classList.remove('active');
                currentIndex--;
                imgs[currentIndex].classList.add('active');
            }   
            else{
                imgs[currentIndex].classList.remove('active');
                currentIndex = imgs.length-1;
                imgs[currentIndex].classList.add('active');       
            }     

        }
        if(e.target.matches(right) || e.target.matches(`${right} *`)){

            e.preventDefault();
         
            if(currentIndex < imgs.length -1 ){
                imgs[currentIndex].classList.remove('active');
                currentIndex++;
                imgs[currentIndex].classList.add('active');
            }   
            else{
                imgs[currentIndex].classList.remove('active');
                currentIndex = 0;
                imgs[currentIndex].classList.add('active');       
            }
        }
    })
}