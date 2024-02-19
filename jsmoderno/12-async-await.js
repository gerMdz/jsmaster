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
                reject(Error('Ups. Error'))
            }, 3000
        )
    })

}

async function f() {
    try {
        let info = await Promise.all([
            getProducts(),
            getNames()
        ])
        // let ger_products = await getProducts();
        // let ger_names = await getNames();
        console.log(info[0], info[1])
    }
    catch (error){
        console.log(error.message)
    }
}

getNames = () => {
    return new Promise((resolve, reject) => {

        setTimeout(
            () => {
                resolve('Ger Mdz');
                // reject(Error('Ups. Error'))
            }, 3000
        )
    })

}

f();
