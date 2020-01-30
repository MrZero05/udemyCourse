var mifuncion = function (a) {
    return a;
};
//Su equivalente en funcion flecha es el siguiente:
var mifuncionF = function (a) { return a; };
console.log(mifuncion("normal"));
console.log(mifuncionF("flecha"));
//Funciones flecha con varios parametros
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
//Funciones con codigo por dentro
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            //el this de acá a punta al objeto global
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
var hulkF = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulkF.smash();
