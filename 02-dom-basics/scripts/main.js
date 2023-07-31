// ES5

// function Student(name) {
//   this.name = name;
// }
// Student.prototype.getDetails = function () {
//   return this.name;
// };

// let john = new Student("John Doe");

// console.log(john.getDetails());

// ES6 Code
class Student {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return this.name;
  }
}

let jenny = new Student("Jenny Doe");

console.log(jenny.getDetails());
