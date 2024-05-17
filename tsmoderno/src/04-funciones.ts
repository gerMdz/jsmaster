function saludar(name: string): string
{
    return "Saludamos a: " + name;
}

console.log(saludar("Clau"));


// void

function saludar2(name: string): void
{
    console.log("Saludamos a: " + name);
}

saludar2("Ro")

// Never / fin de la aplicación, al ejecutarse el programa se detiene la ejecución

function error(message: string): never
{
    throw new Error(message);
}

// Params

function showCountry(pais: string = "Argentina", continente?: string ): string
{
    return pais +" de " + continente
}

// Type function

let personas: (name: string, age: number) => string = function (name, age) {
    return name + " con " + age
}

console.log(personas("Ger", 54))

let favoritos: (music: string[]) => string = (music = ["Rock", "Pop"]) => {
    return music.join(", ")
}

console.log(favoritos(["JARomero", "MWitt"]))

// Personalizados o alias

type personajes = 'Batman'|'Superman'| 'Aquaman';

// Literales, ejemplo = 'Batman'|'Superman'| 'Aquaman'

function comics(personaje: personajes,coldplay: string): string
{
    return ` ${personaje} se viste con ${coldplay}`
}

console.log(comics("Aquaman","Sin capa"));


