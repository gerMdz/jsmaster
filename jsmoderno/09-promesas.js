let products = [
    {
        name: "Monitor Grande",
        mark: "Lenovo",
        pulgadas: 24
    },
    {
        name: "Monitor Mediano",
        mark: "Lg",
        pulgadas: 22
    },
    {
        name: "Monitor Chico",
        mark: "Philips",
        pulgadas: 19
    }
]

getProducts = () => {
    return new Promise((resolve, reject) => {
        console.log("Cargando...")
        setTimeout(
            () => {
                resolve(products);
                // reject(Error('Ups. Error'))
            }, 500
        )
    })

}

getProducts()
    .then((items) => {
        console.log(items)
    })
    .catch(error => console.log(error.message))
    .finally(() => console.log('Listo'))
//
// En una línea
// getProducts().then((items => console.log(items)))
