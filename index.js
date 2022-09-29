
/*----------------------CALLBACK----------------------------*/
// function Suma(value, callback){
//     setTimeout(() => {
//         callback(value, value + value);
//     }, 0 | Math.random() * 5000);
// }


// Suma(1,(value,result) => {
//     console.log(`${value}, ${result}`);
//     Suma(2,(value,result) => {
//         console.log(`${value}, ${result}`);
//         Suma(3,(value,result) => {
//             console.log(`${value}, ${result}`);
//             Suma(4,(value,result) => {
//                 console.log(`${value}, ${result}`);
//             })
//         })
//     })
// })


/*----------------------PROMESA----------------------------*/
// function sumaPromise(value){
//     if(typeof value !== 'number') return Promise.reject(`Error el valor ${value} no es un numero pinche cabron`);

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({
//                 value:value,
//                 result:value + value 
//             })
          
//         }, 0 | Math.random() * 2000);      
//     });
// }


// sumaPromise(0)
// .then(obj =>{
//     console.log("Inicio Promise")
//     console.log(`Promise: ${obj.value},${obj.result}`);
//     return sumaPromise(1);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value},${obj.result}`);
//     return sumaPromise(2);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value},${obj.result}`);
//     return sumaPromise(3);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value},${obj.result}`);
//     return sumaPromise(4);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value},${obj.result}`);
//     console.log("Fin de la Promise")
// })
// .catch(err => console.error(err));

/*----------------------ASYNC FUNCTION----------------------------*/

// function sumaPromise(value){
//     if(typeof value !== 'number') return Promise.reject(`Error el valor ${value} no es un numero pinche cabron`);

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({
//                 value:value,
//                 result:value + value
//             })
          
//         }, 0 | Math.random() * 2000);      
//     });
// }

// async function funcionaAsincrona(){
//     try{
//         let obj = await sumaPromise(0)
//         console.log(`${obj.value}, ${obj.result}`);

//         obj = await sumaPromise(2);
//         console.log(`${obj.value}, ${obj.result}`);

//         obj = await sumaPromise("as");
//         console.log(`${obj.value}, ${obj.result}`);

//         obj = await sumaPromise(4);
//         console.log(`${obj.value}, ${obj.result}`);

//         obj =  await sumaPromise(5);
//         console.log(`${obj.value}, ${obj.result}`);
        
//         obj = await sumaPromise(6);
//         console.log(`${obj.value}, ${obj.result}`);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// funcionaAsincrona();



/*----------------------SYMBOL----------------------------*/

// edad = Symbol();

// objeto={
//     nombre: "Julian",
//     [edad]: 15
    
// };

// console.log(objeto[edad]);
// console.log(objeto);
// console.log(Object.getOwnPropertySymbols(objeto));

// for (const key in objeto) {
//    console.log(key);
// }

/*------------------------SETS----------------------------*/

// set = new Set([10,20,30,20,10,40,50,60]);

// set.add(100);

// set.delete(100);

// console.log(set);

// console.log(set.size);

// console.log(set.has(10));

// var arrayFromSet = Array.from(set);

// console.log(arrayFromSet);

// console.log(arrayFromSet[1]);

// set.clear();

// console.log(set);

// console.log(set.has(10));

/*------------------------MAPS----------------------------*/

// mapaObjeto = {
//     key: "value",
//     propiedad:'tujefa'
// }

// console.log(mapaObjeto);

// mapa = new Map([
//     ['key','value'],
//     ['propiedad','tujefa']
// ])

// console.log(mapa);

// console.log(mapa.has('key'));

// console.log(mapa.get('propiedad'));

// mapa.set('propiedad','hola');

// console.log(mapa);

// var llaves = [...mapa.keys()];

// var valores = [...mapa.values()];


// console.log(llaves);
// console.log(valores);

/*------------------------WEAKMAPS----------------------------*/


/*------------------------ITERATOR----------------------------*/

// var arreglo = [1,2,3,4,5];

// var iteradorDelArreglo = arreglo[Symbol.iterator]();

// console.log(arreglo);
// console.log(iteradorDelArreglo);

// console.log(iteradorDelArreglo.next());
// console.log(iteradorDelArreglo.next());
// console.log(iteradorDelArreglo.next());
// console.log(iteradorDelArreglo.next());
// console.log(iteradorDelArreglo.next());
// console.log(iteradorDelArreglo.next());


/*------------------------GENERATOR----------------------------*/


// function* Iterable(){
//     yield "tujefa";
//     console.log('deau');
//     yield "dos";
//     yield "tres";
//     console.log('tujefa2')
// }

// var iterableDeLaFuncion = Iterable();

//   console.log(iterableDeLaFuncion.next());
//   console.log(iterableDeLaFuncion.next());
//   console.log(iterableDeLaFuncion.next());
//   console.log(iterableDeLaFuncion.next());

// function cuadrado(valor){
//     setTimeout(() => {
//         return console.log({
//             valor: valor,
//             resultado: valor * valor
//         })
//     }, Math.random() * 5000);
// }


// function* generador(){
//     console.log("Inicia Generador")
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
// }

// var generadorIterable = generador();

// for (const iterator of generadorIterable) {
//     console.log(iterator);
// }

/*------------------------PROXIES----------------------------*/

//Objeto base
// const persona = {
//     nombre: "",
//     apellido:"",
//     edad:0
// }

// const manejador = {
//     set(obj,prop,valor){
//         //Si no tiene la propiedad que le queremos asignar 
//         //en el Objeto base tira ese error
//         if(Object.keys(obj).indexOf(prop) === -1){
//             return console.error(`la propiedad ${prop} no es valida`)
//         }

//         //Otro ejemplo de error podria ser hacer un if que te diga
//         //el valor de la propiedad no es un espacio en blanco hacer
//         //que salte un error
//         //Agregale a nuestra instancia la propiedad con su valor
//         obj[prop] = valor;
//     }
// }

//Creamos una instancia del objeto y recibo el Objeto base y
//ademas un Handler

// const marcos = new Proxy(persona,manejador);
// marcos.nombre = "Marcos";
// marcos.apellido = "Mendoza";
// marcos.edad = 20;
// marcos.instagram = 'maarcosmendoza_';

// console.log(marcos);

/*------------------------PROPIEDADES DINAMICAS DE LOS OBJETOS----------------------------*/

// const usuarios = ['jon','julian','messi','cr7'];

// const objUsuarios = {}

// usuarios.forEach((usuario,index) => {objUsuarios[`ID_${index}`] = usuario})

// console.log(objUsuarios);

