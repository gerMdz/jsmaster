// For IN, For OF, For EACH

let nombres = [
    'Gerardo',
    'Julio',
    'Graciela',
    'Isabel',
]
// Clásico
console.log('----Clásico-------')
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// For of
console.log('----For of-------')

for (let nombre of nombres) {
    console.log(nombre)
}

// For in
console.log('----For in-------')
for (let indice in nombres) {
    console.log(indice, nombres[indice])
}

// For each
console.log('----For each-------')
nombres.forEach(function (e, index, arreglo) {
    console.log(index, e, arreglo)
})

// For flecha
console.log('----For each flecha-------')
nombres.forEach((e, index) => {
    console.log(index, e)
})
// Iterable

const mi_iter = nombres[Symbol.iterator]();

console.log(typeof mi_iter, mi_iter)

console.log(mi_iter.next())
console.log(mi_iter.next())
console.log(mi_iter.next())
console.log(mi_iter.next())
console.log(mi_iter.next())


let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno",
}

fruta[Symbol.iterator] = function () {
    let indice = 0;
    let valores = Object.values(this)
    return {
        next() {
            // let valor = valores[indice];
            // indice++;
            if (indice >= valores.length) {
                return {
                    done: true,
                    value: undefined
                }
            }
            return {
                done: false,
                value: valores[indice++]
            }
        }
    }
}

for (let propiedades of fruta) {
    console.log(propiedades)
}

