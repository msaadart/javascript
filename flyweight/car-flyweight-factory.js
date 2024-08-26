// The factory ensures that flyweights are shared and reused.
import CarFlyweight from "./car-flyweight.js";

class CarFlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(make, model, color) {
        const key = `${make}_${model}_${color}`;
        if (!this.flyweights[key]) {
            this.flyweights[key] = new CarFlyweight(make, model, color);
        }
        return this.flyweights[key];
    }

    getCount() {
        console.log(this.flyweights);
        return Object.keys(this.flyweights).length;
    }
}

export default CarFlyweightFactory;
// The CarFlyweightFactory ensures that flyweight objects are reused. 
// It checks if a flyweight with the same properties exists and returns it if it does, otherwise it creates a new one.