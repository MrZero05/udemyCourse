//Desestructuracion
//Objetos:

let avenger = {
    nombres: "Tony",
    clave: "IronMan",
    poder: "Dinero"
}

let {nombres, clave, poder} = avenger;

console.log(nombres, clave, poder);

//Desestructuracion
//Arreglos:

let avengers:string[] = ["Thor", "Steve", "Tony"];
//Cada uno de los valores puede ser referenciado
//teniendo en cuenta la posicion, sin importar el nombre.

let [loki, capi, ironman] = avengers;

console.log ( loki, capi, ironman);

