// ECMA 2021/ ES12 / ES.NEXT

// Variables: var, let, const

// Cuidado cuando se llaman a las funciones

var nombre = 'Ger';

function mostrarNombre() {
    nombre = 'Julio';
    var apellido = 'Montivero';
    console.log('Arriba', nombre)
    console.log('Apellido', apellido)
}
mostrarNombre();
console.log('Bien', nombre);

// console.log('Apellido', apellido)

// Let: ámbito de bloque

let pais = 'Argentina'
function mostrarPais() {
    console.log(pais)
}

mostrarPais()


if(true){
    let continente = 'América';
    console.log(continente)
}

// console.log('fuera' , continente) No se accede desde fuera del bloque donde se creo

// console.log(pais)

const edad = 18;

