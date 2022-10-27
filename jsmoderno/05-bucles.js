// For IN, For OF, For EACH

let nombres = [
    'Gerardo',
    'Julio',
    'Graciela',
    'Isabel',
]
// Clásico
console.log('----Clásico-------')
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}

// For of
console.log('----For of-------')

for(let nombre of nombres){
    console.log(nombre)
}

// For in
console.log('----For in-------')
for(let indice in nombres){
    console.log(indice, nombres[indice])
}

// For each
console.log('----For each-------')
nombres.forEach(function (e, index, arreglo){
    console.log(index, e, arreglo)
})

// For flecha
console.log('----For each flecha-------')
nombres.forEach((e, index) =>{
    console.log(index, e)
})