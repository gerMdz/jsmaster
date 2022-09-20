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