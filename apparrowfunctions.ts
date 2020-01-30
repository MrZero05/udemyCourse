let mifuncion = function(a){
    return a;
}

//Su equivalente en funcion flecha es el siguiente:

let mifuncionF = a => a;

console.log(mifuncion("normal"));
console.log(mifuncionF("flecha"));

//Funciones flecha con varios parametros

let miFuncion2 = function(a:number, b:number){
    return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;

//Funciones con codigo por dentro

let miFuncion3 = function( nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;    
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;    
}

let hulk = {
    nombre: "Hulk",
    smash(){

        setTimeout(function(){
            //el this de acá a punta al objeto global
            console.log(this.nombre + " smash!!");  
        }, 1500);
        
    }
}

let hulkF = {
    nombre: "Hulk",
    smash(){

        setTimeout( ()=> console.log(this.nombre + " smash!!") , 1500);
        
    }
}


hulkF.smash();