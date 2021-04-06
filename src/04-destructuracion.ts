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

// console.info('El volumen es: '+ reproductor.volumen);
// console.info('El segundo es: '+ reproductor.segundo);
// console.info('La canción es : '+ reproductor.cancion);
// console.info('El autor es : '+ reproductor.detalles.autor);
// console.info('El año de lanzamiento es: '+ reproductor.detalles.anio);

const { volumen, segundo, cancion, detalles:{autor, anio} } = reproductor;
// Desestructuracion
console.info('El volumen es: ' + volumen);
console.info('El segundo es: ' + segundo);
console.info('La canción es : ' + cancion);
console.info('El autor es : '+ autor);
console.info('El año de lanzamiento es: '+ anio);