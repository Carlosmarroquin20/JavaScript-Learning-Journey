// Objeto pewrsona tv

let nombre = "Ema";
let casa = "Porvenir";
let edad = 16;

let personaje = {
    nombre: "Ema", casa:"Porvenir", edad:16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['casa']);

personaje.edad = 15; //Esta se usa mas

let llave = 'edad';

personaje ['edad']=16;


delete personaje.casa;

console.log(personaje);