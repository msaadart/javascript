import Vehicle from "./first-class.js";

class PoliceCar extends Vehicle{
    #siren;
    constructor(model, make, siren){
        super(model, make)
        this.#siren = siren;
    }

    getSiren(){
        return this.#siren
    }

    setSiren(siren){
        this.#siren = siren;
    }

    // Public method to start the car
    engine(){
        this._startEngine(); // Encapsulation
        return "Electric engine";
    }
}

const police = new PoliceCar('Suzuki', 'Cultus', '');
console.log(police.getInfo()); //Outputs: company name: Suzuki and model: Cultus

police.setSiren('Loud Siren');
console.log(police.getSiren()); //Outputs: Loud Siren
console.log(police.engine()); //Outputs: Engine started - Electric engine