// Desestructuracion de argumentos

interface Producto {
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

function calcularISV(productos: Producto[]):number {

    let total = 0;

    // Recorriendo el arreglo de Producto
    productos.forEach((productos) => {
        total += productos.precio;
    })
    return total * 0.15;
}

const articulos = [telefono, table];

const isv = calcularISV(articulos);

console.info('El ISV es :' + isv);