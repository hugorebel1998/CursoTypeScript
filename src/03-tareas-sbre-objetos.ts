interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion:Direccion;
    mostrarDireccion(): string;
}

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 20,
    direccion: { //Objeto anidado
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ',' + this.direccion.calle + ',' + this.direccion.ciudad;
    }
}
const direccion = superHeroe.mostrarDireccion();

console.info(direccion);