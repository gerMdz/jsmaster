let motors = {
    'marca': 'BMW',
    'ruedas': 'Cuatro',
    'motor': {
        'cilindros': 4,
        'cc': 2500
    }
}

let comprobar_cc = motors?.motor?.cc !== undefined

console.log(comprobar_cc)
