let nombres = ['MusaGeng', 'MonicaIssa', 'CesarNath', 'MonikaBarry', 'NiMa']

let existe = nombres.some(name => name === 'MusaGeng')

let motors = [{
    'marca': 'BMW',
    'ruedas': 'Cuatro'
}, {
    'marca': 'Kawa',
    'ruedas': 'Cuatro'
}, {
    'marca': 'Chevrolet',
    'ruedas': 'Cuatro'
}]

console.log(existe)

let isEquals = motors.every(motor => motor.ruedas === 'Cuatro')

console.log(isEquals)

nombres.map(nombre => console.log(nombre))

console.log(nombres.reduce((acumulador, actual) => {
    return acumulador + ', ' + actual
}))
