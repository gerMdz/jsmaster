// JS común
let contenedor = document.getElementById('cargando')

contenedor.innerText = "Texto uno"
contenedor.style.border = "1px solid red"
contenedor.style.backgroundColor = "green"
contenedor.className = "ficha"

// Moderno

let contenidoCaja = document.querySelector("#cargando")

contenidoCaja.innerText = "Texto dos"
contenidoCaja.style.border = "2px solid blue"
contenidoCaja.style.backgroundColor = "orange"
contenedor.className = "ficha_dos"

let containerCaja = document.querySelectorAll(".container")

containerCaja.forEach((item, indice) => {
    item.innerText = `Texto ${indice + 1}`
    item.className = "ficha"
})

for(let indice in containerCaja){
    // console.log(elemento)
       if(parseInt(indice) === 2){
           console.log('28')
           containerCaja[indice].className = "ficha_dos"
       }
}


