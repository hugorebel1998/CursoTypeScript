import { Producto, calcularISV } from '../src/04-destructuracion';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 2000
    },
    {
        desc: 'Telefono2',
        precio: 2500
    },
];


const [total, isv] = calcularISV(carritoCompras);

console.log('total'+ total);
console.log('isv'+ isv);