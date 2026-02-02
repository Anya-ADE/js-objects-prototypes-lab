/*Basic Prototype Chain*/

const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels.`;
    }
};

const car = Object.create(vehicle);
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;
car.describe();

console.log(Object.hasOwn(car, 'make'));   // true
console.log(Object.hasOwn(car, 'wheels')); // false
console.log(car.wheels);    // 4 (inherited from vehicle)
console.log(car.describe()); // This vehicle has 4 wheels.