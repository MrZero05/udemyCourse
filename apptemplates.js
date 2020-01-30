//Debemos ponerlo en un condicional para que me marque un scope diferente
function getNombre() {
    return "Daniel Osorio";
}
if (true) {
    var nombre_1 = "Daniel";
    var apellido = "Osorio";
    var edad_1 = 27;
    var texto = void 0;
    var texto2 = void 0;
    texto = "Hola, soy " + nombre_1 + " " + apellido + " y tengo " + edad_1;
    texto2 = "Hola soy " + getNombre() + " \n    pero con funciones";
    console.log(texto);
    console.log(texto2);
}
