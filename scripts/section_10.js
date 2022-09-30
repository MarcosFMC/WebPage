const d = document;

export function SearchFilterSystem(content,input){

    const $textContent = d.querySelectorAll(content);

    const $input = d.querySelector(input);

    d.addEventListener('keyup',e=>{

        if(e.target===$input){

            const iv = $input.value;         

            $textContent.forEach(element => {

                let re = new RegExp(iv,'gi');    
    
                if(element.textContent.match(re) === null)
                {                          
                    element.parentNode.classList.add('opacity');
                    element.parentNode.classList.remove('counter-opacity');
                }  
                else{    
                    element.parentNode.classList.remove('opacity');
                    element.parentNode.classList.add('counter-opacity');
                }
                    
             });   
            
        }
    })

}