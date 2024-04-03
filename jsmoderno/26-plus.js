// Separador numérico
let cantidad = 4_000_000

console.log(typeof cantidad, '=> ' + cantidad)
// Replace y all

let phrase = "Vida antes que muerte"

let new_phrase = phrase.replaceAll('Vida', 'Vidas')

console.log(new_phrase)

// Asignadores lógicos

let nombre = "Ger"
let edad = "54"

nombre ||= edad
edad &&= nombre
edad *=2

console.log(nombre)
console.log(edad)

