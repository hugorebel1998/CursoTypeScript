class Persona {

    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public direccion?: {
            calle: string,
            telefono: number,
            codigo_postal: number
        }
    ) {
    }
}

const persona = new Persona('Hugo', 'Guillermo', 24);

console.log(persona)
