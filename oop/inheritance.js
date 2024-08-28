import vehicle from "./first-class.js";

// Subclass (Child class) - Inheritance
class Car extends vehicle{
    constructor(model, make, doors){
        super(model, make) // Inherit properties from Vehicle
        this.doors = doors; // Additional property for Car
    }

    // Public method to start the car
    engine(){
        this._startEngine();
        console.log(`${this.make} ${this.model} is ready to go!`);
    }

}


// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 4);
console.log(myCar.doors); 
// Outputs: 4 doors

console.log(myCar.start());
//Outputs: Toyota Corolla is ready to go!
