//string

let nombre = "Nombre"

// number

let numero = 14;

// boolean

let mayor = true;
let mayor_edad = 1;

let menor = false;
let menor_edad = Boolean(0);

// array

let countries = [
    'España',
    'Colombia',
    'Argentina',
]

// null

let nulo = null;

// undefined

let indefinido = undefined;

// json
console.log(
    typeof nombre,
    typeof numero,
    typeof mayor,
    typeof mayor_edad,
    typeof menor,
    typeof menor_edad,
    typeof countries,
    typeof nulo,
    typeof indefinido,
    );

// Json Object Notation

let movie = {
    titulo: 'Una',
    genre: 'Animación',
    year: '2001',
    director: 'Director 1',
    mostrar: function (){
        return `**** Movie week
        ${this.titulo + ', ' + this.genre} \n
        ${this.year}
        `
    }
}

movie['pais'] = "USA";

delete movie.director;

console.log(movie)

console.log("titulo" in movie)
console.log("director" in movie)

for (let propiedad in movie){
    let dato_actual = movie[propiedad];
    if(typeof dato_actual !== "function") {
        console.log(propiedad)
        console.log('-> ' +movie[propiedad])
    }
}

