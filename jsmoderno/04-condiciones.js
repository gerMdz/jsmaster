// Operador ternario

let persona = ["Gerardo", 16]
/// If clásico
if(persona[1] > 18){
    console.log('Mayor')
}else{
    console.log('Menor')
}

(persona[1] >= 18) ? console.log('Mayor') : console.log('Menor')

// Dif == and ===, != and !==

let edad1 = 80;
let edad2 = "80";

if(edad1 !== edad2){
    console.log('distintas')
}else{
    console.log('iguales')
}