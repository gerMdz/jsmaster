let nombres = ['MusaGeng', 'MonicaIssa', 'CesarNath', 'MonikaBarry', 'NiMa']

 const search =  nombres.find(persona => {
     return persona === 'NiMa'
 })

// One line
const search_b =  nombres.find(persona => persona === 'MonikaBarry')

// findIndex devuelve -1 si no lo encuentra, si no devuelve el index.
let search_c =  nombres.findIndex(persona => persona === 'CesarNath')

// Objetos iterables
let search_d =  Array.from(nombres[0])

// Objetos iterables y acciones como segunda opción (un callback)
let search_e =  Array.from([1, 2, 7, 3, 4], numero => Math.pow(numero,2))

// Comprueba existencia
let search_f = nombres.includes("MonicaIssa")

// Filtra
let search_g = nombres.filter(persona => persona.length > 6)
let search_h = nombres.filter(persona => persona.includes("g"))

console.log(search);
console.log(search_b);
console.log(search_c);
console.log(search_d);
console.log(search_e);
console.log(search_f);
console.log(search_g);
console.log(search_h);
