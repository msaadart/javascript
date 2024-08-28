import Vehicle from "./first-class.js";

class Bus extends Vehicle{
    constructor(model, make, seat){
        super(model, make)
        this.seat = seat;
    }

    engine(){ 
        return "Electric engine";
    }
}

class PoliceCar extends Vehicle{
    constructor(model, make, siren){
        super(model, make)
        this.siren = siren;
    }

    engine(){
        return "diesel engine";
    }
}

const myBus = new Bus('Volvo', 'XC90', 50);
const myPoliceCar = new PoliceCar('Ford', 'Interceptor', 'Loud Siren');

console.log(myBus.engine()); // Output: "Electric engine"
console.log(myPoliceCar.engine()); // Output: "diesel engine"