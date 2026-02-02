/*Function Declaration*/

/*Function to calculate the area*/
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(8, 3));  // Output: 24
console.log(calculateArea(9, 7));  // Output: 63
console.log(calculateArea(6.5, 2)); // Output: 13
console.log(calculateArea(1.75, 4));  // Output: 7

/*Function Expression*/

/*Function to calculate the perimeter*/
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};

console.log(calculatePerimeter(5, 10)); // Output: 30
console.log(calculatePerimeter(7, 3));  // Output: 20
console.log(calculatePerimeter(0, 4));  // Output: 8
console.log(calculatePerimeter(6.5, 2)); // Output: 17
console.log(calculatePerimeter(8.5, 9));  // Output: 35