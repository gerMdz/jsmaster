// alert('hello')
let nombre = 'Gerardo'
let altura = 151;

let concactenar = nombre + " " + altura

// document.write(concactenar)
// document.write(altura)

let datos = document.getElementById('datos');

datos.innerHTML =
    `
    <h3>Nombre: ${nombre}</h3>  
    <h4>Altura: ${altura} cm.</h4>
`

if(altura > 150){
    datos.innerHTML += '<h5> Mediana altura</h5>'
}else{
    datos.innerHTML += '<h5> Menos de 1.5 mts</h5>'
}

for(let i = 1998; i <= 2000; i++){
    datos.innerHTML += `<h6> Año: ${i} </h6>`
}

function muestraMiNombre(nombre) {
    return `<small> Nombre: ${nombre} </small><br/>`;
}

function imprimir(){
    let datos = document.getElementById('datos');
    datos.innerHTML += muestraMiNombre('G J M')
}

imprimir()

let nombres = ['Ger', 'Jul', 'Mont']

nombres.forEach((nombre) => {
    datos.innerHTML += `<small> NombreArray: ${nombre} </small><br/>`;
})