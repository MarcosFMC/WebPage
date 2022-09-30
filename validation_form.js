const d = document;

export function ValidationFormSystem(form){

    const $validationForm = d.querySelector(form);

    const incorrectStyle = (input,err)=>{

        if(input.classList.contains('incorrect') === false){

            const $element = d.createElement('div');
            $element.textContent = err;
            $element.classList.add('incorrect-container');
            input.insertAdjacentElement('afterend',$element);
          
        }

        input.classList.remove('correct');
        input.classList.add('incorrect');
       
    }
    const correctStyle = (input)=>{

        if(input.classList.contains('incorrect') === true){
            input.nextElementSibling.remove();
        }

        input.classList.remove('incorrect');
        input.classList.add('correct');
    }

    d.addEventListener('keyup',e=>{

        if(e.target === $validationForm.name){
            $validationForm.name.value.match(/\D/g) ? correctStyle($validationForm.name) :  incorrectStyle($validationForm.name,'Escribe tu nombre!');
        }
        if(e.target === $validationForm.mail){
            $validationForm.mail.value.match(/\S+@\S+\.\S+/g) ? correctStyle($validationForm.mail) :   incorrectStyle($validationForm.mail,'Escribe tu mail!');
        }
        if(e.target === $validationForm.asunto){
            $validationForm.asunto.value.match(/\D/g) ? correctStyle($validationForm.asunto) :   incorrectStyle($validationForm.asunto,'Escribe tu asunto!');
        }
        if(e.target === $validationForm.comments){
            $validationForm.comments.value.length <= 255 ? correctStyle($validationForm.comments) :   incorrectStyle($validationForm.comments,'Debes tener menos de 255 caracteres!');
        }

    })
}