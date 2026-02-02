/*Method Overriding*/

const shape = {
    area: function() {
        return 0;
    }
};

const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;
rectangle.calculateArea = function() {
    return this.width * this.height;
};

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 20
console.log("Circle Area:", circle.calculateArea());       // Output: Circle Area: 78.53981633974483