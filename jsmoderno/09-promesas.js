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
            }, 500
        )
    })

}

getProducts()
    .then((items) => {
        console.log(items)
    })

// En una línea
getProducts().then((items => console.log(items)))
