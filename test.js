//Callback

// function sumaNumeros(value,callback){
//     setTimeout(() => {
//         callback(value, value + value);
//     }, Math.random() * 5000);
// }

// sumaNumeros(1,(value, result) =>{
//     console.log("Inicio de Callback")
//     console.log(`Callback:${value}, ${result}`);
//     sumaNumeros(2,(value, result) =>{
//         if(result < 20) return console.error("El resultado es menor que 20");
//         console.log(`Callback:${value}, ${result}`);
//         sumaNumeros(3,(value, result) =>{
//             console.log(`Callback:${value}, ${result}`);
//             sumaNumeros(4,(value, result) =>{
//                 console.log(`Callback:${value}, ${result}`);
//                 sumaNumeros(5,(value, result) =>{
//                     console.log(`Callback:${value}, ${result}`);
//                     console.log("Finalizo la Callback")
//                 })
//             })
//         })
//     })
// })

//Promesa

// function sumaNumeros(value){
//          if(typeof value !== 'number') return Promise.reject(`El valor ${value} no es un numero`);
//             return new Promise((resolve,reject) =>{
//                  setTimeout(() => {
//                     resolve({
//                         value:value,
//                         result: value + value
//                     })
//                  }, Math.random() * 5000);
//             }
//     )  
// }


// sumaNumeros(1)
// .then(obj =>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);   
//     return sumaNumeros(2);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);   
//     return sumaNumeros(3);
// })

// .then(obj =>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);   
//     return sumaNumeros(4);
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);   
//     return sumaNumeros("as");
// })
// .then(obj =>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);   
// })
// .catch(err => {
//     console.error(err);
// });

//Async Function


// function sumaNumeros(value){
//     if(typeof value !== 'number') return Promise.reject(`El valor ${value} no es un numero`);
//        return new Promise((resolve,reject) =>{
//             setTimeout(() => {
//                resolve({
//                    value:value,
//                    result: value + value
//                })
//             }, Math.random() * 5000);
//        }
// )  
// }

// async function sumaNumerosAsincrona(){
//     try{
//         var xd = await sumaNumeros(1);
//         console.log(`Async Function ${xd.value}, ${xd.result}`);
     
//          xd = await sumaNumeros(2);
//          console.log(`Async Function ${xd.value}, ${xd.result}`);
     
//          xd = await sumaNumeros(3);
//          console.log(`Async Function ${xd.value}, ${xd.result}`);
     
//          xd = await sumaNumeros("asd");
//          console.log(`Async Function ${xd.value}, ${xd.result}`);
//     }
//     catch(err){
//         console.error(err);
//     }   
// }


// sumaNumerosAsincrona();

//SYMBOL