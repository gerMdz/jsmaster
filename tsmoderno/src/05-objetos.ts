// Objetos con propiedades definidas

// let business : {
//     name: string,
//     sector: string,
//     service: string[],
//     billing: string
// } = {
//     name: "Ascendig",
//     sector: "Service Information",
//     service: ["Page web", "Software factory"],
//     billing: 3_000 + " u$d",
// };

// Typo definido para no tener que reescribir los tipos al crear otras instancias de "Empresa"
type companies = {
    name: string,
    sector: string,
    service: string[],
    billing: string,
    show: () => string
};


let business:companies = {
    name: "Ascendig",
    sector: "IT Services",
    service: ["Page web", "Software factory"],
    billing: 3_000 + " u$d",
    show() {
        return this.name + " " + this.sector
    }
};


console.log(typeof business)
console.log(typeof business.billing)

// Si quisiera sobreescribir el objeto business debo respetar las propiedades y tipos del contenido original

console.log(business.show());
