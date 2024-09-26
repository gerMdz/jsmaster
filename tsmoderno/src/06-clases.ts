class Auto {
    // marca:string;
    // modelo:string;
    // year:number;
    color: string = "rojo";
    active: boolean = false;
    velocidad:number=0;
    // active:boolean;
    // velocidad:number;

    arrancar() {
        this.active = true
    }

    stop(): void {
        this.active = false
    }

    pintar(): void {
        this.color = "blue"
    }

    constructor(
        public marca: string,
        public modelo: string,
        public year: number,
        color: string
    ) {
        this.active=false;
        this.velocidad=0;
        this.color=color
    }
}

let nuevo: Auto = new Auto("Ford", "Truck", 2024, "violeta")
nuevo.arrancar()

console.log(nuevo)
