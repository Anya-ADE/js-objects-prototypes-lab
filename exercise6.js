/*Multi-Level Prototype Chain*/

const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];
manager.addTeamMember = function(member) {
    this.team.push(member);
};

console.log(Object.hasOwn(manager, 'department')); // true
console.log(Object.hasOwn(manager, 'company'));    // false
console.log(manager.species);    // Human (inherited from person)
console.log(manager.breathe());  // Breathing... (inherited from person)

manager.addTeamMember('Alice');
manager.addTeamMember('Bob');
console.log(manager.team); // ['Alice', 'Bob']  
console.log(manager.position); // Developer (inherited from employee)
console.log(manager.company);  // Tech Corp (inherited from employee)
console.log(manager.breathe()); // Breathing... (inherited from person)
console.log(manager.department); // Engineering
console.log(manager.addTeamMember); // function (defined on manager)

