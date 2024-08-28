// first class (Parent class) - Abstraction
class Vehicle{
    constructor(make, model){
        this.model = model;
        this.make = make;
    }

    // Public method to describe the vehicle
    getInfo(){
        return(
            `company name: ${this.make} and model: ${this.model}`
        )
    }

    // Protected method (simulated with convention)
    // Abstraction is the concept of hiding the complex implementation details and exposing only the necessary parts of an object.
    _startEngine() {
        console.log('Engine started ');
    }
}

export default Vehicle;