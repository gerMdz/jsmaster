"use strict";
class Auto {
    // active:boolean;
    // velocidad:number;
    arrancar() {
        this.active = true;
    }
    stop() {
        this.active = false;
    }
    pintar() {
        this.color = "blue";
    }
    constructor(marca, modelo, year, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        // marca:string;
        // modelo:string;
        // year:number;
        this.color = "rojo";
        this.active = false;
        this.velocidad = 0;
        this.active = false;
        this.velocidad = 0;
        this.color = color;
    }
}
let nuevo = new Auto("Ford", "Truck", 2024, "violeta");
nuevo.arrancar();
console.log(nuevo);
