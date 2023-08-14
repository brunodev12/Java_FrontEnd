class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
}

var agus = new Persona('Agustina Gomez', 33, 'F');


class Auto {
    constructor(marca, modelo, anio, propietario) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.propietario = propietario;
    }

    mostrarAuto() {
        var resultado = `Un hermoso ${this.marca} ${this.anio} ${this.modelo}`;
        console.log(resultado);
    }
}

var auto1 = new Auto('Nissan', '300ZX', 1992, agus);

console.log(auto1)

auto1.mostrarAuto();