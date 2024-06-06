"use strict";
// Objetos con propiedades definidas
let business = {
    name: "Ascendig",
    sector: "IT Services",
    service: ["Page web", "Software factory"],
    billing: 3000 + " u$d",
    show() {
        return this.name + " " + this.sector;
    }
};
console.log(typeof business);
console.log(typeof business.billing);
// Si quisiera sobreescribir el objeto business debo respetar las propiedades y tipos del contenido original
console.log(business.show());
