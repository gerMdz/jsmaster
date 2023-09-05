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


function procesarVenta(sale) {
    console.log("Producto comprado: ", sale)

    products = products.filter(
        product => {
            return product.name !== sale.producto
        }
    )

    return products;
}

function purchasedProduct(name) {
    return new Promise((resolve, reject) => {
        console.log('Comprando...')
        setTimeout(() => {
            resolve({
                producto: name,
                cliente: 'GerMdz'
            })
        }, 1000)
    })
}
getProducts()
    .then((items) => {

        console.log("Disponibles: " , items)
        return purchasedProduct('Monitor Grande')
    })
    // .then(sale => {
    //     procesarVenta(sale)
    //     return purchasedProduct('Monitor Mediano')
    // })
    .then(sale => {
        procesarVenta(sale)
        return purchasedProduct('Monitor Chico')
    })
    .then(sale => {
        procesarVenta(sale)
    })
    .catch(error => console.log(error.message))
    .finally(() => {
        if(products.length >= 1){
            console.log("Disponibles: " , products)
        }else{
            console.log("Sin productos Disponibles")
        }


        console.log('... listo')

    })

//
//
// En una línea
// getProducts().then((items => console.log(items)))
//
//
