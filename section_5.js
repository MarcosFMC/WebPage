
const d = document;

export function OpenWindowSystem(form){

    const $form = d.getElementById(form);

    let newWindow;

    d.addEventListener('submit', e=>{
        if(e.target === $form){
            e.preventDefault();
            newWindow = window.open($form.url.value,'_blank',`width=${$form.width.value}, height=${$form.height.value}`);
        }  
    })

    d.addEventListener('click', e =>{
        if(e.target === $form.close){
            newWindow.close();
        }
    })
 
}