//Tipos de datos en TS-JS

let nombre:string = "Daniel";
let edad:number = 27;
let booleano:boolean = true;

let hoy:Date = new Date();

hoy = new Date('2020-01-15');

let cualquiera:any;
if(true){
    let cualquiera:any = nombre;
    cualquiera = edad;
    cualquiera = booleano;
    cualquiera = hoy;
}
//esto es un objeto

let persona = {
    nombre: "Jose",
    edad: 28
}

/*se le puede asignar un valor siempre
y cuando tenga los mismos atributos*/

persona = {
    nombre: "Esperanza",
    edad: 58
}
