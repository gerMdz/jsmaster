"use strict";
function saludar(name) {
    return "Saludamos a: " + name;
}
console.log(saludar("Clau"));
// void
function saludar2(name) {
    console.log("Saludamos a: " + name);
}
saludar2("Ro");
// Never / fin de la aplicación, al ejecutarse el programa se detiene la ejecución
function error(message) {
    throw new Error(message);
}
// Params
function showCountry(pais = "Argentina", continente) {
    return pais + " de " + continente;
}
// Type function
let personas = function (name, age) {
    return name + " con " + age;
};
console.log(personas("Ger", 54));
let favoritos = (music = ["Rock", "Pop"]) => {
    return music.join(", ");
};
console.log(favoritos(["JARomero", "MWitt"]));
// Literales, ejemplo = 'Batman'|'Superman'| 'Aquaman'
function comics(personaje, coldplay) {
    return ` ${personaje} se viste con ${coldplay}`;
}
console.log(comics("Aquaman", "Sin capa"));
