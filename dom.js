// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('clase'))
// console.log(document.getElementsByName('nombre'))
// console.log(document.getElementById('unico'))

//SELECTORES,NODOS Y ELEMENTOS

// console.log(document.styleSheets);

// console.log(document.forms)

// console.log(document.images)

// console.log(document.links)

// console.log(document.charset)

// console.log(document.doctype)

// console.log(document)

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 5000);

//ATRIBUTOS Y DATA-ATRIBUTOS

// console.log(document.querySelectorAll('li').length);

// console.log(document.querySelectorAll('li')[3]);

// document.querySelector('li input').placeholder = 'Hola';

// console.log(document.querySelector('li input').setAttribute('placeholder',' onichan'));

// const $placeHolder = document.querySelector('li input').placeholder;

// console.log(`soy ${$placeHolder}`)

// console.log(document.querySelector('li input').hasAttribute('placeholder'));

// document.querySelector('li input').removeAttribute('placeholder')

// console.log(document.querySelector('li input').dataset)

// console.log(document.querySelector('li input').dataset.description)

//ESTILOS Y VARIABLES CSS

// const element = document.querySelector('li input');

// // console.log(window.getComputedStyle(element))

// element.style.backgroundColor = "red";

// element.style.border = "none";

// element.style.padding = "10px";

// element.style.textAlign = "center";

// console.log(element.style);

// const $html = document.documentElement, $body = document.body;

// var darkColor = getComputedStyle($html).getPropertyValue('--dark-color');

// var yellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

// $body.style.backgroundColor = darkColor;

// $body.style.color = yellowColor;

//CLASES CSS

// const $cubo = document.querySelector('.cube');

// console.log($cubo.className);

// console.log($cubo.classList);

// console.log($cubo.classList.contains('cube'));

// $cubo.classList.add('rotate-45');

// $cubo.classList.replace('rotate-45','rotate-135');

//TEXTO Y HTML

// const $paragraph = document.querySelector('#que-es');

// $paragraph.textContent = "Soy CSS en toda su expresividad ndea dou"

// $paragraph.outerHTML = "Que ONDA WEYYY<br><div>QUE ONDA CON QUE WACHO TONTO???????</div>"

//DOM TRAVERSING

// const $cards = document.querySelector('.cards');

// console.log($cards);

// console.log($cards.children)

// console.log($cards.firstElementChild);

// console.log($cards.previousElementSibling);

// console.log($cards.closest('body'));

// console.log($cards.children[3].closest('section'));

//ELEMENTOS Y FRAGMENTOS


// function crearNuevaCarta(){
//     $figure = document.createElement('figure');
//     $img = document.createElement('img');
//     $figcaption = document.createElement('figcaption');
//     $cards = document.querySelector('.cards');
    
//     $figure.className = 'card';
    
//     $figcaption.innerHTML = 'Zed de Campeonato';
    
//     $img.setAttribute('src', 'https://th.bing.com/th/id/R.fab43baf891ac9f7d604a9381917f317?rik=MWAUJ7R2grJcVQ&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f9%2f3%2f6%2f99927.jpg&ehk=3S09ShJTEDi4cTQTgZKRkoLWkdXjTrp2Wi%2b4ZgTBI1c%3d&risl=&pid=ImgRaw&r=0')
//     $img.setAttribute('alt','Foto de Zed')
    
    
    
//     $cards.appendChild($figure);
//     $figure.appendChild($img);
//     $figure.appendChild($figcaption);
// }



// let estaciones = ['Invierno','Verano','Primavera'];

// const $ul = document.createElement('ul');

// const $title = document.createElement('h3');

// const $body = document.querySelector('body');


// $title.textContent = "Estaciones del año";

// $ul.appendChild($title);

// $body.appendChild($ul);

// estaciones.forEach(element => {
//     const $estacion = document.createElement('li');
//     $estacion.innerHTML = element;
//     $estacion.classList.add('estacion');
//     $ul.appendChild($estacion);
// });

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ]

// $ul2 = document.createElement('ul');

// $ul2.textContent = 'Meses del año';

// $body.appendChild($ul2);

// $fragmento = document.createDocumentFragment();

// meses.forEach(e => {
//     $li = document.createElement('li');
//     $li.textContent = e;
//     $fragmento.appendChild($li);
// });

// $ul2.appendChild($fragmento);


//TEMPLATES HTML


