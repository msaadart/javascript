// This class uses both shared (flyweight) and unique state.
class Car {
    constructor(flyweight, owner, registrationNumber) {
        this.flyweight = flyweight; // Shared state
        this.owner = owner;         // Unique state
        this.registrationNumber = registrationNumber; // Unique state
    }

    displayDetails() {
        console.log(`Make: ${this.flyweight.make}, Model: ${this.flyweight.model}, Color: ${this.flyweight.color}, Owner: ${this.owner}, Registration Number: ${this.registrationNumber}`);
    }
}
export default Car;
// The Car class uses a flyweight object for the shared state (make, model, color) and adds unique properties like owner and registrationNumber.

