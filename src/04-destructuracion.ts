// Desestructuracion

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Empapelado',
    detalles: {
        autor: 'Charles ans',
        anio: 2020
    }
}

/*console.info('El volumen es: '+ reproductor.volumen);
console.info('El segundo es: '+ reproductor.segundo);
console.info('La canción es : '+ reproductor.cancion);
console.info('El autor es : '+ reproductor.detalles.autor);
console.info('El año de lanzamiento es: '+ reproductor.detalles.anio); */

const { volumen, segundo, cancion, detalles: { autor, anio } } = reproductor;
// Desestructuracion
console.info('El volumen es: ' + volumen);
console.info('El segundo es: ' + segundo);
console.info('La canción es : ' + cancion);
console.info('El autor es : ' + autor);
console.info('El año de lanzamiento es: ' + anio);


// Desestructuracion de Arreglos
const onepiece: string[] = ['luffy', 'zoro', 'sanji', 'nami', 'ussop'];
const [p1, p2, p3, p4] = onepiece;

const [, , , , p5] = onepiece;

console.info('El personaje numero uno es:' + p1);
console.info('El personaje numero dos es:' + p2);
console.info('El personaje numero tres es:' + p3);
console.info('El personaje numero cuatro es:' + p4);
console.info('El personaje numero quinto es:' + p5);

// Desestructuracion de argumentos
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Samsum",
    precio: 3400,
}

const table: Producto = {
    desc: "Ipad",
    precio: 7400,
}

export function calcularISV(productos: Producto[]): [number, number] {

    let total = 0;

    // Recorriendo el arreglo de Producto
    productos.forEach(({ precio }) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, table];

const isv = calcularISV(articulos);

console.info('El ISV es :' + isv);