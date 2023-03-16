// Desestructuración
// Ejemplo clásico
let frutas = ["manzana", "pera", "sandía", "naranja"]

let manzana1 = frutas[0]
let pera2 = frutas[1]
let sandia3 = frutas[2]
let naranja4 = frutas[3]


/// Desestructurar

let [manzana, pera, sandia, naranja] = frutas;

console.log(naranja)
console.log(sandia)
console.log(pera)
console.log(manzana)

// Objetos

let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno",
    cuidados: {
        temperatura: "ambiente",
        humedad: "poca"
    }
}

let {nombre, color, temporada, cuidados} = fruta
console.log(cuidados.temperatura)

// String

let texto = "Juan Alberto Perez 11223344"

let [nombre1, nombre2, apellido, dni] = texto.split(' ')
console.log(dni)

// variables

let language = "PHP", framework = "Symfony", editor = "PHPStorm";

// utilidades

function mostrarUsuario({nombre, apellido = "No Indica", ciudad = "Mendoza"}){
    console.log(nombre, apellido, ciudad)
}

mostrarUsuario({nombre:"ger", ciudad: "Capital"})
