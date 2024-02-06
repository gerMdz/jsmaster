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
            }, 3000
        )
    })

}

async function f() {
    let ger_products = await getProducts();
    console.log(ger_products)
}

f();
