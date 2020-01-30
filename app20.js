//POO
var Avenger = /** @class */ (function () {
    //Constructor
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var captain = new Avenger("Captain America", "TeamCapi", "Steve");
console.log(captain);
