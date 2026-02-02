/*Arrow Functions*/
const numbers = [1, 2, 3, 4, 5];

/*Square each number in the array*/
const squared = numbers.map(num => {
    return num * num;
});

console.log(squared); // Output: [1, 4, 9, 16, 25]

/*Filter out even numbers*/
const evens = numbers.filter(num => {
    return num % 2 === 0;
});

console.log(evens); // Output: [2, 4]

/*Calculate the sum of all numbers*/
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum); // Output: 15