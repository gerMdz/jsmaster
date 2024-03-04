// Clases = Moldes (no soy purista)

class Cars {

    #nGates = 4;
    constructor(marca = "BMW", modelo = 'X1', color = 'Beige Arena', velocidad = 0, year = '2024') {
        // Atributos o propiedades
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._velocidad = velocidad;
        this._year = year;
    }

    // Métodos

    addVelocidad() {
        this._velocidad += 1
    }

    subVelocidad() {
        this._velocidad -= 1
    }


    getMarca() {
        return this._marca;
    }

    setMarca(value) {
        this._marca = value;
    }

    getModelo() {
        return this._modelo;
    }

    setModelo(value) {
        this._modelo = value;
    }

    getColor() {
        return this._color;
    }

    setColor(value) {
        this._color = value;
    }

    getVelocidad() {
        return this._velocidad;
    }

    setVelocidad(value) {
        this._velocidad = value;
    }

    getYear() {
        return this._year;
    }

    setYear(value) {
        this._year = value;
    }


    get marca() {
        return this._marca;
    }

    set marca(value) {
        this._marca = value;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(value) {
        this._modelo = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get velocidad() {
        return this._velocidad;
    }

    set velocidad(value) {
        this._velocidad = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    // Static method

    static hello(name){
        return 'Hola: ' + name
    }


    get nGates() {
        return this.#nGates;
    }

    set nGates(value) {
        this.#nGates = value;
    }
}

let my_cars = new Cars();

console.log(my_cars.getMarca() + ' ' + my_cars.getModelo())

let my_cars_2 = new Cars("Mercedes", "Clase A");

console.log(my_cars_2.getModelo() + ' ' + my_cars_2.getModelo())

console.log(my_cars_2.velocidad)

my_cars_2.subVelocidad()

console.log(my_cars_2.velocidad)

my_cars_2.addVelocidad()
my_cars_2.addVelocidad()

console.log(my_cars_2.velocidad)

my_cars_2.setColor('White Polar')

console.log(my_cars_2)
console.log(my_cars_2.getColor())
my_cars_2.color = 'Black Diamond'
console.log(my_cars_2.color)
console.log(my_cars_2.nGates)
console.log(Cars.hello('Ger'))
my_cars_2.nGates = 3;
console.log(my_cars_2.nGates)
