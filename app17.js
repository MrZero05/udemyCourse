//Desestructuracion
//Objetos:
var avenger = {
    nombres: "Tony",
    clave: "IronMan",
    poder: "Dinero"
};
var nombres = avenger.nombres, clave = avenger.clave, poder = avenger.poder;
console.log(nombres, clave, poder);
//Desestructuracion
//Arreglos:
var avengers = ["Thor", "Steve", "Tony"];
//Cada uno de los valores puede ser referenciado
//teniendo en cuenta la posicion, sin importar el nombre.
var loki = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(loki, capi, ironman);
