const cars = (function () {
    // propiedades privadas '_Nombre'
    let _marca, _velocidad = 0, _puertas;

    function setMarca(marca) {
        _marca = marca;

        return _marca;
    }

    function getMarca() {
        return _marca;
    }

    function acelerar() {
        _velocidad++;
        return _velocidad;
    }

    function frena() {
        _velocidad--;
        return _velocidad;
    }

    return {
        setMarca,
        getMarca,
        acelerar,
        frena
    };
})();

cars.setMarca('Toyota');
cars.acelerar();
cars.acelerar();
cars.acelerar();
cars.acelerar();

console.log("Marca: " + cars.getMarca() + ", va a: " + cars.acelerar());



console.log("Marca: " + cars.getMarca() + ", va a: " + cars.frena());
