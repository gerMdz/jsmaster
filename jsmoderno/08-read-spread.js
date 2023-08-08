// Spread ...
// Expando el valor del array

let shero = ["Batman","Aquaman", "Superman", "Spiderman"]


console.log(...shero);

function mostrar_sheros(shero1, shero2) {
console.log(`
*** Los mejores héroes ***
- ${shero1}
- ${shero2}
fin.
`)
}

mostrar_sheros(...shero)

let s_shero = ["Flash", "Paturuzú", ...shero]

console.log(s_shero)

// Rest
// En este caso toma los valores y los representa como array

function pelis(peli1, peli2,...RestoPelis) {
    console.log(peli1);
    console.log(peli2);
    console.log(RestoPelis);

}

pelis('JoJo','Attack on Titan', "uno", "dos", "tres")
