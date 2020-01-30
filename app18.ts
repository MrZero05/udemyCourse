//Promesas en ES6.

let prom1 = new Promise( function(resolve, reject){
    setTimeout( () =>{
        console.log("Promesa terminada");
        // Termina bien
        //resolve();
    
        // Termina mal
        reject();

    }, 1500 )
})


console.log("Paso 1: antes de empezar la promesa");
prom1.then( function(){
    console.log("Ejecutarme cuando se termine bien");
} ,
    function(){
        console.error("Ejecutar si todo sale mal");
    } )
console.log("Paso 2: despues de terminar la promesa");