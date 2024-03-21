let nombre = "Palabras Radiantes"
let autor = "Brandon S."
let tipo = "Saga"
let universo = "Cosmere"


const libro = {
    nombre,
    autor,
    tipo,
    universo,
    [tipo + " serie"]: "2da serie",
    show () {
        return this.nombre + ", " + this.autor
    }
}

Object.entries(libro).forEach(elem => console.log(elem))
console.log(libro.show())
console.log(Object.values(libro))
Object.entries(libro).forEach(([clave, valor]) => console.log(valor))
