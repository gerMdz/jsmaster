// var cuitSpan = document.getElementById("cuit");
var generar = () => {
    let cuit = [20, 24, 27, 30, 34][Math.random() * 4.9 | 0] + "" + (Math.random() * 89999999 + 10000000 | 0);
    let suma = 0;
    for (i = 0; i < cuit.length; i++) {
        suma += parseInt(cuit[cuit.length - i - 1]) * (2 + (i % 6));
    }
    let verificador = (x => x == 11 ? 0 : x)(11 - (suma % 11));
    return (verificador == 10 ) ? generar() : "cuit: " + cuit + verificador;
};
// cuitSpan.textContent = generar();


let mate = (Math.random() * 89999999 + 10000000 | 0);
console.log(generar())
console.log(mate)