//Tipos de datos en TS-JS
var nombre = "Daniel";
var edad = 27;
var booleano = true;
var hoy = new Date();
hoy = new Date('2020-01-15');
var cualquiera;
if (true) {
    var cualquiera_1 = nombre;
    cualquiera_1 = edad;
    cualquiera_1 = booleano;
    cualquiera_1 = hoy;
}
//esto es un objeto
var persona = {
    nombre: "Jose",
    edad: 28
};
/*se le puede asignar un valor siempre
y cuando tenga los mismos atributos*/
persona = {
    nombre: "Esperanza",
    edad: 58
};
