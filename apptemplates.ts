//Debemos ponerlo en un condicional para que me marque un scope diferente

function getNombre(){
    return "Daniel Osorio"
}

if (true){
    let nombre:string = "Daniel";
    let apellido:string = "Osorio";
    let edad:number = 27;

    let texto:string;
    let texto2:string;

    texto = `Hola, soy ${ nombre } ${ apellido} y tengo ${ edad }`;
    texto2 = `Hola soy ${getNombre()} 
    pero con funciones`;
    console.log(texto);
    console.log(texto2);


}