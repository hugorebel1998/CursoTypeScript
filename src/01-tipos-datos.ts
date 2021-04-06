// Tipo de datos String
let saludo: string;
saludo = "Hola mundo";

// Tipo de datos Numeric 
let numeric: number;
numeric = 100;

// Tipo de datos Boleano
let VerdadoFalso: boolean;
VerdadoFalso = true;

// Tipo de datos que acepte String y Numeric
let stringOnumeric: string | number;
stringOnumeric = 'Esto es una prueba';
// stringOnumeric = 24;


// Tipo de datos array
let NombreLenguajes: string[];
NombreLenguajes = ['PHP', 'JavaScrip', 'Java'];
let conjuntoNumers: Array<number>;
conjuntoNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9];







interface Personaje {
    nombre: string;
    edad: number;
    carrera: string;
    estadoActual?: string;
}

const personajes: Personaje = {
    nombre: 'Hugo',
    edad: 24,
    carrera: 'Sistemas Computacionales'
}

personajes.estadoActual = 'Soltero';


console.log(saludo, numeric, VerdadoFalso);
console.log(NombreLenguajes);
console.log(conjuntoNumers);
console.table(personajes);

console.info(stringOnumeric);