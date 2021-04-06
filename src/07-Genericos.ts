
function quetipoSoy<T>(argumento:T){
    return argumento;
}

let soyString = quetipoSoy('Hola mundo');
let soyNumeric = quetipoSoy(2000);
let soyArreglo = quetipoSoy([1,2,3,4,5,6,7,8,9]);

let soyExplicito = quetipoSoy<number> (1000);
