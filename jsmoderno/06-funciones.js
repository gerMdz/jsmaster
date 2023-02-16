// Parámetros por defecto

function saludo(persona='Julio', year= new Date().getFullYear()) {


    return "Hola, " + persona + " en el " + year
}

console.log(saludo());
console.log(saludo('Ger'));
console.log(saludo('Ger', 2020));

// Funciones flecha

let saludo2 = function (nombre){
    return "Hola " + nombre
}
console.log(saludo2("Ger MDz"))

let saludo3 = nombre => "De nuevo por aquí " + nombre;

console.log(saludo3("GJM"))

let saludo4 = (nombre, pais) => "De nuevo por aquí " + nombre + " desde " + pais;

console.log(saludo4("Julio", "ARG" ))

let saludo5 = (nombre, pais) => {
    let continente = "América";
    return "De nuevo por aquí " + nombre + " desde " + pais + "(" + continente + ")";
}

console.log(saludo5("Julio", "ARG" ))