import CarFlyweightFactory from "./car-flyweight-factory.js";
import Car from "./car-class.js";

// The flyweightFactory manages the shared state for cars.
const flyweightFactory = new CarFlyweightFactory();

// car1 and car2 share the same flyweight because they have the same make, model, and color.
const car1 = new Car(flyweightFactory.getFlyweight('Toyota', 'Corolla', 'Red'), 'Muhammad', 'ABC123');
const car2 = new Car(flyweightFactory.getFlyweight('Toyota', 'Corolla', 'Red'), 'Ahsan', 'DEF456');
// car3 uses a different flyweight because its properties differ.
const car3 = new Car(flyweightFactory.getFlyweight('Ford', 'Fiesta', 'Blue'), 'Saad', 'GHI789');

car1.displayDetails();
car2.displayDetails();
car3.displayDetails();

// The total number of flyweights created is less than the number of cars, demonstrating memory efficiency.
console.log(`Total flyweights created: ${flyweightFactory.getCount()}`);

// Benefits of the Flyweight Pattern
// Reduced Memory Usage: By sharing common properties, the Flyweight pattern significantly reduces memory usage.
// Efficient Object Management: This pattern is ideal for managing a large number of similar objects.
