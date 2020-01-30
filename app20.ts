//POO

class Avenger{

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;
    
    //Constructor

    constructor( nombre:string, equipo:string, nombreReal:string){

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    //Los constructores tambien pueden ser así
    // constructor( public nombre:string, public equipo:string, public nombreReal:string){
    // }
    //Pero se debe tener en cuenta de que no pueden estar declaradas los atributos en la parte de arriba.

}

let captain:Avenger = new Avenger("Captain America", "TeamCapi", "Steve");

console.log(captain);

