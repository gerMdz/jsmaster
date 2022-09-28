let name = 'Gerardo';
let apellido = 'Monty';
let profesion = 'Desa';
let nya = name + ' ' + apellido + "\n " + profesion;

let plantilla = ` hola ${name} ${apellido}
${profesion}
`

function ficha(name, apellido, profesion) {
    return `
<div class="ficha">
    <h2> ${name} ${apellido}</h2>   
    <h3> ${profesion} </h3>
    <p> Un curso práctico</p>   
</div>  
`
}

console.log(nya)
console.log(plantilla)

let boxFicha = document.createElement("section");
let text2 = document.createElement("section");
boxFicha.innerHTML = ficha('Juan', 'Perez', 'Albañil');
boxFicha.innerHTML += ficha('Peter', 'Lanzani', 'Cocinero');
boxFicha.innerHTML += ficha('Pedro', 'Páramo', 'Desarrollo');
text2.innerHTML = ficha('Gerardo', 'Julio', 'Desa')


// document.createElement("section").innerHTML.text = ficha('Gerardo', 'Julio', 'Desa');

document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(boxFicha);
    document.querySelector('#datotitos').appendChild(text2);
}, false)