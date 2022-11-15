// Parámetros por defecto

function saludo(persona='Julio', year= new Date().getFullYear()) {


    return "Hola, " + persona + " en el " + year
}

console.log(saludo());
console.log(saludo('Ger'));
console.log(saludo('Ger', 2020));

// Funciones flecha
