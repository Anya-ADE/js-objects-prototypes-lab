/*Object Literals*/

const student = {
    firstName: "Anya",
    lastName: "Andrews",
    studentId: 2019120080,
    courses: [],
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    enrollCourse(courseName) {
        this.courses.push(courseName);
    },
    getCourseCount() {
        return this.courses.length;
    }
};

console.log(student.getFullName());
student.enrollCourse("CMPS2212");
student.enrollCourse("MATH2201");
console.log(student.getCourseCount());