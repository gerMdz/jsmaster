// Parámetros por defecto

function saludo(persona = 'Julio', year = new Date().getFullYear()) {


    return "Hola, " + persona + " en el " + year
}

console.log(saludo());
console.log(saludo('Ger'));
console.log(saludo('Ger', 2020));

// Funciones flecha

let saludo2 = function (nombre) {
    return "Hola " + nombre
}
console.log(saludo2("Ger MDz"))

let saludo3 = nombre => "De nuevo por aquí " + nombre;

console.log(saludo3("GJM"))

let saludo4 = (nombre, pais) => "De nuevo por aquí " + nombre + " desde " + pais;

console.log(saludo4("Julio", "ARG"))

let saludo5 = (nombre, pais) => {
    let continente = "América";
    return "De nuevo por aquí " + nombre + " desde " + pais + "(" + continente + ")";
}

console.log(saludo5("Julio", "ARG"))

// resumen

function multiplcacion(n1, n2) {
    console.log(n1 * n2);
}

let multiplicacion1 = (n1, n2) => console.log(n1 * n2)

multiplcacion(2, 3)
multiplicacion1(4, 5)

// JSON

let tienda = {
    nombre: "GAME",
    videoJuegos: ['GTA', "WWE", "FIFA"],
    mostrar: function () {
        console.log(this.nombre)
    },
    mostrar2() {
this.videoJuegos.forEach(juego => {
    if(juego === 'WWE'){
        console.log('El mejor juego: ' + juego)
    }else{
        console.log(juego)
    }

})
    },
    mostrar3: () => {
        console.log(tienda.nombre)
    }
}

tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3();