// const data = [
//     {
//         title: "Titulo",
//         img: "https://images.wallpapersden.com/image/download/zed-league-of-legends-digital_bGlqZmmUmZqaraWkpJRobWllrWdpZWU.jpg"
//     },
//     {
//         title: "Titulo",
//         img: "https://images.wallpapersden.com/image/download/zed-league-of-legends-digital_bGlqZmmUmZqaraWkpJRobWllrWdpZWU.jpg"
//     },
//     {
//         title: "Titulo",
//         img: "https://images.wallpapersden.com/image/download/zed-league-of-legends-digital_bGlqZmmUmZqaraWkpJRobWllrWdpZWU.jpg"
//     },
//     {
//         title: "Titulo",
//         img: "https://images.wallpapersden.com/image/download/zed-league-of-legends-digital_bGlqZmmUmZqaraWkpJRobWllrWdpZWU.jpg"
//     },
//     {
//         title: "Titulo",
//         img: "https://images.wallpapersden.com/image/download/zed-league-of-legends-digital_bGlqZmmUmZqaraWkpJRobWllrWdpZWU.jpg"
//     }
// ]


// const $template = document.getElementById('template-card').content;
// const $cards = document.querySelector('.cards');

// $fragmento = document.createDocumentFragment();


// data.forEach(e => {
    
//     $template.querySelector('img').setAttribute("src",e.img)
//     $template.querySelector('figcaption').textContent = e.title;

//     $clone = document.importNode($template,true);
//     $fragmento.appendChild($clone);
// });

// $cards.appendChild($fragmento);

//MODIFICANDO ELEMENTOS (OLD STYLE)

// const $cards = document.querySelector('.cards'),
//     $newCard = document.createElement('figure'),
//     $clonecards = $cards.cloneNode(true);


// $newCard.innerHTML = '<img src="https://yt3.ggpht.com/a/AATXAJz-0wD2USPgz0RIrFo6JySqRxZ7cGIXGFhYGw=s900-c-k-c0xffffffff-no-rj-mo" alt="any"><figcaption>Nueva carta</figcaption>'

// // $cards.replaceChild($newCard,$cards.children[2]);

// $cards.insertBefore($newCard,$cards.children[1]);

// $cards.removeChild($cards.lastElementChild);

// document.body.appendChild($clonecards);

//MODIFICANDO ELEMENTOS (COOL STYLE)

// const $cards = document.querySelector('.cards'),
//     $newCard = document.createElement('figure')


// const $cardContent = '<img src="https://yt3.ggpht.com/a/AATXAJz-0wD2USPgz0RIrFo6JySqRxZ7cGIXGFhYGw=s900-c-k-c0xffffffff-no-rj-mo" alt="any"><figcaption></figcaption>'

// $newCard.insertAdjacentHTML("afterbegin",$cardContent);
// $newCard.querySelector('figcaption').insertAdjacentText("afterbegin","Any")

// $newCard.classList.add('card');

// $cards.insertAdjacentElement("afterbegin",$newCard);


//MANEJADORES DE EVENTO


// $boton = document.querySelector('#boton-evento');

// $boton.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

// })

//EVENTOS CON PARAMETROS Y REMOVER EVENTOS

// $boton = document.querySelector('#boton-evento');
// $botonRemover = document.querySelector('#boton-evento__remover');

// function saludar(nombre = 'Unknown'){
//     alert(`Hola, Como estas ${nombre}?`);
// }

// $boton.addEventListener('click',() => {saludar('gerardo')})


// const removerEventoClick = ()=>{
//     alert('removiendo evento de click');
//     $botonRemover.removeEventListener('click',removerEventoClick);
// }

// $botonRemover.addEventListener('click',removerEventoClick);

//FLUJO DE EVENTOS

// const $divs = document.querySelectorAll('.eventos-flujo div');

// function funcionPrueba(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
// }

// $divs.forEach(div => {
//     div.addEventListener('click', funcionPrueba);
// })

//STOPPROPAGATION Y PREVENTDEFAULT

// const $divs = document.querySelectorAll('.eventos-flujo div');
// const $aLink = document.querySelector('div a');

// function funcionPrueba(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//     e.stopPropagation();
// }

// $divs.forEach(div => {
//     div.addEventListener('click', funcionPrueba);
// })

// $aLink.addEventListener('click', e =>{
//     alert('hola');
//     e.preventDefault();
// })


//DELEGACION DE EVENTOS


// const $body = document.body;

// $body.addEventListener('click', (e)=>{
//     console.log('Le diste click a: ' , e.target);

//     if(e.target.matches('body')){
//         console.log('LE CLICKEASTE AL BODY KRNAL')
//     }
// })

//BOM


//PROPIEDADES Y EVENTOS


//METODOS


//OBJETOS: URL, HISTORIAL Y NAVEGADOR

// console.log(location);

// console.log(location.origin);

// console.log(location.protocol);

// console.log(location.host);

// console.log(location.hostname);

// console.log(location.port);

// console.log(location.href);

// console.log(location.hash);

// console.log(location.search);

// console.log(location.pathname);

// console.log(history)

// console.log(history.back)

// console.log(history.forward)

// console.log(history.go)

// console.log(navigator)


//EJERCICIO 1 DOM










